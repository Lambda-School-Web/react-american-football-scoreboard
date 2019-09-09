import React, { useState, useEffect } from "react";
import "./App.css";

const Timer = props => {
  const [countDown, setCountDown] = useState(12 * 60);
  let myTimer = null;
  let displayTimer = "12:00";

  //   useEffect(() => {
  //     myTimer = setInterval(() => handleTimer(), 1000);
  //   }, []);

  useEffect(() => {
    handleTimer();
  }, [props.timeControl]);

  function handleTimer() {
    console.log(props);
    console.log(countDown);
    console.log(myTimer);
    switch (props.timeControl) {
      case "pause":
        clearInterval(myTimer);
        myTimer = null;
        break;
      case "resume":
        setCountDown(countDown - 1);
        if (myTimer) {
          break;
        }
        myTimer = setInterval(() => handleTimer(), 1000);
        break;
      case "reset":
        setCountDown(12 * 60);
        clearInterval(myTimer);
        myTimer = null;
        break;
      default:
        break;
    }
  }
  //(displayTimer = `${Math.floor(countDown / 60)}:${countDown % 60}`));

  return <>{displayTimer}</>;
};

export default Timer;
