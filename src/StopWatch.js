import React from "react";

export default function StopWatch(props) {
  //   console.log(props);
  let stopWatch = props.watchState;
  let bestTime = props.bestTime;

  let time = stopWatch.time;
  let ms = ("0" + (Math.floor(time / 10) % 100)).slice(-2);
  let s = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
  let m = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);
  let h = ("0" + Math.floor(time / 3600000)).slice(-2);
  let fullTime = {
    ms: ms,
    s: s,
    m: m,
    h: h,
  };
  let msB = ("0" + (Math.floor(bestTime / 10) % 100)).slice(-2);
  let sB = ("0" + (Math.floor(bestTime / 1000) % 60)).slice(-2);
  let mB = ("0" + (Math.floor(bestTime / 60000) % 60)).slice(-2);
  let hB = ("0" + Math.floor(bestTime / 3600000)).slice(-2);
  let bestFullTime = {
    ms: msB,
    s: sB,
    m: mB,
    h: hB,
  };

  return (
    <div className="Stopwatch-display-container">
      <h4 className="Stopwatch-display">
        Time: {fullTime.h} : {fullTime.m} : {fullTime.s} : {fullTime.ms}
      </h4>
      <h6 className="Stopwatch-display">
        Best: {bestFullTime.h} : {bestFullTime.m} : {bestFullTime.s} :{" "}
        {bestFullTime.ms}
      </h6>
    </div>
  );
}
