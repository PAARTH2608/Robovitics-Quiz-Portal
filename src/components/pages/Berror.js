import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MainDiv, ImgDiv, Img } from './Start';
import { LogoDiv } from './Rules';
import { Tx5 } from './Start';
import { CDiv } from './Finish';
import Robo from '../../assets/robo.svg';
import Logo from '../../assets/RoboVITics-Logo.svg';

const Image = styled.img`
	height: 10%;
	width: 25%;

	@media (max-width: 600px) {
		width: 45%;
	}
`;
const Tx2 = styled.h2`
	color: white;
	font-size: 1.8rem;
	padding-bottom: 5vh;
	font-family: 'Roboto', sans-serif;

	@media (max-width: 900px) {
		padding-bottom: 2vh;
		font-size: 3rem;
	}

	@media (max-width: 600px) {
		font-size: 1.5rem;
	}
`;
const TextDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	width: 40%;
	height: 80%;

	@media (max-width: 900px) {
		padding-bottom: 4rem;
		padding-top: 2rem;
		width: 85%;
		height: 65%;
	}
`;
const Error = () => {
	return (
		<MainDiv>
			<CDiv>
				<ImgDiv>
					<Img src={Robo} alt='robo' />
				</ImgDiv>
				<TextDiv>
					<Tx2>Please use a chrome based broser</Tx2>
					<Tx2>Try Again</Tx2>
					<Tx5 pad1={'2%'} pad2={'4%'} pad1S={'3%'} pad2S={'6%'}>
						<Link
							to={'/'}
							style={{ textDecoration: 'none', color: 'black' }}>
							Go Back
						</Link>
					</Tx5>
				</TextDiv>
			</CDiv>
			<LogoDiv src={Logo} alt='logo'>
				<Image src={Logo} alt='logo' />
			</LogoDiv>
		</MainDiv>
	);
};

export default Error;
