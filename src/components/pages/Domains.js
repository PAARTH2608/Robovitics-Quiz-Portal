import { useState } from "react";
import styled from "styled-components";
import { MainDiv, Tx5 } from "./Start";
import { RulesDiv, Img } from "./Rules";
import Logo from "../../assets/RoboVITics-Logo.svg";
import { Link } from "react-router-dom";
import navList from "../utils/navItems.json";
import { BiRefresh } from "react-icons/bi";
import CSE from "../subdomains/CSE";

const P = styled.p`
  color: grey;
  font-size: 1.5rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: white;
    border-bottom: 3px solid #5be4ff;
  }
  &:active {
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
// const QuestionDiv = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
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
  return (
    <MainDiv col={"column"}>
      <DomainNames>
        {navList.map((item, i) => (
          <P key={i}>
            {item.display_name}
          </P>
        ))}
      </DomainNames>
      <RulesDiv>
        <CSE />
        {/* <QuestionDiv>
          <Para>
            1. Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </Para>
        </QuestionDiv> */}
        {/* <Para>
          1. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </Para>
        <Para>
          1. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </Para>
        <Para>
          1. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </Para>
        <Para>
          1. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </Para>
        <Para>
          1. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </Para>
        <Para>
          1. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </Para>
        <Para>
          1. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </Para>
        <Para>
          1. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </Para>
        <Para>
          1. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </Para>
        <Para>
          1. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </Para> */}
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
