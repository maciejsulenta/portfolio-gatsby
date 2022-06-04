import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import SplitText from "../../../utils/Split3.min";
import "./style.scss";
import { Link } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";

export default function Heading({ title }) {
  useEffect(() => {
    const split = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineChildren",
    });

    const splitParent = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineParent",
    });

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  }, []);

  return (
    <section className="header-container" data-scroll-section>
      <ul className="header-menu">
        <li>Intro</li>
        <li>O projekcie</li>
        <li>Galeria</li>
        <li>
          <Link to="/projekty">Wróć</Link>
        </li>
      </ul>
      <h1 id="header-text">{title}</h1>
    </section>
  );
}
