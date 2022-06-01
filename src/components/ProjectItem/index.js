import React, { useReducer, useRef } from "react";
import "./style.scss";
import Image from "./Image";
import Title from "./Title";

const initialState = {
  opacity: 0,
  parallaxPos: { x: 0, y: -20 },
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_OPACITY": {
      return { ...state, opacity: action.payload };
    }
    case "MOUSE_COORDINATES": {
      return { ...state, parallaxPos: action.payload };
    }
    default: {
      throw new Error();
    }
  }
}

export default function ProjectItem({ project, itemIndex }) {
  const speed = -5;
  const listItem = useRef(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  const parallax = (event) => {
    const x = (window.innerWidth - event.pageX * speed) / 100;
    const y = (window.innerHeight - event.pageY * speed) / 100;

    dispatch({ type: "MOUSE_COORDINATES", payload: { x, y } });
  };

  const handleMouseEnter = () => {
    dispatch({ type: "CHANGE_OPACITY", payload: 1 });
    listItem.current.addEventListener("mousemove", parallax);
  };
  const handleMouseLeave = () => {
    listItem.current.removeEventListener("mousemove", parallax);
    dispatch({ type: "CHANGE_OPACITY", payload: 0 });
    dispatch({ type: "MOUSE_COORDINATES", payload: initialState.parallaxPos });
  };

  const { opacity, parallaxPos } = state;

  return (
    <li className="project-item-container" ref={listItem}>
      <Title
        title={project.title}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
      <Image url={project.url} opacity={opacity} parallaxPos={parallaxPos} />

      <div className="info-block">
        <p className="info-block-header">
          <span>#0{itemIndex}</span>
        </p>
        {project.info.map((element) => (
          <p key={element}>
            <span>{element}</span>
          </p>
        ))}
      </div>
    </li>
  );
}
