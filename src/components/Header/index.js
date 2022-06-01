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
            about us
          </Link>
          <Link
            to="/work"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="header-link"
          >
            work
          </Link>
          <Link
            to="/"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="header-link"
          >
            contact
          </Link>
        </div>
      </div>
      <div
        className={cn("overlay-burger-icon", { "as-opened": opened })}
        onClick={() => setOpen(!opened)}
      />

      <div className={cn("overlay-burger-menu", { "as-opened": opened })}>
        <div className="burger-menu-header">#menu</div>
        <Link
            to="/"
            className="burger-link"
          >
            about us
          </Link>
          <Link
            to="/work"
            className="burger-link"
          >
            work
          </Link>
          <Link
            to="/"
            className="burger-link"
          >
            contact
          </Link>
      </div>
    </>
  );
}
