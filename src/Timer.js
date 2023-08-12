import React, { useEffect, useState } from "react";

const Timer = ({ value, isPause, breakTime, setSeconds, seconds ,setMinutes,minutes}) => {
 
  const [isBreak, setIsBreak] = useState(false);
  const [title, setTitle] = useState("Session");
  useEffect(() => {
    if (minutes >= -1 && isPause) {
      if (seconds < 1) {
        setMinutes((prev) => prev - 1);
        setSeconds(60);
      }
      if (minutes < 0 && !isBreak) {
        const audio = document.getElementById("beep");
        audio.play();
        setIsBreak(true);
        setTitle("Break");
        setMinutes(breakTime-1);
        
      }
      if (minutes < 0 && isBreak) {
        const audio = document.getElementById("beep");
        audio.play();
        setIsBreak(false);
        setTitle("Session");
        setMinutes(value-1);
        
      }
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [setSeconds, seconds, isPause, minutes, isBreak, breakTime, value]);
  useEffect(() => {
    setMinutes(value);
  }, [value]);

  return (
    <div className="session">
      <h1 id="timer-label">{title}</h1>
      <p id="time-left">
        {minutes}:{seconds < 10 ? "0" + seconds : seconds}
      </p>
      <audio
        id="beep"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      >
        {" "}
      </audio>
    </div>
  );
};

export default Timer;
