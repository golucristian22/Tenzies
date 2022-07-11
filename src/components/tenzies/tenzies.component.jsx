import "./tenzies.styles.scss";
import { useState, useEffect } from "react";
import numbersObj from "../../numbers";
import Timer from "../timer/timer.component";

const Tenzies = () => {
  const [numbersArray, setNumbersArray] = useState(numbersObj);
  const [rolledTimes, setRolledTimes] = useState(0);

  const [time, setTime] = useState(0);
  const minutes = Math.floor((time / 60000) % 60);
  const seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
  const mSeconds = ("0" + Math.floor((time / 10) % 100)).slice(-2);
  const [isTimerOn, setIsTimerOn] = useState(false);

  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const onlyNumbers = numbersArray.map((obj) => obj.number);
    const onlyHold = numbersArray.map((obj) => obj.hold);
    const allEqual = onlyNumbers.every((num) => num === onlyNumbers[0]);
    const allHold = onlyHold.every((hold) => hold);
    if (allEqual && allHold) {
      setIsTimerOn(false);
      setIsGameOver(true);
    }
  }, [numbersArray]);

  function generateNewNumbers() {
    setIsTimerOn(true);
    setRolledTimes((prevRolledTimes) => prevRolledTimes + 1);
    setNumbersArray((prevNumbers) =>
      prevNumbers.map((number) => {
        if (number.hold) {
          return {
            ...number,
          };
        } else {
          return {
            ...number,
            number: Math.floor(Math.random() * 6 + 1),
          };
        }
      })
    );
  }

  function addHold(event) {
    const addHoldNumberArr = [];
    event.target.classList.toggle("tenzies__number--hold");
    for (let i = 0; i < numbersArray.length; i++) {
      if (numbersArray[i].id === Number(event.target.id)) {
        addHoldNumberArr.push({
          ...numbersArray[i],
          hold: !numbersArray[i].hold,
        });
      } else {
        addHoldNumberArr.push(numbersArray[i]);
      }
    }
    setIsTimerOn(true);
    setNumbersArray(addHoldNumberArr);
  }

  function resetGame() {
    setIsGameOver(false);
    setNumbersArray(numbersObj);
    generateNewNumbers();
    setRolledTimes(0);
    setIsTimerOn(false);
    setTime(0);
    const holdNumbers = document.querySelectorAll(".tenzies__number");
    holdNumbers.forEach((number) => {
      number.classList.remove("tenzies__number--hold");
    });
  }

  const numbers = numbersArray.map((number, id) => {
    return (
      <div key={id} id={id + 1} className="tenzies__number" onClick={addHold}>
        {number.number}
      </div>
    );
  });

  return (
    <div className="tenzies__container">
      <div className="tenzies">
        <header className="tenzies__header">
          <h2 className="tenzies__heading">
            {isGameOver ? "Congratulation!" : "Tenzies"}
          </h2>
          <p className="tenzies__description">
            {isGameOver
              ? `The game took you ${rolledTimes} Rolls and You finished it in:  
                ${
                  minutes > 0 ? `${minutes} minute` : ""
                } ${seconds} seconds and ${mSeconds} miliseconds.`
              : "Roll until all dice are the same. Click each dice to freeze it at itscurrent value between rolls."}
          </p>
        </header>
        <div className="tenzies__content">
          <div className="tenzies__numbers-container">{numbers}</div>
          {isGameOver ? (
            <button className="tenzies__button" onClick={resetGame}>
              Reset Game
            </button>
          ) : (
            <button className="tenzies__button" onClick={generateNewNumbers}>
              Roll
            </button>
          )}
        </div>
        {rolledTimes ? (
          <p>
            You Rolled the Dice {rolledTimes}
            {rolledTimes > 1 ? " Times" : " Time"}
          </p>
        ) : (
          <p>Roll the Dice</p>
        )}
        <Timer
          isTimerOn={isTimerOn}
          time={time}
          changeTime={setTime}
          minutes={minutes}
          seconds={seconds}
          mSeconds={mSeconds}
        />
      </div>
    </div>
  );
};

export default Tenzies;
