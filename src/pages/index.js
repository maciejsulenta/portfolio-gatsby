import React from "react";
import "../styles/style.scss";
import Header from "../components/Header";
import CursorManager from "../components/CustomCursor/CursorManager";
import CustomCursor from "../components/CustomCursor";

const Index = () => {
  return (
    <>
      {/* <CustomCursor /> */}
      <Header />
      <div className="main-container">
        <h1>PEES</h1>
      </div>
    </>
  );
};
export default Index;
