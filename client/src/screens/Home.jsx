// DEPENDENCIES
import {Link} from "react-router-dom";

// MATERIAL UI COMPONENTS
import {Button, makeStyles} from "@material-ui/core";

// STYLES
import "../styles/Home.css";

const Home = () => {
  // Define the Mui useStyles function with makeStyles
  const useStyles = makeStyles((theme) => ({
    button: {
      textTransform: "none",
      fontSize: "18px",
      width: "200px",
      height: "55px",
      backgroundColor: "#fe5d2a",
      color: "white",
      borderRadius: "100px 5px 100px 100px",
      boxShadow: "0px 5px 5px #12121280",
      "&:hover": {
        backgroundColor: "#e54f21",
        boxShadow: "0px 5px 5px #12121280",
      },
      "&:active": {
        transform: "translateY(3px)",
      },
    },
  }));

  // Invoke useStyles function to use in styling
  const classes = useStyles();

  return (
    <div className="home-div">
      <div className="navigation-links">
        <Link to="/register">
          <Button className={classes.button}>Let's Get Started</Button>
          {/* <button>Let's Get Started</button> */}
        </Link>
        <Link to="/login">Login</Link>
      </div>
      <div className="landing-text">
        <p>Take your trips to the</p>
        <h1 className="next-level">Next Level</h1>
      </div>
    </div>
  );
};

export default Home;
