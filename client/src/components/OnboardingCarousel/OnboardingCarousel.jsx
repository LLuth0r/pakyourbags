// DEPENDENCIES

// COMPONENTS
import ProgressDots from "./ProgressDots";

// MATERIAL UI COMPONENTS
import {Button, makeStyles, Typography} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default function OnboardingCarousel(props) {
  const {active, advance, back, current} = props;

  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: current.backgroundColor,
      height: "100vh",
    },
    backButton: {},
    head: {textAlign: "center"},
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
      boxShadow: "0px 5px 5px #12121280",
      "&:hover": {
        backgroundColor: current.hoverColor,
      },
      "&:active": {
        transform: "translateY(3px)",
      },
    },
    dots: {
      width: "30vw",
      margin: "0 auto",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button className={classes.backButton} onClick={back}>
        <ArrowBackIcon />
      </Button>
      <div className={classes.head}>
        <Typography variant="h6">{current.word}</Typography>
        <Typography variant="h4">{current.head}</Typography>
      </div>
      <div className={classes.blurb}>
        <div>
          <div className={classes.icon}>{current.icon}</div>
          <Typography className={classes.blurbText}>{current.blurb}</Typography>
        </div>

        <Button className={classes.button} onClick={advance}>
          {current.button}
        </Button>
        <div className={classes.dots}>
          <ProgressDots totalDots={4} filledDots={active + 2} />
        </div>
      </div>
    </div>
  );
}
