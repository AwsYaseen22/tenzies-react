import React from "react";

export default function StopWatch(props) {
  //   console.log(props);
  let stopWatch = props.watchState;

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

  return (
    <div className="Stopwatch-display">
      <div>
        {fullTime.h} : {fullTime.m} : {fullTime.s} : {fullTime.ms}
      </div>
    </div>
  );
}
