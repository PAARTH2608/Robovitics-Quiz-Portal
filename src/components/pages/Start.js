import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Socials from "../utils/Socials";
import StartPageCounter from "../utils/StartPageCounter";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/auth.action";
import Robo from "../../assets/robo.svg";
import Logo from "../../assets/RoboVITics-Logo.svg";
import Line from "../../assets/line.svg";
import Dot from "../../assets/dot.svg";
import { GoogleLogin } from "react-google-login";
import { CDiv } from "./Finish";

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

  @media (max-width: 900px) {
    padding-bottom: 4rem;
    padding-top: 2rem;
    width: 65%;
    height: 65%;
  }
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
  text-align: center;
  width: 40%;
  height: 80%;

  @media (max-width: 900px) {
    width: 80%;
  }
`;
const Tx1 = styled.img`
  width: 90%;
  height: 100%;

  @media (max-width: 550px) {
    width: 80%;
  }
`;
export const Tx2 = styled.h2`
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;

  @media (max-width: 550px) {
    font-size: 1rem;
  }
`;
const Tx3 = styled.h2`
  color: #5be4ff;
  font-size: 2rem;
  font-family: "Roboto", sans-serif;
  padding-bottom: 2vh;
  padding-top: 3vh;

  @media (max-width: 900px) {
    color: white;
    padding-bottom: 2vh;
  }

  @media (max-width: 550px) {
    font-size: 1.5rem;
  }
`;
export const Tx4 = styled.h1`
  color: #5be4ff;
  font-size: 4rem;
  font-family: "Roboto", sans-serif;
  padding-bottom: 5vh;

  @media (max-width: 900px) {
    padding-bottom: 2vh;
    font-size: 3rem;
  }

  @media (max-width: 550px) {
    font-size: 2rem;
  }
`;
export const Tx5 = styled.button`
  padding: ${(props) => props.pad1} ${(props) => props.pad2};
  font-size: 1.3rem;
  border-radius: 5px;
  border: none;
  font-family: "Roboto", sans-serif;
  background: rgb(98, 84, 255);
  background: linear-gradient(
    99deg,
    rgba(98, 84, 255, 1) 0%,
    rgba(62, 195, 213, 1) 100%
  );
  cursor: pointer;

  &:hover {
  }

  @media (max-width: 900px) {
    padding: ${(props) => props.pad1S} ${(props) => props.pad2S};
  }

  @media (max-width: 550px) {
    padding: ${(props) => props.pd1} ${(props) => props.pd2};
  }
`;
const Tx6 = styled.h2`
  color: white;
  font-family: "Roboto", sans-serif;
  padding-top: 2vh;
`;
export const ColDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 22vh;
  width: 100%;

  @media (max-width: 900px) {
    display: none;
  }
`;
export const SocialDiv = styled.div`
  position: absolute;
  left: 20px;
  bottom: 25%;

  @media (max-width: 550px) {
    display: ${(props) => props.disp};
  }
`;
export const LineDiv = styled.img`
  position: absolute;
  bottom: 7%;
  left: 30px;

  @media (max-width: 550px) {
    display: ${(props) => props.disp};
  }
`;
export const DotDiv = styled.img`
  position: absolute;
  bottom: 3%;
  left: 28px;

  @media (max-width: 550px) {
    display: ${(props) => props.disp};
  }
`;

export const BoxTwo = styled.div`
  bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const ColDivS = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;
const Start = () => {
  // const [error, setError] = useState(false);
  const [email, setEmail] = useState("");

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const random = useSelector((state) => state.upload.random);
  const slot = useSelector((state) => state.auth.slot.timing);
  const isActive = useSelector((state) => state.auth.slot.isActive);
  const complete = useSelector((state) => state.completed.complete);
  // console.log("yo",complete)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleHandler = () => {
    const userEmail = email;
    const isUserIdValid = userEmail.length > 0;

    if (!isUserIdValid) {
      return;
    }

    dispatch(login({ email: userEmail }));
  };

  const date = new Date(slot);
  const curr = new Date();
  const diff = date.getTime() - curr.getTime();
  // console.log("diff ",diff)

  const clientId =
    "779374762899-3cnshb5pms6ks39et3ns7dj2e2v5nflo.apps.googleusercontent.com";
  const onLoginSuccess = (res) => {
    setEmail(res.profileObj.email);
    const isUserIdValid = res.profileObj.email.length > 0;
    if (!isUserIdValid) {
      return;
    }
    dispatch(login({ email: res.profileObj.email }));
  };

  const onLoginFailure = (res) => {};

  const [timeLeft, setTimeLeft] = useState(diff);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(diff);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [diff, navigate]);

  const Styles = {
    padding: "4%",
    fontSize: "1.5rem",
    color: "transparent",
    border: "1px solid white",
  };
  console.log(isLoggedIn, isActive);

  return (
    <MainDiv>
      <CDiv>
        <ColDivS>
          <Tx1 src={Logo} alt="logo" />
          <Tx2>THE OFFICIAL ROBOTICS CLUB OF VIT</Tx2>
        </ColDivS>
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

          {/* if not logged in */}
          {!isLoggedIn && (
            <GoogleLogin
              clientId={clientId}
              buttonText="Sign In"
              onSuccess={onLoginSuccess}
              onFailure={onLoginFailure}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
              theme="dark"
              style={Styles}
            />
          )}

          {/* user logged in and is active but has not uploaded the file and thus has not completed the test and is within test hours */}
          {isLoggedIn && isActive && (!random || !complete) && parseInt(diff) <= 0 && (
            <Tx5 pad1={"2%"} pad2={"4%"} pd1={"5%"} pd2={"8%"}>
              <Link
                to={"/rules"}
                style={{ textDecoration: "none", color: "black" }}
                onSubmit={toggleHandler}
              >
                START QUIZ
              </Link>
            </Tx5>
          )}

          {/* user logged in and is active and has uploaded and completed the test */}
          {isLoggedIn && isActive && random && (
            <Tx6>You have successfully submitted!</Tx6>
          )}

          {isLoggedIn && isActive && complete && (
            <Tx6>Time's Up!!</Tx6>
          )}

          {/* user logged in & is active but has not uploaded the doc and has arrived before the test */}
          {isLoggedIn && isActive && !random && parseInt(diff) > 0 && (
            <BoxTwo>
              <Tx6>Your test starts in </Tx6>
              <StartPageCounter countdownTimestampMs={date.getTime()} />
            </BoxTwo>
          )}
        </TextDiv>
      </CDiv>
      <SocialDiv>
        <Socials />
      </SocialDiv>
      <LineDiv src={Line} alt="line" />
      <DotDiv src={Dot} alt="dot" />
    </MainDiv>
  );
};

export default Start;
