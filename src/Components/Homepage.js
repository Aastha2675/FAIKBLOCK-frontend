import React from "react";
import MainText from "./MainText";
import Circle from "./Circle";
import Footer from "./Footer";
import Aboutus from "./Aboutus";
import Statistics from "./Statistics";
import Navbarpage from "./Navbarpage";

// import Map from "./Map";
// import Scroll from "./S";

const Homepage = () => {
  return (
    <>
      <Navbarpage />
      <MainText />
      <Circle />
      <Statistics />
      {/* <Scroll /> */}
      {/* <Map /> */}
      <Aboutus />
      <Footer />
    </>
  );
};

export default Homepage;
