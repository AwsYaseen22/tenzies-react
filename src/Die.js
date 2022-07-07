import React from "react";
import "./App.css";
import "./die.css";

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };
  let dots = Array(props.value)
    .fill(0)
    .map((_, i) => <span className="dot" key={i} />);
  return (
    <div className="face" style={styles} onClick={props.holdDice}>
      {dots}
    </div>
  );
  //   );
}
