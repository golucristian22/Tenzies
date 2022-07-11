import "./timer.styles.scss";
import { useEffect } from "react";

const Timer = (props) => {
  const { isTimerOn, time, changeTime } = props;

  const minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
  const seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
  const mSeconds = ("0" + Math.floor((time / 10) % 100)).slice(-2);

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
    <div>
      <span>{minutes}:</span>
      <span>{seconds}:</span>
      <span>{mSeconds}</span>
    </div>
  );
};

export default Timer;
