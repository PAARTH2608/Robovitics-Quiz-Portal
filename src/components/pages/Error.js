import styled from "styled-components";
import { Link } from "react-router-dom";
import { MainDiv, ImgDiv, Img } from "./Start";
import { LogoDiv } from "./Rules";
import { Tx5 } from "./Start";
import Robo from "../../assets/robo.svg";
import Logo from "../../assets/RoboVITics-Logo.svg";

const Image = styled.img`
  height: 10%;
  width: 25%;
`;
const Tx2 = styled.h2`
  color: white;
  font-family: montserrat;
  font-size: 1.8rem;
  padding-bottom: 5vh;
`;
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 80%;
`;
const Error = () => {
  return (
    <MainDiv>
      <ImgDiv>
        <Img src={Robo} alt="robo" />
      </ImgDiv>
      <TextDiv>
        <Tx2>Something Went Wrong!!</Tx2>
        <Tx2>Try Again</Tx2>
        <Tx5 pad1={"2%"} pad2={"4%"}>
          <Link
            to={"/"}
            style={{ textDecoration: "none", color: "black" }} 
          >
            Go Back
          </Link>
        </Tx5>
      </TextDiv>
      <LogoDiv src={Logo} alt="logo">
        <Image src={Logo} alt="logo"/>
      </LogoDiv>
    </MainDiv>
  );
};

export default Error;
