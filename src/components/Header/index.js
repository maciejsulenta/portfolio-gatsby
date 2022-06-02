import React, { useContext, useState } from "react";
import "./style.scss";
import { CursorContext } from "../CustomCursor/CursorManager";
import cn from "classnames";
import { Link } from "gatsby";

export default function Header() {
  const { setSize } = useContext(CursorContext);
  const [opened, setOpen] = useState(false);
  const handleMouseEnter = () => {
    setSize("medium");
  };

  const handleMouseLeave = () => {
    setSize("small");
  };

  return (
    <>
      <div className="overlay-nav">
        <div className="header-container">
          <Link
            to="/"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="header-link"
          >
            o nas
          </Link>
          <Link
            to="/projekty"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="header-link"
          >
            projekty
          </Link>
          <Link
            to="/kontakt"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="header-link"
          >
            kontakt
          </Link>
        </div>
      </div>
      <div
        className={cn("overlay-burger-icon", { "as-opened": opened })}
        onClick={() => setOpen(!opened)}
      />

      <div className={cn("overlay-burger-menu", { "as-opened": opened })}>
        <div className="burger-menu-header">h333</div>
        <Link to="/" className="burger-link">
          o nas
        </Link>
        <Link to="/projekty" className="burger-link">
          projekty
        </Link>
        <Link to="/kontakt" className="burger-link">
          kontakt
        </Link>
      </div>
    </>
  );
}
