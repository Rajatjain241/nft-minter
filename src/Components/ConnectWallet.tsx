import React from "react";
import { ConnectButton } from "../Styles/Card";

const ConnectWallet = () => {
  const connectWallet = async () => {
    if ((window as any).ethereum) {
      try {
        const address = await (window as any).ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log("address", address);
      } catch (error) {
        console.log("error", error);
      }
    } else {
      console.log("error");
    }
  };

  return (
    <>
      <ConnectButton onClick={connectWallet}>Connect Wallet</ConnectButton>
    </>
  );
};

export default ConnectWallet;
