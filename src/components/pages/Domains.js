import { Route, Routes } from "react-router";
import styled from "styled-components";
import { MainDiv, Tx5 } from "./Start";
import { RulesDiv, Img, LogoDiv, Para } from "./Rules";
import Logo from "../../assets/RoboVITics-Logo.svg";
import Management from "../subdomains/Management";
import { Link } from "react-router-dom";
import navList from "../utils/navItems.json";
import { useState } from "react";

const P = styled.p`
  color: grey;
  font-size: 1.5rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: white;
    border-bottom: 3px solid #5be4ff;
  }
  &:active{
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
const QuestionDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Domains = () => {
    const [click, setClick] = useState(false);
    // const handleClick = () => setClick(!click);
    const handler = () => {
        setClick(!click)
    };
  return (
    <MainDiv col={"column"}>
      <DomainNames>
        {navList.map((item, i) => (
          <P key={i} onClick={handler} cl={click}>{item.display_name}</P>
        ))}
      </DomainNames>
      <RulesDiv>

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
        <Link to={'/submit'} style={{ textDecoration: 'none', color: 'black' }}>UPLOAD QUIZ</Link>
      </Tx5>
      <LogoDiv src={Logo} alt="logo">
        <Img src={Logo} alt="logo" />
      </LogoDiv>
    </MainDiv>
  );
};

export default Domains;
