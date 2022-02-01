import styled from "styled-components";
import { Link } from "react-router-dom";
import { MainDiv, ImgDiv, Img, SocialDiv, LineDiv, DotDiv, Tx5 } from "./Start";
import { LogoDiv } from "./Rules";
import Socials from "../utils/Socials";
import Robo from "../../assets/robo.svg";
import Logo from "../../assets/RoboVITics-Logo.svg";
import Line from "../../assets/line.svg";
import Dot from "../../assets/dot.svg";

const Image = styled.img`
  height: 10%;
  width: 25%;
`;
const Tx2 = styled.h2`
  color: white;
  font-family: montserrat;
  font-size: 1.8rem;
  padding-bottom: 5vh;
  font-family: "Roboto", sans-serif;
`;

const Tx4 = styled.h1`
  color: #5be4ff;
  font-size: 2.5rem;
  padding-bottom: 5vh;
  font-family: "Roboto", sans-serif;
`;
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 80%;
`;
const Finish = () => {
  return (
    <MainDiv>
      <ImgDiv>
        <Img src={Robo} alt="robo" />
      </ImgDiv>
      <TextDiv>
        <Tx2>TIME UP!!!</Tx2>
        <Tx2>YOU HAVE SUCCESSFULLY SUBMITTED</Tx2>
        <Tx4>RESULTS WILL BE OUT SOON</Tx4>
        <Tx5 pad1={"2%"} pad2={"4%"}>
          <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
            Home
          </Link>
        </Tx5>
      </TextDiv>
      <SocialDiv>
        <Socials />
      </SocialDiv>
      <LogoDiv src={Logo} alt="logo">
        <Image src={Logo} alt="logo" />
      </LogoDiv>
      <LineDiv src={Line} alt="line" />
      <DotDiv src={Dot} alt="dot" />
    </MainDiv>
  );
};

export default Finish;
