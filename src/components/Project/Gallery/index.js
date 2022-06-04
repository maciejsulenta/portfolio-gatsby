import React, { useState } from "react";
import "./style.scss";

function GalleryItem({ url, filename, updateActiveImage }) {
  return (
    <div className="gallery-item-wrapper">
      <div />
      <div className="gallery-item">
        <div className="gallery-item-info">
          <h1 className="gallery-info-title">Title</h1>
          <h6 className="gallery-info-subtitle">Subtitle</h6>
          <p className="gallery-info-category">Category</p>
        </div>
        <div
          className="gallery-item-image"
          style={{ backgroundImage: `url(${url})` }}
        ></div>
        <div />
      </div>
    </div>
  );
}

export default function Gallery({ gallery }) {
  const [activeImage, setActiveImage] = useState(1);

  return (
    <section className="section-wrapper gallery-wrap">
      <div className="gallery">
        <div className="gallery-counter">
          <span>{activeImage}</span>
          <span className="divider" />
          <span>{gallery.length}</span>
        </div>
        {gallery.map((image, index) => (
          <GalleryItem
            key={image.filename}
            {...image}
            updateActiveImage={(index) => setActiveImage(index + 1)}
          />
        ))}
      </div>
    </section>
  );
}
