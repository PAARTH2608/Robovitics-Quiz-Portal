import { QuestionDiv, Para } from "./CSE";

const Logical = (props) => {
  return (
    <QuestionDiv>
      {props.packet.map((item) => (
        <Para>{item.text}</Para>
      ))}
    </QuestionDiv>
  );
};

export default Logical;
