import styled from "styled-components";
import { QuestionDiv, Para } from "./CSE";
export const Div = styled.div`;
padding-bottom: 6vh;
`;
export const Div2 = styled.div`
display:flex;
justify-content:center;
align-items:center;
`;
export const Img = styled.img`
  height: 300px;
  width: 300px;
`;
const Management = (props) => {
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

export default Management;
