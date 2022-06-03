import React from "react";
import "../styles/style.scss";
import "../styles/home.scss";
import Header from "../components/Header";
import CursorManager from "../components/CustomCursor/CursorManager";
import CustomCursor from "../components/CustomCursor";

const Index = () => {
  return (
    <main className="main-wrapper">
      <CursorManager>
        <CustomCursor />
        <Header />
      </CursorManager>
    </main>
  );
};
export default Index;
