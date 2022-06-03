import React, { useState, useEffect, useRef } from "react";
import { graphql, Link } from "gatsby";
import Header from "../../components/Header";
import "../../styles/project.scss";
import cn from "classnames";

export default function Projekt({
  data: {
    datoCmsProject: { title, image, info, gallery },
  },
}) {
  const sideMenu = useRef(null);
  const [activeImage, setActiveImage] = useState(1);
  const [menuBg, setMenuBg] = useState(false);

  const changeBg = () => {
    if (window.scrollY > 0) {
      setMenuBg(true);
    } else {
      setMenuBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBg);
    return () => window.removeEventListener("scroll", changeBg);
  }, []);

  return (
    <section className="main-wrapper">
      <Header />
      <section className="header">
        <ul
          className={cn("header__menu", { header__scroll: menuBg })}
          ref={sideMenu}
        >
          <li>
            <a href="#intro" className={menuBg ? "link" : ""}>
              Intro
            </a>
          </li>
          <li>
            <a href="#o-projekcie" className={menuBg ? "link" : ""}>
              O projekcie
            </a>
          </li>
          <li>
            <a href="#galeria" className={menuBg ? "link" : ""}>
              Galeria
            </a>
          </li>
          <li>
            <Link to="/projekty" className={menuBg ? "link" : ""}>
              Powrót do projektów
            </Link>
          </li>
        </ul>
        <h1 id="header-text">{title}</h1>
      </section>
      <section className="featured" id="intro">
        <div className="featured__row">
          <h6>Green</h6>
          <img src={gallery[0].url} />
        </div>
        <div className="featured__column">
          <h6>lily</h6>
          <img src={gallery[1].url} />
        </div>
      </section>
      <section className="about" id="o-projekcie">
        <h6 className="about__header">Section header</h6>
        <p id="headline">
          Flirty Flowers is a blog about flowers and the floral
        </p>
      </section>
      <section className="gallery gallery-wrap" id="galeria">
        <div className="gallery__data">
          <div className="gallery__counter">
            <span>{activeImage}</span>
            <span className="gallery__divider"></span>
            <span>{gallery.length}</span>
          </div>
          {gallery.map((image, index) => (
            <div
              key={image.filename}
              index={index}
              updateActiveImage={(index) => setActiveImage(index + 1)}
              className="gallery__item-wrapper"
            >
              <div />
              <div className="gallery__item">
                <div className="gallery__item-info">
                  <h1 className="gallery__item-title">Title</h1>
                  <h6 className="gallery__item-subtitle">Subtitle</h6>
                  <p className="gallery__item-category">Category</p>
                </div>
                <div
                  className="gallery__item-image"
                  style={{ backgroundImage: `url(${image.url})` }}
                ></div>
              </div>
              <div />
            </div>
          ))}
        </div>
      </section>
      <section className="footer">
        <p className="footer__header about__header">Made in</p>
        <h1 className="footer__location" id="location-text">
          Rjo De Rzanejrno
        </h1>
      </section>
      {/* <h1>{title}</h1>
      <img src={image.url} alt={image.filename} />
      {JSON.parse(info).map((element) => (
        <p key={element}>
          <span>{element}</span>
        </p>
      ))} */}
    </section>
  );
}

export const query = graphql`
  query ($id: String) {
    datoCmsProject(id: { eq: $id }) {
      info
      image {
        filename
        url
      }
      slug
      title
      id
      gallery {
        filename
        url
      }
    }
  }
`;
