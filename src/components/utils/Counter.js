import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../styles/Counter.css';
import { getRemainingTimeUntilMsTimestamp } from './CounterHelper.js';
import { completed } from '../../redux/actions/completed.action';

const defaultRemainingTime = {
	seconds: '11',
	minutes: '11',
	hours: '11',
	days: '11',
};

const Counter = ({ countdownTimestampMs, currentTime }) => {
	const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const id = useSelector((state) => state.auth.id);
	console.log(remainingTime);
	useEffect(() => {
		remainingTime.seconds === '00' &&
			remainingTime.minutes === '00' &&
			remainingTime.hours === '00' &&
			remainingTime.days === '00' &&
			dispatch(completed({ id })) &&
			navigate('/');
		const intervalId = setInterval(() => {
			updateRemainingTime(countdownTimestampMs, currentTime);
		}, 1000);
		return () => clearInterval(intervalId);
	}, [countdownTimestampMs, remainingTime, navigate, dispatch, id]);

	function updateRemainingTime(countdown, currentTime) {
		setRemainingTime(
			getRemainingTimeUntilMsTimestamp(countdown, currentTime)
		);
	}

	// console.log("from counter ",remainingTime)

	//   useEffect(() => {
	//   if(timeDiff <= 0){
	//     // navigate("/");
	//     console.log("time is up");
	//   }
	// }, [timeDiff, navigate])

	return (
		<div className='countdown-timer'>
			<div className='cover'>
				<h1 className='two-numbers'>{remainingTime.days}</h1>
				<div className='tags'>DAYS</div>
			</div>
			<div className='cov'>:</div>
			<div className='cover'>
				<h1 className='two-numbers'>{remainingTime.hours}</h1>
				<div className='tags'>HOURS</div>
			</div>
			<div className='cov'>:</div>
			<div className='cover'>
				<h1 className='two-numbers'>{remainingTime.minutes}</h1>
				<div className='tags'>MINS</div>
			</div>
			<div className='cov'>:</div>
			<div className='cover'>
				<h1 className='two-numbers'>{remainingTime.seconds}</h1>
				<div className='tags'>SEC</div>
			</div>
		</div>
	);
};

export default Counter;
