import { ethers } from "ethers";
import abi from "../abi.json";

const Mint = async (URI: string) => {
  const provider = new ethers.providers.Web3Provider((window as any).ethereum);
  const signer = provider.getSigner();
  const signerAddress: string = await signer.getAddress();
  const contract = new ethers.Contract(
    "0x6890FCf389806B8C5Ed0636b6eCA078f9a7Be676",
    abi,
    signer
  );
  console.log("contract", contract);
  const transaction = await contract.safeMint(signerAddress, URI);
  return await transaction.wait();
};

export default Mint;
