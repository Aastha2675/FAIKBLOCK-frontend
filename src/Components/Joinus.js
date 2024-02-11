import { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import "./LoginSignUpJoinUs.css";
import { useWriteContract } from 'wagmi';
import abi from "../Metadata/abi.json";
import contractAddress from "../Metadata/ContractAddress";
import { useAccount } from "wagmi";
import { sepolia } from 'wagmi/chains';
import { parseEther } from 'viem';
/* global BigInt */



const JoinUs = ({ onClose }) => {
  const [Productname, setProductname] = useState("");
  const [Date, setDate] = useState("");
  const [Companyname, setCompanyname] = useState("");
  const [WalletAddress, setWalletAddress] = useState("");
  const [password, setPassword] = useState("");
  const [Productcost, setProductcost] = useState("");
  const [allEntries, setAllEntries] = useState([]);
  
  const { writeContract } = useWriteContract()
  const account = useAccount()
  
  
  
  const interact = (productname,productcost,date,passwordd,companyname ) => {
  
    
    const myBigIntCost = BigInt(productcost);  
    const myNumber = Number(myBigIntCost);
    const cost = myNumber*(10**18);
    console.log(cost);

    if (!Companyname || !WalletAddress || !password) {
      alert("Please fill in all details.");
      return;
    }

    
    return (writeContract({
      abi,
      address: contractAddress,
      functionName: 'register',
      args: [
        productname,//Productname,
        companyname,// Companyname,
        account.address,
        date,// Date,
        passwordd,// password,
        cost// Productcost
      ],
      account:account.address,
      chainId:sepolia.id,
      value: parseEther('0.01'),
    }))
  
  
  
  }
  const onSubmitForm = (e) => {
    e.preventDefault();

    const newEntry = {
      Productname: Productname,
      Date: Date,
      Companyname: Companyname,
      Productcost: Productcost,
      WalletAddress: WalletAddress,
      password: password,
    };

    setAllEntries([...allEntries, newEntry]);
  
    setTimeout( () => {

      setProductname("");
      setDate("");
      setCompanyname("");
      setProductcost("");
      setWalletAddress("");
      setPassword("");
    
    },3000)
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
        <h4>Come Join the Top 1% of the Brands</h4>
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
          type="text"
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
          type="number"
          placeholder="Enter Product cost"
          name="Productcost"
          id="Productcost"
          autoComplete="off"
          value={Productcost}
          onChange={(e) => setProductcost(e.target.value)}
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

        <button className="btn" onClick={ () => interact(Productname,Productcost,Date,password,Companyname)}> Join Us</button>
      </form>
    </>
  );
};

export default JoinUs;
