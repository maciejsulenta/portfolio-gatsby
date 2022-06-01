import React, { useContext, useState } from "react";
import "./style.scss";
import { CursorContext } from "../CustomCursor/CursorManager";
import cn from "classnames";

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
          <h1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            collab
          </h1>
          <h1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            studio
          </h1>
        </div>
      </div>
      <div
        className={cn("overlay-burger-icon", { "as-opened": opened })}
        onClick={() => setOpen(!opened)}
      />

      <div className={cn("overlay-burger-menu", { "as-opened": opened })}>
        <div className="burger-menu-header">#menu</div>
        <h1>collab</h1>
        <h1>studio</h1>
      </div>
    </>
  );
}
