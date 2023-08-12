import { useState } from "react";
import "./App.css";
import Event from "./Event";
import Timer from "./Timer";
import Controls from "./Controls";
function App() {
  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);
  const [isPause, setIsPause] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(sessionTime);
  return (
    <div className="App">
      <div className="container">
        <h1>25 + 5 Clock</h1>
        <div className="events-container">
          <Event id={"break"} time={breakTime} setTime={setBreakTime} />
          <Event id={"session"} time={sessionTime} setTime={setSessionTime} />
        </div>

        <Timer value={sessionTime} breakTime={breakTime} isPause={isPause} seconds={seconds} minutes={minutes} setMinutes={setMinutes}
          setSeconds={setSeconds}/>
        <Controls
          setIsPause={setIsPause}
          setBreakTime={setBreakTime}
          setSessionTime={setSessionTime}
          setSeconds={setSeconds}
          setMinutes={setMinutes}
        />
      </div>
    </div>
  );
}

export default App;
