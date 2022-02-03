import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MainDiv, Tx5 } from './Start';
import { RulesDiv } from './Rules';
import { Link, useNavigate } from 'react-router-dom';
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
const Helper = styled.div`
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	text-align: center;
	color: white;
	font-size: 1.3rem;
	font-family: 'Roboto', sans-serif;
`;
const QueDiv = styled.div`
	height: 60vh;
	width: 80%;
	border: 2px solid #5be4ff;
	border-radius: 10px;
	overflow: scroll;
	padding: 20px;

	::-webkit-scrollbar {
		width: 10px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: transparent;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: linear-gradient(
			99deg,
			rgba(98, 84, 255, 1) 0%,
			rgba(62, 195, 213, 1) 100%
		);
		border-radius: 10px;
		margin-right: 10px;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
	::-webkit-scrollbar-corner {
		background-color: transparent;
	}
	overflow-x: hidden;
`;
const Domains = () => {
	const [rot, setRot] = useState(false);
	const navigate = useNavigate();
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
	const CET = useSelector((state) => state.question.CET);
	const date = new Date(TEA);
	const curr = new Date(CET);
	// console.log(CET, 'current time', TEA, 'test end time ');
	// const [curr, setCurr] = useState(new Date(CET));
	// console.log(curr, 'lkl');
	// useEffect(() => {
	// 	setCurr(new Date(CET.CET));
	// }, [CET]);
	useEffect(() => {
		dispatch(questionFetch({ id: id }));
	}, []);
	useEffect(() => {
		document.addEventListener('contextmenu', function (e) {
			e.preventDefault();
		});
		document.onkeydown = function (e) {
			if (e.keyCode == 123) {
				return false;
			}
			if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
				return false;
			}
			if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
				return false;
			}
			if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
				return false;
			}
			if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
				return false;
			}
			if (e.ctrlKey && e.shiftKey) {
				return false;
			}
			if (e.ctrlKey) {
				return false;
			}
			if (e.shiftKey) {
				return false;
			}
		};
	});
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
			<QueDiv>
				{clickOne && <Management packet={questionFet.SET.MGM} />}
				{clickTwo && <Logical packet={questionFet.SET.LOG} />}
				{clickThree && <Mechanical packet={questionFet.SET.MEC} />}
				{clickFour && <CSE packet={questionFet.SET.CSE} />}
				{clickFive && <Electrical packet={questionFet.SET.ELE} />}
			</QueDiv>
			<Helper>
				Note: Upload all your answers together in a single file.
			</Helper>
			<Tx5
				pad1={'1%'}
				pad2={'2%'}
				pad1S={'3%'}
				pad2S={'6%'}
				onClick={() => navigate('/submit')}>
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
					cet={CET}
				/>
			</BoxTwo>
		</MainDiv>
	);
};

export default Domains;
