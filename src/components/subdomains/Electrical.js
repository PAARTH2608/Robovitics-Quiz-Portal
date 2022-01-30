import { QuestionDiv, Para } from "./CSE";

const Electrical = (props) => {
  return (
    <QuestionDiv>
      {props.packet.map((item) => (
        <Para>{item.text}</Para>
      ))}
    </QuestionDiv>
  );
};

export default Electrical;
