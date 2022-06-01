import React from "react";
import Image from "./Image";
import "./style.scss";
import Title from "./Title";

export default function ProjectItem({ project, itemIndex }) {
  return (
    <li className="project-item-container">
      <Title title={project.title} />
      <Image url={project.url} />

      <div className="info-block">
        <p className="info-block-header">
          <span>
            <hash />0{itemIndex}
          </span>
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
