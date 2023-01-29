import React from "react";
import ConnectWallet from "./ConnectWallet";
import Ipfs from "./Ipfs";

const Dashboard = () => {
  return (
    <>
      <ConnectWallet />
      <Ipfs />
    </>
  );
};

export default Dashboard;
