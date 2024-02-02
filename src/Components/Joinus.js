import { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import "./LoginSignUpJoinUs.css";

const JoinUs = ({ onClose }) => {
  const [Productname, setProductname] = useState("");
  const [Date, setDate] = useState("");
  const [Companyname, setCompanyname] = useState("");
  const [WalletAddress, setWalletAddress] = useState("");
  const [password, setPassword] = useState("");
  const [allEntries, setAllEntries] = useState([]);

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (!Companyname || !WalletAddress || !password) {
      alert("Please fill in all details.");
      return;
    }

    const newEntry = {
      Productname: Productname,
      Date: Date,
      Companyname: Companyname,
      WalletAddress: WalletAddress,
      password: password,
    };

    setAllEntries([...allEntries, newEntry]);

    console.log(newEntry);
    setProductname("");
    setDate("");
    setCompanyname("");
    setWalletAddress("");
    setPassword("");
  };

  return (
    <>
      <div className="container-wrapper" onClick={onClose}></div>
      <form onSubmit={onSubmitForm} className="joinus-container">
        <div className="design">
          <div className="pill-2 rotate-45"></div>
          <div className="pill-3 rotate-45"></div>
        </div>
        <IoCloseCircle className="icon-close-joinus" onClick={onClose} />
        <h1> Join Us </h1>
        <input
          type="text"
          placeholder="Enter Product Name"
          name="productname"
          id="productname"
          autoComplete="off"
          value={Productname}
          onChange={(e) => setProductname(e.target.value)}
          required={true}
        />

        <input
          type="integer"
          placeholder="Enter Expiry Date "
          name="Date"
          id="Date"
          autoComplete="off"
          value={Date}
          onChange={(e) => setDate(e.target.value)}
          required={true}
        />

        <input
          type="text"
          placeholder="Enter Company Name"
          name="Companyname"
          id="Companyname"
          autoComplete="off"
          value={Companyname}
          onChange={(e) => setCompanyname(e.target.value)}
          required={true}
        />

        <input
          type="text"
          placeholder="Enter Wallet Address"
          name="WalletAddress"
          id="Companyname"
          autoComplete="off"
          value={WalletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          required={true}
        />

        <input
          type="password"
          placeholder="Password"
          Productname="password"
          id="password"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required={true}
        />

        <button className="btn"> Join Us</button>
      </form>
    </>
  );
};

export default JoinUs;
