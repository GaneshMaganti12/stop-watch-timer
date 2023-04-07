import React, { useState, useEffect } from "react"
import './App.css';

function App() {

  const [timer, setTimer] = useState(null)
  const [second, setSecond] = useState(0)
  const [minute, setMinute] = useState(0)
  const [hour, setHour] = useState(0)

  const startTimer = () =>{
    let count = 0
    setTimer(setInterval(() =>{
      
      count = count + 1

      const hour = Math.floor(count / (60 * 60))

      const minute = Math.floor((count - (hour * (60 * 60))) / 60)

      const seconds = Math.floor(count - (minute * 60))

      setHour(hour)
      setMinute(minute)
      setSecond(seconds)


    }, 1000))
  }

  const stopTimer = () =>{
    clearInterval(timer)
  }

  return (
    <div className="App">
      <h1>{`${hour > 9 ? hour: `0${hour}`}:${minute > 9 ? minute : `0${minute}`}:${second > 9 ? second : `0${second}`}`}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default App;
