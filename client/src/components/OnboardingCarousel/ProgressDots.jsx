import React from "react";
import Dot from "./Dot";

export default function ProgressDots(props) {
  const { totalDots, filledDots } = props;

  const dotArray = [];

  for (let i = 0; i < totalDots; i++) {
    if (i < filledDots) {
      dotArray.push({ filled: true });
    } else {
      dotArray.push({ filled: false });
    }
  }

  console.log(dotArray);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      {dotArray.map((dot) => (
        <Dot filled={dot.filled} />
      ))}
    </div>
  );
}
