// Layout.js
import React from "react";
import HeaderPage from "../components/homePage/HeaderPage";
import FooterPage from "../components/homePage/FooterPage";

const Layout = ({ children }) => {
  return (
    <>
    <HeaderPage />
      {children}
    <FooterPage />

      </>
  );
};

export default Layout;
