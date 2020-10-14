import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ mobile, children, footerPosition }) => (
  <div>
    <Navbar />
    {children}
    <Footer footerPosition={footerPosition} />
  </div>
);

export default Layout;
