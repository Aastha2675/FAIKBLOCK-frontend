import { useEffect, useState } from "react";
import "./Pages.css";
import ReactConfetti from "react-confetti";
import { useNavigate } from "react-router-dom";

const Page1 = () => {
  const navigate = useNavigate();
  const gotohome = () => {
    navigate("/");
  };

  const [windowdimenstions, setdimentions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectSize = () => {
    setdimentions({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowdimenstions]);

  return (
    <>
      <div className="scanner-container">
        <div className="page1-container">
          <ReactConfetti
            width={windowdimenstions.width}
            height={windowdimenstions.height}
            tweenDuration={1000}
          />
          <div className="tick-icon"></div>
          <h3>Product is Original</h3>
          <div className="details">
            <p>Product Name : product name </p>
            <p>Manufacturing Company : Company name</p>
            <p>Date of Expiry : Date</p>
            <button className="payment-btn"> Payment</button>
            <p className="go-back" onClick={gotohome}>
              Go back!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
