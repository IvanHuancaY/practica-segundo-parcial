import '../style/Tiempo.css'
import { useState } from "react";

function Tiempo() {
  const [timer, setTimer] = useState(0);

    const startTimer = () => {
    window.myTimer = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };
  const stopTimer = () => {
    clearInterval(window.myTimer);
  };
  const resetTimer = () => {
    clearInterval(window.myTimer);
    setTimer(0);
  };
  return (
    <div className="container">
      <h1>Tiempo</h1>
      <span>{Math.trunc(timer / 60)} min </span>
      <span>{timer % 60} sec</span>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default Tiempo;