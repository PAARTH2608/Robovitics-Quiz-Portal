import styled from "styled-components";
import { Div, Img, Div2 } from "./Management";

export const QuestionDiv = styled.div``;
export const Para = styled.p`
  font-size: 1.3rem;
  color: white;
  padding-bottom: 5vh;
  font-family: "Roboto", sans-serif;
`;

const CSE = props => {
  return (
    <QuestionDiv>
      {props.packet.map((item) => (
        <Div key={item._id}>
          <Para>{item.text}</Para>
          <Div2>
          <Img src={item.photoURL} alt="pic"/>
          </Div2>
        </Div>
      ))}
    </QuestionDiv>
  );
};

export default CSE;
