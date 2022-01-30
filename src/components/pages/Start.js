import { Link } from "react-router-dom";
import styled from "styled-components";
import Socials from "../utils/Socials";
import Robo from "../../assets/robo.svg";
import Logo from "../../assets/RoboVITics-Logo.svg";
import Line from "../../assets/line.svg";
import Dot from "../../assets/dot.svg";

export const MainDiv = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.col};
  align-items: center;
  justify-content: space-around;
  background: rgb(17, 15, 46);
  background: linear-gradient(
    180deg,
    rgba(17, 15, 46, 0.9923319669664741) 45%,
    rgba(34, 75, 162, 1) 100%
  );
  margin: auto;
  position: relative;
`;
export const ImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 90%;
`;
export const Img = styled.img`
  height: 100%;
  width: 90%;
`;
export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 40%;
  height: 80%;
`;
const Tx1 = styled.img`
  width: 90%;
  height: 100%;
`;
export const Tx2 = styled.h2`
  color: white;
  font-family: montserrat;
  font-size: 1.5rem;
`;
const Tx3 = styled.h2`
  color: #5be4ff;
  font-size: 2rem;
`;
export const Tx4 = styled.h1`
  color: #5be4ff;
  font-size: 4rem;
`;
export const Tx5 = styled.button`
  padding: ${(props) => props.pad1} ${(props) => props.pad2};
  font-size: 1.3rem;
  border-radius: 5px;
  border: none;
  background: rgb(98, 84, 255);
  background: linear-gradient(
    99deg,
    rgba(98, 84, 255, 1) 0%,
    rgba(62, 195, 213, 1) 100%
  );
  cursor: pointer;

  &:hover {
  }
`;
export const ColDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 22vh;
  width: 100%;
`;
export const SocialDiv = styled.div`
  position: absolute;
  left: 20px;
  bottom: 25%;
`;
export const LineDiv = styled.img`
  position: absolute;
  bottom: 7%;
  left: 30px;
`;
export const DotDiv = styled.img`
  position: absolute;
  bottom: 3%;
  left: 28px;
`;

const Start = () => {
  return (
    <MainDiv>
      <ImgDiv>
        <Img src={Robo} alt="robo" />
      </ImgDiv>
      <TextDiv>
        <ColDiv>
          <Tx1 src={Logo} alt="logo" />
          <Tx2>THE OFFICIAL ROBOTICS CLUB OF VIT</Tx2>
        </ColDiv>
        <Tx3>CORE COMMITTEE SELECTIONS 2022</Tx3>
        <Tx4>ROUND 1</Tx4>
        <Tx5 pad1={"2%"} pad2={"4%"}>
          <Link
            to={"/rules"}
            style={{ textDecoration: "none", color: "black" }}
          >
            START QUIZ
          </Link>
        </Tx5>
      </TextDiv>
      <SocialDiv>
        <Socials />
      </SocialDiv>
      <LineDiv src={Line} alt="line" />
      <DotDiv src={Dot} alt="dot" />
    </MainDiv>
  );
};

export default Start;
