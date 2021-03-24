// DEPENDENCIES

// MATERIAL UI COMPONENTS
import Button from "@material-ui/core/Button";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

// STYLES
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-div">
      <div className="landing-text">
        <p>Take your trips to the</p>
        <h2 className="next-level">NEXT LEVEL</h2>
        <div className="get-started-button">
          {/* <Button
            className="actual-button"
            variant="contained"
            color="primary"
            size="large"
          >
            Get Started{<ArrowForwardIosIcon />}
          </Button> */}
          <div className="the-real-button">
            <button>
              Get Started
              <ArrowForwardIosIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
