import { QuestionDiv, Para } from "./CSE";

const Mechanical = (props) => {
  return (
    <QuestionDiv>
      {props.packet.map((item) => (
        <Para>{item.text}</Para>
      ))}
    </QuestionDiv>
  );
};

export default Mechanical;
