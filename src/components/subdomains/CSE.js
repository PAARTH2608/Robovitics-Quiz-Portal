import styled from 'styled-components';
import { Div, Img, Div2 } from './Management';

export const QuestionDiv = styled.div``;
export const Para = styled.p`
	font-size: 1.3rem;
	color: white;
	padding-bottom: 5vh;
	font-family: 'Roboto', sans-serif;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	display:flex;
`;
export const Helper = styled.div`
width:95%;
`;
export const Index = styled.div`
width:1.5%;

@media (max-width: 600px) {
	width:5%;
}
`;
const CSE = (props) => {
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

export default CSE;
