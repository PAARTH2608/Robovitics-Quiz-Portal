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

	useEffect(() => {
		const intervalId = setInterval(() => {
			updateRemainingTime(countdownTimestampMs, currstampMs);
			setDiff((prev) => prev - 1000);
		}, 1000);
		return () => clearInterval(intervalId);
	}, [countdownTimestampMs]);

	function updateRemainingTime(countdown, currstampMs) {
		setRemainingTime(
			getRemainingTimeUntilMsTimestamp(countdown, currstampMs)
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
