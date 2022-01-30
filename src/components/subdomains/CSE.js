import styled from "styled-components";

export const QuestionDiv = styled.div``;
export const Para = styled.p`
  font-size: 1.3rem;
  color: white;
  padding-bottom: 5vh;
`;

const CSE = props => {
  return (
    <QuestionDiv>
      {props.packet.map(item => (
        <Para>{item.text}</Para>
      ))}
    </QuestionDiv>
  );
};

export default CSE;
