import "./timer.styles.scss";
import { useState, useEffect } from "react";

const Timer = (props) => {
  const { isTimerOn } = props;
  const [time, setTime] = useState(0);
  const [finalTime, setFinalTime] = useState(0);
  console.log(finalTime);

  const minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
  const seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
  const mSeconds = ("0" + Math.floor((time / 10) % 100)).slice(-2);

  useEffect(() => {
    let interval = null;

    if (isTimerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      setFinalTime(time);
      setTime(0);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isTimerOn]);

  return (
    <div>
      {isTimerOn ? (
        <div>
          <span>{minutes}:</span>
          <span>{seconds}:</span>
          <span>{mSeconds}</span>
        </div>
      ) : (
        "Timer"
      )}
    </div>
  );
};

export default Timer;
