import { useRef } from "react";
import styled from "styled-components";
import { MainDiv, Tx5 } from "./Start";
import { Img, LogoDiv } from "./Rules";
import Logo from "../../assets/RoboVITics-Logo.svg";
import ImgLogo from '../../assets/Group.svg'

const Tx1 = styled.h1`
  color: white;
  font-size: 3rem;
`;
const Tx2 = styled.h2`
  color: #5be4ff;
  font-size: 2rem;
`;
const Tx3 = styled.input``;
const Tx4 = styled.h2`
  color: white;
`;
const HelperDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;
const Help = styled.div`
  padding-top: 5vh;
  text-align: center;
`;
const ImgDiv = styled.img`
cursor:pointer;
`;
const Help1 = styled.div``;
const Tx6 = styled.h2`
color: #5be4ff;
padding-top:4vh;
`;
const Submit = () => {
  const fileInputRef = useRef();

  const handleChange = (e) => {
    // do something with event data
  };

  return (
    <MainDiv col={"column"}>
      <Help>
        <Tx1>CORE COMMITTEE SELECTIONS</Tx1>
        <Tx2>RECRUITMENTS ROUNT 1</Tx2>
      </Help>
      <Tx3
        onChange={handleChange}
        multiple={false}
        ref={fileInputRef}
        type={"file"}
        hidden
      />
      <Help1>
      <ImgDiv src={ImgLogo} onClick={() => fileInputRef.current.click()}/>
      <Tx6>FILE UPLOAD</Tx6>
      </Help1>
      <Tx4>ARE YOU SURE YOU WANT TO SUBMIT QUIZ ?</Tx4>
      <HelperDiv>
        <Tx5 pad1={"1%"} pad2={"3%"}>
          GO BACK
        </Tx5>
        <Tx5 pad1={"1%"} pad2={"3%"}>
          SUBMIT QUIZ
        </Tx5>
      </HelperDiv>
      <LogoDiv src={Logo} alt="logo">
        <Img src={Logo} alt="logo" />
      </LogoDiv>
    </MainDiv>
  );
};

export default Submit;
