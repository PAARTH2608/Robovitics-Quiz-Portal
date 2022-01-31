import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Counter.css";
import { getRemainingTimeUntilMsTimestamp } from "./CounterHelper.js";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

const Counter = ({ countdownTimestampMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
  // const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimestampMs]);

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }
  // const timeStart = new Date().getTime();
  // const timeDiff = countdownTimestampMs - timeStart;
  // console.log("current time",timeStart)
  // console.log("from counter",timeDiff);


//   useEffect(() => {
//   if(timeDiff <= 0){
//     // navigate("/");
//     console.log("time is up");
//   }
// }, [timeDiff, navigate])

  return (
    <div className="countdown-timer">
      <div className="cover">
          <h1 className="two-numbers">{remainingTime.days}</h1>
          <div className="tags">DAYS</div>
      </div>
      <div className="cov">:</div>
      <div className="cover">
          <h1 className="two-numbers">{remainingTime.hours}</h1>
          <div className="tags">HOURS</div>
      </div>
      <div className="cov">:</div>
      <div className="cover">
          <h1 className="two-numbers">{remainingTime.minutes}</h1>
          <div className="tags">MINS</div>
      </div>
      <div className="cov">:</div>
      <div className="cover">
          <h1 className="two-numbers">{remainingTime.seconds}</h1>
          <div className="tags">SEC</div>
      </div>

    </div>
  );
};

export default Counter;
