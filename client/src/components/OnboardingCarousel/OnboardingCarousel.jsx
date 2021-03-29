import { Button, Typography } from "@material-ui/core";
import ProgressDots from "./ProgressDots";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default function OnboardingCarousel(props) {
  const { active, advance, back, current } = props;

  const styles = {
    root: {
      backgroundColor: current.backgroundColor,
      height: "100vh",
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
