import React from "react";
import "../styles/style.scss";
import "../styles/home.scss";
import Header from "../components/Header";
import CursorManager from "../components/CustomCursor/CursorManager";
import CustomCursor from "../components/CustomCursor";

const Index = () => {
  return (
    <CursorManager>
      <CustomCursor />
      <Header />
      <div className="home">
        <h1 className="home__name">PEES</h1>
      </div>
    </CursorManager>
  );
};
export default Index;
