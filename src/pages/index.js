import React from "react";
import "../styles/style.scss";
import "../styles/home.scss";
import Header from "../components/Header";
import CursorManager from "../components/CustomCursor/CursorManager";
import CustomCursor from "../components/CustomCursor";

const Index = () => {
  return (
    <>
      {/* <CustomCursor /> */}
      <Header />
      <div className="main-container">
        <div className="logo">
          <h1 className="logo__one">PE</h1>
          <h1 className="logo__two">ES</h1>
        </div>
        <div className="info">
          <div className="info__details">
            <h2 className="info__title">Strony internetowe</h2>
            <p className="info__description">Description</p>
          </div>
          <div className="info__details">
            <h2 className="info__title">Aplikacje</h2>
            <p className="info__description">Description</p>
          </div>
          <div className="info__details">
            <h2 className="info__title">Grafika</h2>
            <p className="info__description">Description</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;
