import React, { useReducer, useRef, useContext } from "react";
import cn from "classnames";
import "./style.scss";
import Image from "./Image";
import Title from "./Title";
import animate from "./animate";
import { CursorContext } from "../CustomCursor/CursorManager";

const initialState = {
  opacity: 0,
  parallaxPos: { x: 0, y: -20 },
  scale: 0.8,
  rotationPosition: 0,
  active: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_OPACITY": {
      return { ...state, opacity: action.payload };
    }
    case "MOUSE_COORDINATES": {
      return { ...state, parallaxPos: action.payload };
    }
    case "CHANGE_ROTATION": {
      return { ...state, rotationPosition: action.payload };
    }
    case "CHANGE_SCALE": {
      return { ...state, scale: action.payload };
    }
    case "MOUSE_ENTER": {
      return { ...state, active: true };
    }
    case "MOUSE_LEAVE": {
      return { ...state, active: false };
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
  const { setSize } = useContext(CursorContext);

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

  const handleScale = (initialScale, newScale, duration) => {
    animate({
      fromValue: initialScale,
      toValue: newScale,
      onUpdate: (newScale, callback) => {
        dispatch({ type: "CHANGE_SCALE", payload: newScale });
        callback();
      },
      onComplete: () => {},
      duration: duration,
      easeMethod: easeMethod,
    });
  };

  const handleRotation = (currentRotation, duration) => {
    const newRotation = Math.random() * 15 * Math.round(Math.random() ? 1 : -1);
    animate({
      fromValue: currentRotation,
      toValue: newRotation,
      onUpdate: (newRotation, callback) => {
        dispatch({ type: "CHANGE_ROTATION", payload: newRotation });
        callback();
      },
      onComplete: () => {},
      duration: duration,
      easeMethod: easeMethod,
    });
  };

  const handleMouseEnter = () => {
    handleOpacity(0, 1, 100);
    handleScale(0.8, 1, 100);
    handleRotation(state.rotationPosition, 100);
    listItem.current.addEventListener("mousemove", parallax);
    dispatch({ type: "MOUSE_ENTER" });
    setSize("regular");
  };

  const handleMouseLeave = () => {
    listItem.current.removeEventListener("mousemove", parallax);
    handleOpacity(1, 0, 100);
    handleScale(1, initialState.scale, 100);
    handleRotation(state.rotationPosition, 100);
    dispatch({ type: "MOUSE_COORDINATES", payload: initialState.parallaxPos });
    dispatch({ type: "MOUSE_LEAVE" });
    setSize("small");
  };

  const { opacity, parallaxPos, scale, rotationPosition, active } = state;

  return (
    <li className="project-item-container" ref={listItem}>
      <Title
        title={project.title}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
      <Image
        url={project.url}
        opacity={opacity}
        parallaxPos={parallaxPos}
        scale={scale}
        rotationPosition={rotationPosition}
      />

      <div className={cn("info-block", { "as-active": active })}>
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
