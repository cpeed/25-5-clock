import React from "react";

const Event = ({id,time,setTime}) => {
  const handleDecrement=()=>{
    setTime(prev=>prev>1?prev-1:prev)
  }
  const handleIncrement=()=>{
    setTime(prev=>prev<60?prev+1:prev)
  }
  return <div className={id+'-label'}>
    <h1 id={id+'-label'}>{id+' Length'}</h1>
  <span>  <button id={id+'-decrement'} onClick={handleDecrement}>-</button><span id={id+'-length'}>{time}</span><button id={id+'-increment'} onClick= {handleIncrement}>+</button>
  </span>  
    </div>;
};

export default Event;
