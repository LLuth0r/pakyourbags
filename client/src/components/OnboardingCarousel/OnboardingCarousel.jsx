import { Button, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ProgressDots from "./ProgressDots";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default function OnboardingCarousel(props) {
  const { info } = props;
  const history = useHistory();

  const [active, setActive] = useState(0);

  const current = info[active];

  const styles = {
    root: {
      backgroundColor: current.backgroundColor,
      height: "100vh",
      fontFamily: ["Roboto", "sans-serif"].join(","),
    },
    backButton: {},
    head: { textAlign: "center" },
    blurb: {
      backgroundColor: current.foregroundColor,
      display: "flex",
      flexFlow: "column wrap",
      alignItems: "center",
      justifyContent: "space-between",
      height: "60vh",
      margin: "5vh 5vw 1vh 5vw",
      padding: "5vh 5vw 5vh 5vw ",
      borderRadius: "40px",
    },
    icon: {
      fontSize: "5rem",
      padding: 0,
      margin: 0,
      textAlign: "center",
    },
    blurbText: {},
    button: {
      backgroundColor: current.buttonColor,
      color: "#FFFFFF",
      borderRadius: "100px",
      width: "60vw",
      height: "40px",
      textTransform: "none",
    },
    dots: {
      width: "30vw",
      margin: "0 auto",
    },
  };

  const advance = () => {
    if (active === info.length - 1) {
      history.push("/mytrips");
    } else {
      setActive((prev) => prev + 1);
    }
  };

  const back = () => {
    if (active <= 0) {
      history.push("/login");
    } else {
      setActive((prev) => prev - 1);
    }
  };

  console.log(current);
  return (
    <div style={styles.root}>
      <Button style={styles.backButton} onClick={back}>
        <ArrowBackIcon />
      </Button>
      <div style={styles.head}>
        <Typography variant="h6">{current.word}</Typography>
        <Typography variant="h4">{current.head}</Typography>
      </div>
      <div style={styles.blurb}>
        <div>
          <div style={styles.icon}>{current.icon}</div>
          <Typography style={styles.blurbText}>{current.blurb}</Typography>
        </div>

        <Button style={styles.button} onClick={advance}>
          {current.button}
        </Button>
        <div style={styles.dots}>
          <ProgressDots totalDots={4} filledDots={active + 2} />
        </div>
      </div>
    </div>
  );
}
