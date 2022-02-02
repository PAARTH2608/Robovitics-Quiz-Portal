import { QuestionDiv, Para } from "./CSE";
import { Div, Img, Div2 } from "./Management";
const Mechanical = (props) => {
  return (
    <QuestionDiv>
      {props.packet.map((item) => (
        <Div key={item._id}>
          <Para>{item.text}</Para>
          <Div2>
          {item.photoURL ? <Img src={item?.photoURL} alt="pic"/> : <></>}
          </Div2>
        </Div>
      ))}
    </QuestionDiv>
  );
};

export default Mechanical;
