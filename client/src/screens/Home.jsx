// DEPENDENCIES
import {Link} from "react-router-dom";

// MATERIAL UI COMPONENTS
// import Button from "@material-ui/core/Button";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

// STYLES
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-div">
      <div className="the-real-button">
        <Link to="/register">
          <button>Let's Get Started</button>
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
