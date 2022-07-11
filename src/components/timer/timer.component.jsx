import "./timer.styles.scss";
import { useEffect } from "react";

const Timer = (props) => {
  const { isTimerOn, changeTime, minutes, seconds, mSeconds } = props;

  useEffect(() => {
    let interval = null;

    if (isTimerOn) {
      interval = setInterval(() => {
        changeTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isTimerOn, changeTime]);

  return (
    <div className="tenzies__timer">
      <span>{minutes}:</span>
      <span>{seconds}:</span>
      <span>{mSeconds}</span>
    </div>
  );
};

export default Timer;
