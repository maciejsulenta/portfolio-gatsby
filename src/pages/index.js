import React from "react";
import "../styles/home.scss";
import Header from "../components/Header";
import CursorManager from "../components/CustomCursor/CursorManager";
import CustomCursor from "../components/CustomCursor";

const Index = () => {
  return (
    <CursorManager>
      <CustomCursor />
      <Header />
    </CursorManager>
  );
};
export default Index;
