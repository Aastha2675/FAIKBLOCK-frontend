import { useNavigate } from "react-router-dom";
import "./Pages.css";

const Page2 = () => {
  const navigate = useNavigate();
  const gotohome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="scanner-container">
        <div className="page2-container">
          <div className="tick-icon"></div>
          <div class="rubber_stamp">Expired</div>
          <h3>
            Product is Original{" "}
            <p className="out-of">But Out Of Expiry Date!</p>
          </h3>
          <div className="details">
            <p>Product Name : product name </p>
            <p>Manufacturing Company : Company name</p>
            <p>Date of Expiry : Date</p>
            <button className="payment-btn" disabled={true}>
              Payment
            </button>
            <p className="go-back" onClick={gotohome}>
              Go back!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page2;
