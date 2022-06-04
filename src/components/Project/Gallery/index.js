import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import cn from "classnames";
import useOnScreen from "../../../hooks/useOnScreen";

function GalleryItem({ url, index, updateActiveImage }) {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index]);

  return (
    <div
      className={cn("gallery-item-wrapper", { "is-reveal": onScreen })}
      ref={ref}
    >
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
  const ref = useRef(null);
  const [activeImage, setActiveImage] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      const sections = gsap.utils.toArray(".gallery-item-wrapper");
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          start: "top top",
          trigger: ref.current,
          scroller: "#main-container",
          pin: true,
          scrub: 0.5,
          span: 1 / (sections.length - 1),
          end: () => `+=${ref.current.offsetWidth}`,
        },
      });
      ScrollTrigger.refresh();
    });
  }, []);

  return (
    <section
      className="section-wrapper gallery-wrap"
      data-scroll-section
      id="gallery"
    >
      <div className="gallery" ref={ref}>
        <div className="gallery-counter">
          <span>{activeImage}</span>
          <span className="divider" />
          <span>{gallery.length}</span>
        </div>
        {gallery.map((image, index) => (
          <GalleryItem
            key={image.filename}
            {...image}
            index={index}
            updateActiveImage={(index) => setActiveImage(index + 1)}
          />
        ))}
      </div>
    </section>
  );
}
