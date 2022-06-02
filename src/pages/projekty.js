import React, { useState, useRef, useEffect } from "react";
import CursorManager from "../components/CustomCursor/CursorManager";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectItem from "../components/ProjectItem";
import { pageData } from "../utils/data";
import CustomCursor from "../components/CustomCursor";
import { graphql, Link } from "gatsby";

export default function Work({
  data: {
    allDatoCmsProject: { nodes },
  },
}) {
  const menuItems = useRef(null);
  const [renderItems, setRenderItems] = useState(nodes);
  console.log("data", nodes);

  const cloneItems = () => {
    const itemHeight = menuItems.current.childNodes[0].offsetHeight;
    const fitMax = Math.ceil(window.innerHeight / itemHeight);
    const clonedItems = [...renderItems]
      .filter((_, index) => index < fitMax)
      .map((target) => target);

    setRenderItems([...renderItems, ...clonedItems]);
    return clonedItems.length * itemHeight;
  };

  const getScrollPos = () => {
    return (
      (menuItems.current.pageYOffset || menuItems.current.scrollTop) -
      (menuItems.current.clientTop || 0)
    );
  };

  const setScrollPos = (pos) => {
    menuItems.current.scrollTop = pos;
  };

  const initScroll = () => {
    const scrollPos = getScrollPos();
    if (scrollPos <= 0) {
      setScrollPos(1);
    }
  };

  useEffect(() => {
    const clonesHeight = cloneItems();
    initScroll();
    menuItems.current.style.scrollBehavior = "unset";
    const scrollUpdate = () => {
      const scrollPos = getScrollPos();
      if (clonesHeight + scrollPos >= menuItems.current.scrollHeight) {
        setScrollPos(1);
      } else if (scrollPos <= 0) {
        setScrollPos(menuItems.current.scrollHeight - clonesHeight);
      }
    };

    menuItems.current.addEventListener("scroll", scrollUpdate);
    return () => menuItems.current.removeEventListener("scroll", scrollUpdate);
  }, []);

  return (
    <CursorManager>
      <CustomCursor />
      <Header />
      <div className="main-container" id="main-container">
        <ul ref={menuItems}>
          {renderItems.map((project, index) => (
            <Link className="project-link" to={`/projekty/${project.slug}`}><ProjectItem key={index} project={project} itemIndex={index} /></Link>
          ))}
        </ul>
      </div>
      <Footer />
    </CursorManager>
  );
}

export const query = graphql`
  query {
    allDatoCmsProject {
      nodes {
        id
        info
        image {
          filename
          url
        }
        title
        slug
      }
    }
  }
`;
