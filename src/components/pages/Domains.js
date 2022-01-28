import { Route, Routes } from "react-router";
import styled from "styled-components";
import { MainDiv, Tx5 } from "./Start";
import { RulesDiv, Img, LogoDiv, Para } from "./Rules";
import Logo from "../../assets/RoboVITics-Logo.svg";
import Management from "../subdomains/Management";
import { Link } from "react-router-dom";

const P = styled.p`
  color: grey;
  font-size: 1.5rem;
  height: 100%;
  cursor:pointer;

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
const QuestionDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputDiv = styled.input`
  padding: 2%;
`;
const Domains = () => {
  return (
    <MainDiv col={"column"}>
      <DomainNames>
        <Link to={"/domain/management"} style={{ textDecoration: 'none' }}><P>Management</P></Link>
        <Link to={"/domain/logical"} style={{ textDecoration: 'none' }}><P>Logical</P></Link>
        <Link to={"/domain/mechanical"} style={{ textDecoration: 'none' }}><P>Mechanical</P></Link>
        <Link to={"/domain/cse"} style={{ textDecoration: 'none' }}><P>CSE</P></Link>
        <Link to={"/domain/electrical"} style={{ textDecoration: 'none' }}><P>Electrical</P></Link>
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
        SUBMIT QUIZ
      </Tx5>
      <LogoDiv src={Logo} alt="logo">
        <Img src={Logo} alt="logo" />
      </LogoDiv>
    </MainDiv>
  );
};

export default Domains;
