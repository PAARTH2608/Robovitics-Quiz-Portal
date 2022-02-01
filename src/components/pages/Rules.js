import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import rules from "../utils/RulesHelper";
import { questionFetch } from "../../redux/actions/que.actions";
import Socials from "../utils/Socials";
import { MainDiv, Tx5, SocialDiv, LineDiv, DotDiv } from "./Start";
import Counter from "../utils/Counter";
import Logo from "../../assets/RoboVITics-Logo.svg";
import Line from "../../assets/line.svg";
import Dot from "../../assets/dot.svg";

const TextDiv = styled.h1`
  color: #5be4ff;
  font-size: 3rem;
  font-family: "Roboto", sans-serif;
`;
export const RulesDiv = styled.div`
  height: 60vh;
  width: 80%;
  border: 2px solid #5be4ff;
  border-radius: 10px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  padding: 20px;
`;
export const Para = styled.p`
  color: white;
  font-size: 1.3rem;
  padding-bottom: 20px;
  font-family: "Roboto", sans-serif;
`;
export const LogoDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 2%;
`;
export const Img = styled.img`
  height: 10%;
  width: 25%;
`;
export const BoxTwo = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
`;
const Rules = () => {
  const id = useSelector((state) => state.auth.id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(questionFetch({ id: id }));
  }, [id, dispatch]);


  const testEndAt = useSelector(state => state.auth.testEndAt);
  const date = new Date(testEndAt);
  
  return (
    <MainDiv col={"column"}>
      <TextDiv>RULES</TextDiv>
      <RulesDiv>
        {rules.map(rule => (
          <Para>{rule}</Para>
        ))}
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
      <Tx5 pad1={"2%"} pad2={"4%"}>
        <Link
          to={"/domains"}
          style={{ textDecoration: "none", color: "black" }}
        >
          START
        </Link>
      </Tx5>
      <LogoDiv src={Logo} alt="logo">
        <Img src={Logo} alt="logo" />
      </LogoDiv>
      <BoxTwo>
        <Counter countdownTimestampMs={date.getTime()} />
      </BoxTwo>
      <SocialDiv>
        <Socials />
      </SocialDiv>
      <LineDiv src={Line} alt="line" />
      <DotDiv src={Dot} alt="dot" />
    </MainDiv>
  );
};

export default Rules;
