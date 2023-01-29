import { useState } from "react";
import Mint from "./Mint";
import usePost from "../hooks/usePost";
import { ChooseFile, Content, MainContainer, MintButton } from "../Styles/Card";

const Ipfs = () => {
  const [selectedFile, setSelectedFile] = useState<any>();
  const { mutateAsync } = usePost();

  const changeHandler = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmission = async () => {
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const fileResponse = await mutateAsync({
        url: "pinning/pinFileToIPFS ",
        payload: formData,
        token: true,
      });

      try {
        const data = JSON.stringify({
          pinataMetadata: {
            name: "metadataR.json",
            keyvalues: {
              LawyerName: "Lawyer001",
              ClientID: "Client002",
              ChargeCode: "Charge003",
              Cost: 100.0,
            },
          },

          pinataContent: {
            name: "Yugant",
            description: "Friend",
            image: "ipfs://" + fileResponse.IpfsHash,
          },
        });

        const metadataResponse = await mutateAsync({
          url: "pinning/pinJSONToIPFS ",
          payload: JSON.parse(data),
          token: true,
        });

        const URI: string =
          "https://gateway.pinata.cloud/ipfs/" + metadataResponse.IpfsHash;
        // Mint nft
        const receipt = await Mint(URI);
        console.log("receipt", receipt);
      } catch (error) {
        console.log("error", error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <MainContainer>
        <Content>
          MINT
          <br />
          IT
          <br />
          BIG
        </Content>
        <ChooseFile>
          <input type="file" onChange={changeHandler}></input>
        </ChooseFile>
      </MainContainer>
      <MintButton onClick={handleSubmission}>MINT NFT</MintButton>
    </>
  );
};

export default Ipfs;
