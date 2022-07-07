import React from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import "./App.css";
import StopWatch from "./StopWatch";

function App() {
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);
  const [counter, setCounter] = React.useState(0);
  const [stopWatch, setStopWatch] = React.useState({
    on: false,
    start: 0,
    time: 0,
  });

  // const [timer, setTimer] = React.useState(false);
  // let timer;
  // window.timer = false;

  React.useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    // window.timer = true;
    if (allHeld && allSameValue) {
      setTenzies(true);
      timerStop();
      // window.timer = false;
    }
    if (dice.filter((d) => d.isHeld).length === 1) {
      timerStart();
    }
  }, [dice]);

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function rollDice() {
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
      setCounter((prevCounter) => (prevCounter += 1));
    } else {
      setTenzies(false);
      setDice(allNewDice());
      setCounter(0);
      timerStart();
      // if (dice.filter((d) => d.isHeld).length === 1) {
      //   timer = true;
      // }
      // setTimer(true);
    }
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  function timerStart() {
    setStopWatch((prevWatch) => {
      return {
        on: true,
        time: Date.now(),
        start: Date.now() - prevWatch.time,
      };
    });
    window.timer = setInterval(() => {
      setStopWatch((prevWatch) => {
        return {
          ...prevWatch,
          time: Date.now() - prevWatch.start,
        };
      });
    }, 10);
  }

  function timerStop() {
    setStopWatch({
      on: false,
      start: 0,
      time: 0,
    });
    clearInterval(window.timer);
  }
  // }

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <h4 className="counter">Number of tries {counter}</h4>
      <StopWatch watchState={stopWatch} />
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        {tenzies ? "New Game" : "Roll"}
      </button>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
    </main>
  );
}

export default App;
