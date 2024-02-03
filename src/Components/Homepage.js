import React from "react";
import MainText from "./MainText";
import Circle from "./Circle";
import Footer from "./Footer";
import Aboutus from "./Aboutus";
import Navbarpage from "./Navbarpage";

const Homepage = () => {
  return (
    <>
      <Navbarpage />
      <MainText />
      <Circle />
      <Aboutus />
      <Footer />
    </>
  );
};

export default Homepage;
