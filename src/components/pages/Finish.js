import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { MainDiv, Img, SocialDiv, LineDiv, DotDiv, Tx5 } from './Start';
import { LogoDiv } from './Rules';
import Socials from '../utils/Socials';
import Robo from '../../assets/robo.svg';
import Logo from '../../assets/RoboVITics-Logo.svg';
import Line from '../../assets/line.svg';
import Dot from '../../assets/dot.svg';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions/auth.action';
import { firebase } from '../../firebase/firebase';

const Image = styled.img`
	height: 10%;
	width: 25%;

	@media (max-width: 600px) {
		width: 45%;
	}
`;
const Tx2 = styled.h2`
	color: white;
	font-family: montserrat;
	font-size: 1.8rem;
	padding-bottom: 5vh;
	font-family: 'Roboto', sans-serif;

	@media (max-width: 900px) {
		padding-bottom: 2vh;
	}

	@media (max-width: 600px) {
		// font-size: 1.5rem;
	}
`;

const Tx4 = styled.h1`
	color: #5be4ff;
	font-size: 2.5rem;
	padding-bottom: 5vh;
	font-family: 'Roboto', sans-serif;

	@media (max-width: 900px) {
		padding-bottom: 2vh;
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
		width: 80%;
	}
`;
export const CDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 900px) {
		flex-direction: column;
		justify-content: space-around;
	}
`;
const ImgDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50%;
	height: 90%;

	@media (max-width: 900px) {
		padding-bottom: 5rem;
		width: 80%;
	}
`;

const Finish = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const email = useSelector((state) => state.auth.email);
	useEffect(() => {
		// console.log('calling dispatch');
		dispatch(login({ email: email }));
		firebase.auth().signOut();
	}, []);

	return (
		<MainDiv>
			<CDiv>
				<ImgDiv>
					<Img src={Robo} alt='robo' />
				</ImgDiv>
				<TextDiv>
					<Tx2>Thank you for the response!!</Tx2>
					<Tx4>RESULTS WILL BE OUT SOON</Tx4>
					<Tx5
						pad1={'2%'}
						pad2={'4%'}
						pad1S={'3%'}
						pad2S={'7%'}
						onClick={() => navigate('/')}>
						<Link
							to={'/'}
							style={{ textDecoration: 'none', color: 'black' }}>
							Home
						</Link>
					</Tx5>
				</TextDiv>
			</CDiv>
			<SocialDiv>
				<Socials />
			</SocialDiv>
			<LogoDiv src={Logo} alt='logo'>
				<Image src={Logo} alt='logo' />
			</LogoDiv>
			<LineDiv src={Line} alt='line' />
			<DotDiv src={Dot} alt='dot' />
		</MainDiv>
	);
};

export default Finish;
