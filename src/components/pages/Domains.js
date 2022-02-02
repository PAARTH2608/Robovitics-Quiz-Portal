import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MainDiv, Tx5 } from './Start';
import { RulesDiv } from './Rules';
import { Link } from 'react-router-dom';
import { BoxTwo } from './Rules';
import Counter from '../utils/Counter';
import { BiRefresh } from 'react-icons/bi';
import Management from '../subdomains/Management';
import Logical from '../subdomains/Logical';
import Mechanical from '../subdomains/Mech';
import CSE from '../subdomains/CSE';
import Electrical from '../subdomains/Electrical';
import { useSelector, useDispatch } from 'react-redux';
import { questionFetch } from '../../redux/actions/que.actions';

const P = styled.p`
	color: ${(props) => (props.active ? 'white' : 'grey')};
	font-size: 1.5rem;
	height: 100%;
	cursor: pointer;
	border-bottom: ${(props) => props.active && '3px solid #5be4ff'};
	font-family: 'Roboto', sans-serif;

	&:hover {
		color: white;
		border-bottom: 3px solid #5be4ff;
	}

	@media (max-width: 600px) {
		font-size: 1.2rem;
		padding: 0.6rem;
	}
`;
const DomainNames = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 80%;
	padding-top: 10vh;

	@media (max-width: 768px) {
		overflow: scroll;
		::-webkit-scrollbar {
			display: none;
		}
	}
`;
const RefreshDiv = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	padding: 2%;
	cursor: pointer;
	z-index: 599;

	transform: rotate(0deg);
	overflow: hidden;
	transition: all 0.6s ease-out;
	${(props) =>
		props.rot ? 'transform: rotate(360deg)' : 'transform: rotate(0deg)'}
`;

const Domains = () => {
	const [rot, setRot] = useState(false);
	const handleClick = () => setRot((prevState) => !prevState);

	const id = useSelector((state) => state.auth.id);
	const dispatch = useDispatch();
	const refreshPage = () => {
		dispatch(questionFetch({ id: id }));
		// window.location.reload(false);
	};

	const [clickOne, setClickOne] = useState(true);
	const [clickTwo, setClickTwo] = useState(false);
	const [clickThree, setClickThree] = useState(false);
	const [clickFour, setClickFour] = useState(false);
	const [clickFive, setClickFive] = useState(false);

	const handlerOne = () => {
		setClickOne(true);
		setClickTwo(false);
		setClickThree(false);
		setClickFour(false);
		setClickFive(false);
	};
	const handlerTwo = () => {
		setClickOne(false);
		setClickTwo(true);
		setClickThree(false);
		setClickFour(false);
		setClickFive(false);
	};
	const handlerThree = () => {
		setClickOne(false);
		setClickTwo(false);
		setClickThree(true);
		setClickFour(false);
		setClickFive(false);
	};
	const handlerFour = () => {
		setClickOne(false);
		setClickTwo(false);
		setClickThree(false);
		setClickFour(true);
		setClickFive(false);
	};
	const handlerFive = () => {
		setClickOne(false);
		setClickTwo(false);
		setClickThree(false);
		setClickFour(false);
		setClickFive(true);
	};

	const questionFet = useSelector((state) => state.question);

	const TEA = useSelector((state) => state.question.TEA);
	const CET = useSelector((state) => state.question);
	const date = new Date(TEA);
	const curr = new Date(CET.CET);
	console.log(CET.CET);

	return (
		<MainDiv col={'column'}>
			<DomainNames>
				<P active={clickOne} onClick={handlerOne}>
					Management
				</P>
				<P active={clickTwo} onClick={handlerTwo}>
					Logical
				</P>
				<P active={clickThree} onClick={handlerThree}>
					Mechanical
				</P>
				<P active={clickFour} onClick={handlerFour}>
					CSE
				</P>
				<P active={clickFive} onClick={handlerFive}>
					Electrical
				</P>
			</DomainNames>
			<RulesDiv>
				{clickOne && <Management packet={questionFet.SET.MGM} />}
				{clickTwo && <Logical packet={questionFet.SET.LOG} />}
				{clickThree && <Mechanical packet={questionFet.SET.MEC} />}
				{clickFour && <CSE packet={questionFet.SET.CSE} />}
				{clickFive && <Electrical packet={questionFet.SET.ELE} />}
			</RulesDiv>
			<Tx5 pad1={'1%'} pad2={'2%'} pad1S={'3%'} pad2S={'6%'}>
				<Link
					to={'/submit'}
					style={{ textDecoration: 'none', color: 'black' }}>
					UPLOAD QUIZ
				</Link>
			</Tx5>
			<RefreshDiv rot={rot} onClick={handleClick}>
				<BiRefresh
					style={{ color: 'white', fontSize: '3rem' }}
					onClick={refreshPage}
				/>
			</RefreshDiv>
			<BoxTwo>
				<Counter
					countdownTimestampMs={date.getTime()}
					currentTime={curr.getTime()}
				/>
			</BoxTwo>
		</MainDiv>
	);
};

export default Domains;
