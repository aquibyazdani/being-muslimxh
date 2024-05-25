// Layout.js
import React from "react";
import "./Layout.css"; // Import the styled SCSS

const Layout = ({ children }) => {
  return <div className="layout_wrapper">{children}</div>;
};

export default Layout;
