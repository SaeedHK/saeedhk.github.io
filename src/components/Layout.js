import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ mobile, children, footerPosition }) => (
  <div>
    <Navbar />
    {children}
  </div>
);

export default Layout;
