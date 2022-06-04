import React from "react";
import "./style.scss";
import SectionHeader from "../SectionHeader";

export default function About() {
  return (
    <section className="about-section">
      <SectionHeader title="about" />
      <p id="headline">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </section>
  );
}
