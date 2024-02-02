import React, { useState, useEffect } from "react";
import "./Circle.css";

const ScrollingDiv = () => {
  const [dimensions, setDimensions] = useState({
    width: `${0.1}rem`,
    height: `${0.1}rem`,
    borderradius: `${50}%`,
  });

  const handleScroll = () => {
    const newWidth = 0.05 + window.scrollY * 0.1;
    const newHeight = 0.05 + window.scrollY * 0.1;

    const maxWidth = 80;
    const maxHeight = 80;

    const newBorderRadius =
      newWidth > maxWidth || newHeight > maxHeight ? "0%" : "50%";

    setDimensions({
      width: Math.min(newWidth, maxWidth),
      height: Math.min(newHeight, maxHeight),
      borderradius: newBorderRadius,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="main-circle-div">
      <div
        className={
          dimensions.borderradius === "0%"
            ? "scrolling-div update"
            : "scrolling-div"
        }
        style={{
          width: `${dimensions.width}rem`,
          height: `${dimensions.height}rem`,
          borderRadius: dimensions.borderradius,
        }}
      >
        <div
          className={
            dimensions.borderradius === "0%"
              ? "display-content"
              : "display-none"
          }
        >
          Your Component is goes here as a component
        </div>
      </div>

      <div className="when-on-mobile-screen">
        Your Component is goes here as a component
      </div>
    </div>
  );
};

export default ScrollingDiv;