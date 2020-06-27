import React from "react";

import HomeHeader from "./components/HomeHeader";
import Members from "./components/Members";
import Footer from "./components/Footer";
import Support from "./components/Support";
import About from "./components/About";

const HomepageLayout = () => (
  <div style={{ direction: "rtl" }}>
    <HomeHeader />
    <Members />
    <About />
    <Support />
    <Footer />
  </div>
);

export default HomepageLayout;
