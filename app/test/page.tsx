'use client'

// -----------usestate show hide------------
// import React from 'react'
// import {useState} from 'react'

// function page() {
//   const [show, setShow] = useState(true)
//   const handleClick = ()=>{
//     setShow((show=>!show))
//   }
//   return (
//     <div>
//       <button className="text-orange-400 inline-block font-bold hover:cursor-pointer hover:text-red-800" onClick={handleClick}>show/Hide</button>
//       {show ? <p>hi this is the text</p>: ''}
//     </div>

    
//   )
// }

// export default page
''
// -----------usestate interwell------------
import { useState } from "react";

export default function Page() {

  const [timer, setTimer] = useState(0);

    const startTimer = () => {
      window.aa = setInterval(()=>{
        setTimer((timer=>timer+1))
      })
    };
    const stopTimer = () => {
      clearInterval(window.aa);
    };
    const resetTimer = () => {
      clearInterval(window.aa);
      setTimer(0);
    };
  return (
    <div className="container">
      <h1>Timer</h1>
      <span>{Math.trunc(timer / 60)} mins </span>
      <span>{timer % 60} secs</span>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
