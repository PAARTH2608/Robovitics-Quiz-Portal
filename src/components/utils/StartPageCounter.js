import { useState, useEffect } from 'react';
import '../styles/StartCounter.css';
import { getRemainingTimeUntilMsTimestamp } from './StartPageCounterHelper.js';

const defaultRemainingTime = {
	seconds: '00',
	minutes: '00',
	hours: '00',
	days: '00',
};

const Counter = ({ countdownTimestampMs, currstampMs, setDiff }) => {
	const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
	const [currentTimeUpdate, setCurrentTimeUpdate] = useState();
	useEffect(() => {
		setCurrentTimeUpdate(currstampMs);
	}, [currstampMs]);
	useEffect(() => {
		const intervalId = setInterval(() => {
			updateRemainingTime(countdownTimestampMs, currentTimeUpdate);
			setDiff((prev) => prev - 1000);
			setCurrentTimeUpdate((prev) => prev + 1000);
			// console.log(currentTimeUpdate, 'lk');
		}, 1000);
		return () => clearInterval(intervalId);
	}, [countdownTimestampMs, currentTimeUpdate]);

	function updateRemainingTime(countdown, currentTimeUpdate) {
		setRemainingTime(
			getRemainingTimeUntilMsTimestamp(countdown, currentTimeUpdate)
		);
	}

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
