import React from "react";

const Controls = ({ setIsPause, setBreakTime, setSessionTime, setSeconds,setMinutes }) => {
  return (
    <div>
      <button id="start_stop" onClick={() => setIsPause((state) => !state)}>
        play/stop
      </button>
      <button
        id="reset"
        onClick={() => {
          setIsPause(false);
          setBreakTime(5);
          setSessionTime(25);
          setSeconds(0);
            setMinutes(25)
          document.getElementById("beep").pause();
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Controls;
