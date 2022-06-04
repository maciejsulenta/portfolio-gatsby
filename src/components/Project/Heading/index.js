import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import SplitText from "../../../utils/Split3.min";
import './style.scss'

export default function Heading({ title }) {
  return (
    <section className="header-container">
      <ul className="header-menu">
        <li>Intro</li>
        <li>About</li>
        <li>Featured</li>
      </ul>
      <h1 id="header--text">{title}</h1>
    </section>
  );
}
