import React, { useContext } from "react";
import { ModelTimer } from "./Model";
import CounterContext from "../store/CounterContext";
import CounterComponent from "./counter";

export const TimerApp = ({ title, targetTime }) => {
  const Timer = React.useRef();
  const dialog = React.useRef();
  const { total } = useContext(CounterContext);
  // const [startTimer, setStartTimer] = React.useState(false);
  // const [stopTimer, setStopTimer] = React.useState(false);
  const [timeRemaining, setTimeRemaining] = React.useState(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  console.log(total.length);

  if (timeRemaining <= 0) {
    clearInterval(Timer.current);
  }

  const handleReset = () => {
    setTimeRemaining(targetTime * 1000);
    dialog.current.open();
  };

  const handleStart = () => {
    Timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  };

  const handleStop = () => {
    clearInterval(Timer.current);
  };

  return (
    <>
      <p>Counter App using Context</p>
      <h1>Total Counter : {total}</h1>
      <p>{title}</p>
      <CounterComponent />
      <ModelTimer
        ref={dialog}
        targetTime={targetTime}
        timeRemaining={timeRemaining}
        onReset={handleReset}
      />
      <p>
        target time {targetTime} second{timerIsActive > 1 ? "s" : ""}
      </p>
      <button onClick={timerIsActive ? handleStop : handleStart}>
        {timerIsActive ? "stop challenge" : "start challenge"}
      </button>
      {timerIsActive ? "loading ..." : "timer inactive"}
      <hr />
    </>
  );
};
