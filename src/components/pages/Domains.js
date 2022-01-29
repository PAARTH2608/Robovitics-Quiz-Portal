import { useState } from "react";
import styled from "styled-components";
import { MainDiv, Tx5 } from "./Start";
import { RulesDiv, Img } from "./Rules";
import { Link } from "react-router-dom";
import navList from "../utils/navItems.json";
import { BiRefresh } from "react-icons/bi";
import Management from "../subdomains/Management";
import Logical from "../subdomains/Logical";
import Mechanical from "../subdomains/Mech";
import CSE from "../subdomains/CSE";
import Electrical from "../subdomains/Electrical";

const P = styled.p`
  color: ${(props) => (props.active ? "white" : "grey")};
  font-size: 1.5rem;
  height: 100%;
  cursor: pointer;
  border-bottom: ${(props) => props.active && "3px solid #5be4ff"};

  &:hover {
    color: white;
    border-bottom: 3px solid #5be4ff;
  }
`;
const DomainNames = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  padding-top: 10vh;
`;
const RefreshDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 2%;
  cursor: pointer;

  transform: rotate(0deg);
  overflow: hidden;
  transition: all 0.6s ease-out;
  ${({ rotate }) => rotate && `transform: rotate(360deg)`};
`;

const Domains = () => {
  const [rotate, setRotate] = useState(false);
  const handleClick = () => setRotate((prevState) => !prevState);

  const refreshPage = () => {
    window.location.reload(false);
  };

  const [clickOne, setClickOne] = useState(true);
  const [clickTwo, setClickTwo] = useState(false);
  const [clickThree, setClickThree] = useState(false);
  const [clickFour, setClickFour] = useState(false);
  const [clickFive, setClickFive] = useState(false);

  const handlerOne = () => {
    setClickOne(true);
    setClickTwo(false);
    setClickThree(false);
    setClickFour(false);
    setClickFive(false);
  };
  const handlerTwo = () => {
    setClickOne(false);
    setClickTwo(true);
    setClickThree(false);
    setClickFour(false);
    setClickFive(false);
  };
  const handlerThree = () => {
    setClickOne(false);
    setClickTwo(false);
    setClickThree(true);
    setClickFour(false);
    setClickFive(false);
  };
  const handlerFour = () => {
    setClickOne(false);
    setClickTwo(false);
    setClickThree(false);
    setClickFour(true);
    setClickFive(false);
  };
  const handlerFive = () => {
    setClickOne(false);
    setClickTwo(false);
    setClickThree(false);
    setClickFour(false);
    setClickFive(true);
  };

  return (
    <MainDiv col={"column"}>
      <DomainNames>
        <P active={clickOne} onClick={handlerOne}>
          Management
        </P>
        <P active={clickTwo} onClick={handlerTwo}>
          Logical
        </P>
        <P active={clickThree} onClick={handlerThree}>
          Mechanical
        </P>
        <P active={clickFour} onClick={handlerFour}>
          CSE
        </P>
        <P active={clickFive} onClick={handlerFive}>
          Electrical
        </P>
      </DomainNames>
      <RulesDiv>
        {clickOne && <Management />}
        {clickTwo && <Logical />}
        {clickThree && <Mechanical />}
        {clickFour && <CSE />}
        {clickFive && <Electrical />}
      </RulesDiv>
      <Tx5 pad1={"1%"} pad2={"2%"}>
        <Link to={"/submit"} style={{ textDecoration: "none", color: "black" }}>
          UPLOAD QUIZ
        </Link>
      </Tx5>
      <RefreshDiv rotate={rotate} onClick={handleClick}>
        <BiRefresh
          style={{ color: "white", fontSize: "3rem" }}
          onClick={refreshPage}
        />
      </RefreshDiv>
    </MainDiv>
  );
};

export default Domains;
