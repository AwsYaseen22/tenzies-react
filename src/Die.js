import React from "react";
import "./App.css";
import "./die.css";

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };
  let dots = Array(props.value)
    .fill(0)
    .map((_, i) => <span className="dot" />);
  //   return (
  // <div className="die-face" style={styles} onClick={props.holdDice}>
  //   <h2 className="die-num">{props.value}</h2>
  // </div>
  return (
    <div className="face" style={styles} onClick={props.holdDice}>
      {dots}
    </div>
  );
  //   );
}
