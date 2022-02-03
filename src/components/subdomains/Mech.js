import { QuestionDiv, Para } from "./CSE";
import { Div, Img, Div2 } from "./Management";
import { Index, Helper } from "./CSE";

const Mechanical = (props) => {
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

export default Mechanical;
