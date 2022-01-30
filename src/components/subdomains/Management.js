import styled from "styled-components";
import { QuestionDiv } from "./CSE";
export const Div = styled.div`
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
      {/* {props.packet.map((item) => (
        <div>
          <Para>{item.text}</Para>
          <Img src={item.photoURL} alt="pic"/>
        </div>
      ))} */}
    </QuestionDiv>
  );
};

export default Management;
