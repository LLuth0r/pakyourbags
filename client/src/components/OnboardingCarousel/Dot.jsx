import React from "react";

export default function Dot(props) {
  const { filled } = props;
  const styles = {
    backgroundColor: filled ? "#FE5D2A" : "#96B4B6",
    opacity: ".8",
    height: "10px",
    width: "10px",
    borderRadius: "100%",
  };

  return <div style={styles}></div>;
}
