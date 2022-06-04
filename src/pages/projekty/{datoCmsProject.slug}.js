import React, { useState, useEffect, useRef } from "react";
import { graphql } from "gatsby";
import Header from "../../components/Header";
import useLocoScroll from "../../hooks/useLocoScroll";
import Footer from "../../components/Project/Footer";
import Heading from "../../components/Project/Heading";
import Featured from "../../components/Project/Featured";
import Gallery from "../../components/Project/Gallery";
import About from "../../components/Project/About";
import "../../styles/style.scss";

export default function Projekt({
  data: {
    datoCmsProject: { title, image, info, gallery },
  },
}) {
  const [preloader, setPreloader] = useState(true);
  useLocoScroll(!preloader);
  const [timer, setTimer] = useState(3);
  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  return (
    <>
      {preloader ? (
        <div className="loader-wrapper absolute">
          <h1>PEES</h1>
          <h2>Akat tego typu benc</h2>
        </div>
      ) : (
        <>
          <Header />
          <div className="main-container" id="main-container" data-scroll-container>
            <Heading title={title} />
            <Featured gallery={gallery} />
            <About />
            <Gallery gallery={gallery} />
            <Footer />
            {/* <h1>{title}</h1>
    <img src={image.url} alt={image.filename} />
    {JSON.parse(info).map((element) => (
      <p key={element}>
        <span>{element}</span>
      </p>
    ))} */}
          </div>
        </>
      )}
    </>
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
