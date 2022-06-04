import React from "react";
import "./style.scss";

export default function Featured({ gallery }) {
  return (
    <section className="featured-section" data-scroll-section id="intro">
      <div className="featured-row-layout">
        <h6>Green</h6>
        <img src={gallery[0].url} data-scroll />
      </div>
      <div className="featured-column-layout">
        <h6>lily</h6>
        <img src={gallery[1].url} data-scroll />
      </div>
    </section>
  );
}
