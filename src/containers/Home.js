import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectItem from "../components/ProjectItem";
import { pageData } from "../utils/data";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="main-container" id="main-container">
        {pageData.map((project, index) => (
          <ProjectItem key={index} project={project} itemIndex={index} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
