import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import rules from "../utils/RulesHelper";
import { questionFetch } from "../../redux/actions/que.actions";
import Socials from "../utils/Socials";
import { MainDiv, Tx5, SocialDiv, LineDiv, DotDiv } from "./Start";
import Counter from "../utils/Counter";
import Logo from "../../assets/RoboVITics-Logo.svg";
import Line from "../../assets/line.svg";
import Dot from "../../assets/dot.svg";
import { BiRefresh } from "react-icons/bi";

const TextDiv = styled.h1`
  color: #5be4ff;
  font-size: 3rem;
  font-family: "Roboto", sans-serif;

  @media (max-width: 900px) {
    transform: translateY(55%);
  }

  @media (max-width: 550px) {
    font-size: 2rem;
    transform: translateY(100%);
  }
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

  @media (max-width: 550px) {
    display: ${(props) => props.disp};
  }
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
const RefreshDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 2%;
  cursor: pointer;
  z-index:599;
  display:none;

  transform: rotate(0deg);
  overflow: hidden;
  transition: all 0.6s ease-out;
  ${(props) => props.rot ? "transform: rotate(360deg)": "transform: rotate(0deg)"}
  transform: rotate(360deg);

  @media (max-width: 600px) {
    display:block;
  }
`;
const Rules = () => {
  const id = useSelector((state) => state.auth.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    dispatch(questionFetch({ id: id }));
  }, [id, dispatch]);

	// const TEA = useSelector((state) => state.question.TEA);
	// const CET = useSelector((state) => state.question.CET);
	// // const date = new Date(TEA);
	// const [curr, setCurr] = useState(new Date(CET));
	// console.log(curr, 'lkl');
  

  const [rot, setRot] = useState(false);
  const handleClick = () => setRot((prevState) => !prevState);
  const refreshPage = () => {
    window.location.reload(false);
  };
  return (
    <MainDiv col={"column"}>
      <TextDiv>RULES</TextDiv>
      <RulesDiv>
        {rules.map((rule, i) => (
          <Para key={i}>{rule}</Para>
        ))}
      </RulesDiv>
      <Tx5 pad1={"2%"} pad2={"4%"} pad1S={"3%"} pad2S={"8%"} onClick={() => navigate("/domains")}>
        <Link
          to={"/domains"}
          style={{ textDecoration: "none", color: "black" }}
        >
          START
        </Link>
      </Tx5>
      <LogoDiv src={Logo} alt="logo" disp={"none"}>
        <Img src={Logo} alt="logo" />
      </LogoDiv>
      {/* <BoxTwo>
      <Counter
					countdownTimestampMs={date.getTime()}
					currentTime={curr.getTime()}
					setCurr={setCurr}
				/>
      </BoxTwo> */}
      <SocialDiv disp={"none"}>
        <Socials />
      </SocialDiv>
      <RefreshDiv rot={rot} onClick={handleClick}>
        <BiRefresh
          style={{ color: "white", fontSize: "3rem" }}
          onClick={refreshPage}
        />
      </RefreshDiv>
      <LineDiv src={Line} alt="line" disp={"none"}/>
      <DotDiv src={Dot} alt="dot" disp={"none"}/>
    </MainDiv>
  );
};

export default Rules;
