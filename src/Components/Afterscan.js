import React from "react";
import Page1 from "./Page1";
import Page3 from "./Page3";
import { useAccount } from "wagmi";
import { useReadContract } from "wagmi";
import abi from "../Metadata/abi.json";
import contractAddress from "../Metadata/ContractAddress";
import { sepolia } from 'wagmi/chains';


const Afterscan = (props) => {
    const account = useAccount();

    const{ data,error,isPending} = useReadContract({
        abi,
        address: contractAddress,
        functionName: "getter",
        chainId: sepolia.chainId,
        account: account.address
    });
    
    if(data) {
        
        console.log(data);
        for (let i = 0; i < data.length; i++) {

            if (props.parameter == data[i].uuid) {
                console.log("Hey Girl");
                console.log(i);
                return <Page1 productid={i}   productname={data[i].name} companyname={data[i].name_of_company} expiry={data[i].expiry} cost={data[i].cost} />
            }
        }
        return <Page3 />
    }

}

export default Afterscan;