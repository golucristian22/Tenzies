import "./tenzies.styles.scss";

const Tenzies = () => {
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
          <div className="tenzies__numbers-container">
            <div className="tenzies__number tenzies__number--correct">2</div>
            <div className="tenzies__number">1</div>
            <div className="tenzies__number">2</div>
            <div className="tenzies__number">3</div>
            <div className="tenzies__number">4</div>
            <div className="tenzies__number">5</div>
            <div className="tenzies__number">6</div>
            <div className="tenzies__number">7</div>
            <div className="tenzies__number">8</div>
            <div className="tenzies__number">9</div>
          </div>
          <button className="tenzies__button">Roll</button>
        </div>
      </div>
    </div>
  );
};

export default Tenzies;
