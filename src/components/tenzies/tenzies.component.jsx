import "./tenzies.styles.scss";
import { useState } from "react";
import numbersObj from "../../numbers";

const Tenzies = () => {
  const [numbersArray, setNumbersArray] = useState(numbersObj);
  console.log(numbersArray);

  function generateNewNumbers() {
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
      if (numbersArray[i].id == event.target.id) {
        addHoldNumberArr.push({
          ...numbersArray[i],
          hold: !numbersArray[i].hold,
        });
      } else {
        addHoldNumberArr.push(numbersArray[i]);
      }
    }
    setNumbersArray(addHoldNumberArr);
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
          <h2 className="tenzies__heading">Tenzies</h2>
          <p className="tenzies___description">
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
        </header>
        <div className="tenzies__content">
          <div className="tenzies__numbers-container">{numbers}</div>
          <button className="tenzies__button" onClick={generateNewNumbers}>
            Roll
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tenzies;
