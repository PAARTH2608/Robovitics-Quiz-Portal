import { useRef, useState } from 'react';
import styled from 'styled-components';
import { MainDiv, Tx5 } from './Start';
import Logo from '../../assets/RoboVITics-Logo.svg';
import ImgLogo from '../../assets/Group.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { uploadDoc } from '../../redux/actions/upload.action';
import { TailSpin } from 'react-loader-spinner';

const Tx1 = styled.h1`
	color: white;
	font-size: 3rem;
	font-family: 'Roboto', sans-serif;

	@media (max-width: 900px) {
		font-size: 2.5rem;
		padding-bottom: 2rem;
	}

	@media (max-width: 600px) {
		font-size: 2rem;
	}
`;
const Tx2 = styled.h2`
	color: #5be4ff;
	font-size: 2rem;
	font-family: 'Roboto', sans-serif;

	@media (max-width: 600px) {
		font-size: 1.5rem;
	}
`;
const Tx3 = styled.input``;
const Tx4 = styled.h2`
	color: white;
	font-family: 'Roboto', sans-serif;

	@media (max-width: 900px) {
		font-size: 2rem;
	}

	@media (max-width: 600px) {
		font-size: 1.3rem;
		text-align: center;
	}
`;
const HelperDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
`;
const Help = styled.div`
	padding-top: 5vh;
	text-align: center;
`;
const ImgDiv = styled.img`
	cursor: pointer;
	width: 95%;
	height: 95%;

	@media (max-width: 600px) {
		width: 70%;
	}
`;
const Img = styled.img`
	height: 10%;
	width: 45%;
`;
const Help1 = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
const Tx6 = styled.h2`
	color: #5be4ff;
	padding-top: 4vh;
	font-family: 'Roboto', sans-serif;

	@media (max-width: 900px) {
		font-size: 1.7rem;
	}

	@media (max-width: 600px) {
		font-size: 1.5rem;
	}
`;
const Tx7 = styled.h2`
	color: red;
	font-size: 1rem;
	font-family: 'Roboto', sans-serif;
`;
const LogoDiv = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	padding: 2%;
`;
const Help2 = styled.div`
	positiom: absolute;
	top: 50%;
	left: 50%;
`;
const Submit = () => {
	const fileInputRef = useRef();
	const [File, setFile] = useState(null);
	const id = useSelector((state) => state.auth.id);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [isLarge, setIsLarge] = useState(false);
	const [modal, setModal] = useState(false);
	const [string, setString] = useState(false);
	const [loading, setLoading] = useState(false);

	const random = useSelector((state) => state.upload.random);
	// console.log('random', random);
	const regno = useSelector((state) => state.auth.registrationNumber);
	const name = useSelector((state) => state.auth.name);
	let compareString = [regno, name.split(' ')[0].toLowerCase()]
		.join('_')
		.replace('.', '');
	// console.log(compareString);

	const fileUploadHandler = (e) => {
		e.preventDefault();
		// const formData = new FormData();
		if (e.target.files[0]) {
			// formData.append("file", e.target.files[0]);
			const file = e.target.files[0];
			// console.log(file);
			if (file.type === 'application/pdf') {
				// console.log(compareString, 'lkl', file.name.split('.')[0]);
				if (compareString === file.name.split('.')[0]) {
					setString(false);
					setModal(false);
					setFile(file);
					if (file.size > 5000000) {
						setIsLarge(true);
						return;
					} else {
						setIsLarge(false);
					}
				} else {
					setString(true);
				}
			} else {
				setModal(true);
			}
		}
	};
	const submitHandler = () => {
		setLoading(true);
		if (File.type === 'application/pdf') {
			setModal(false);
			if (File.size > 5000000) {
				setIsLarge(true);
				return;
			} else {
				setIsLarge(false);
			}
			dispatch(uploadDoc({ File, id }));
			if (random) setLoading(false);
			navigate('/finish');
		} else {
			setModal(true);
		}
		// dispatch(completed({id}));
	};
	const style = {
		position: 'absolute',
	};

	return (
		<MainDiv col={'column'}>
			<Help>
				<Tx1>CORE COMMITTEE SELECTIONS</Tx1>
				<Tx2>RECRUITMENTS ROUND 1</Tx2>
			</Help>
			<Tx3
				onChange={fileUploadHandler}
				multiple={false}
				ref={fileInputRef}
				type={'file'}
				hidden
			/>
			<Help1>
				<ImgDiv
					src={ImgLogo}
					onClick={() => fileInputRef.current.click()}
				/>
				<Help2>
					{loading && (
						<TailSpin color='#00BFFF' height={80} width={80} />
					)}
				</Help2>
				<Tx6>FILE UPLOAD</Tx6>
				{isLarge && <Tx7>*File size should be &lt; 5mb</Tx7>}
				{modal && <Tx7>*Only PDF files are allowed</Tx7>}
				{string && <Tx7>*Please rename to : {compareString}</Tx7>}
			</Help1>
			<Tx4>ARE YOU SURE YOU WANT TO SUBMIT QUIZ ?</Tx4>
			<HelperDiv>
				<Tx5
					pad1={'1%'}
					pad2={'3%'}
					pad1S={'3%'}
					pad2S={'7%'}
					onClick={() => navigate('/domains')}>
					<Link
						to={'/domains'}
						style={{ textDecoration: 'none', color: 'black' }}>
						GO BACK
					</Link>
				</Tx5>
				{File && !isLarge && (
					<Tx5
						pad1={'1%'}
						pad2={'3%'}
						pad1S={'3%'}
						pad2S={'7%'}
						onClick={submitHandler}>
						<Link
							to={'/submit'}
							style={{ textDecoration: 'none', color: 'black' }}>
							SUBMIT QUIZ
						</Link>
					</Tx5>
				)}
			</HelperDiv>
			<LogoDiv src={Logo} alt='logo'>
				<Img src={Logo} alt='logo' />
			</LogoDiv>
		</MainDiv>
	);
};

export default Submit;
