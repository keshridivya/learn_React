import React from 'react';
import './style.css';

const useState = () => {
   const initialCount = 10;
  const [num,setNum]= React.useState(initialCount);
  return (
    <div className="center_div">
      <p>{num}</p>
      <div className="button2" onMouseMove={() => setNum(num+1)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Increment
      </div>
      <div className="button2" onMouseMove={() => setNum(num-1)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Decrement
      </div>
    </div>
  )
}

export default useState
