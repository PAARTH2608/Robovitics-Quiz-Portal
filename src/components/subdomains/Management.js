import styled from "styled-components";
import { QuestionDiv, Para } from "./CSE";
import { Index, Helper } from "./CSE";

export const Div = styled.div`
  padding-bottom: 6vh;
`;
export const Div2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Img = styled.img`
  height: 350px;
  width: 700px;

  @media (max-width: 600px) {
    height: 200px;
    width: 300px;
  }
`;
const Management = (props) => {
  return (
    <QuestionDiv>
      {props.packet.map((item, index) => (
				<Div key={item._id}>
					<Para><Index>{index+1}</Index>.<Helper>{item.text}</Helper></Para>
					<Div2>
						{item.photoURL ? (
							<Img src={item?.photoURL} alt='pic' />
						) : (
							<></>
						)}
					</Div2>
				</Div>
			))}
    </QuestionDiv>
  );
};

export default Management;
