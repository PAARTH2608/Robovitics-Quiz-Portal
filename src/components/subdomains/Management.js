import styled from "styled-components";
import { QuestionDiv, Para } from "./CSE";

const Image = styled.img``;
const Management = (props) => {
  return (
    <QuestionDiv>
      {props.packet.map((item) => (
        <Para>{item.text}</Para>
        
      ))}
    </QuestionDiv>
  );
};

export default Management;
