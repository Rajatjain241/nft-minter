import styled from "styled-components";

export const MainContainer = styled.div`
  position: absolute;
  box-sizing: border-box;
  left: 36px;
  background-color: #afdcdc;
  border: 2px solid blueviolet;
  height: 88vh;
  width: 450px;
  border-radius: 28px;
  padding: 22px;
`;

export const ConnectButton = styled.button`
  background-color: green;
  color: black;
  border: 1px solid rgba(38, 119, 233, 0.28);
  border-radius: 16px;
  height: 38px;
  font-size: 21px;
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px 55px;
  cursor: pointer;
`;

export const Content = styled.div`
  color: black;
  text-align: left;
  font-size: 91px;
  font-family: system-ui;
  line-height: 1;
  font-weight: 900;
`;

export const MintButton = styled.button`
  background-color: #3881a6;
  position: absolute;
  left: 65px;
  bottom: 70px;
  border-radius: 22px;
  padding: 12px 165px;
  cursor: pointer;
`;

export const ChooseFile = styled.div`
  padding: 39px 0px;
  position: absolute;
  left: 48px;
  bottom: 163px;
  color: black;
`;
