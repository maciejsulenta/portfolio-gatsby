import React, { useReducer, useRef } from "react";
import "./style.scss";
import Image from "./Image";
import Title from "./Title";
import animate from "./animate";

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
  const easeMethod = "easeInOutCubic";

  const parallax = (event) => {
    const x = (window.innerWidth - event.pageX * speed) / 100;
    const y = (window.innerHeight - event.pageY * speed) / 100;

    dispatch({ type: "MOUSE_COORDINATES", payload: { x, y } });
  };

  const handleOpacity = (initialOpacity, newOpacity, duration) => {
    animate({
      fromValue: initialOpacity,
      toValue: newOpacity,
      onUpdate: (newOpacity, callback) => {
        dispatch({ type: "CHANGE_OPACITY", payload: newOpacity });
        callback();
      },
      onComplete: () => {},
      duration: duration,
      easeMethod: easeMethod,
    });
  };

  const handleMouseEnter = () => {
    handleOpacity(0, 1, 800);
    listItem.current.addEventListener("mousemove", parallax);
  };


  const handleMouseLeave = () => {
    listItem.current.removeEventListener("mousemove", parallax);
    handleOpacity(1, 0, 800);
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
