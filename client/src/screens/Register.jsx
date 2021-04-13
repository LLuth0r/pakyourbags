// DEPENDENCIES
import React, { useState } from "react";
import { Link } from "react-router-dom";

// COMPONENTS
import ProgressDots from "../components/OnboardingCarousel/ProgressDots";

// MATERIAL UI COMPONENTS
import { Button, makeStyles } from "@material-ui/core";

// STYLES
import "../styles/Register.css";

// ASSETS
// import Google from "../assets/google-color.png";
// import Facebook from "../assets/facebook-color.png";
// import Twitter from "../assets/twitter-color.png";

const Register = (props) => {
  // setting form data state
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });

  const { first_name, last_name, username, email, password } = formData;

  // deconstructing handle register function from auth
  const { handleRegister } = props;

  // generic handle change for input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Define useStyles function using makeStyles
  const useStyles = makeStyles((theme) => ({
    button: {
      backgroundColor: "#121212",
      color: "white",
      textTransform: "none",
      height: "40px",
      width: "60vw",
      maxWidth: "350px",
      borderRadius: "100px",
      margin: "50px 0px 50px 0px",
      boxShadow: "0px 5px 5px #12121280",
      "&:hover": {
        backgroundColor: "#212121",
        boxShadow: "0px 5px 5px #12121280",
      },
      "&:active": {
        boxShadow: "0px 2px 5px #12121280",
        transform: "translateY(3px)",
      },
    },
  }));

  // Invoke useStyles function to add styles to the button using className
  const classes = useStyles();

  return (
    <>
      <div className="register-page">
        <h3 className="register-header">Create your account</h3>
        <form
          className="register-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister(formData);
          }}
        >
          <div className="name-inputs">
            <input
              placeholder="First Name"
              name="first_name"
              value={first_name}
              onChange={handleChange}
            />
            <input
              placeholder="Last Name"
              name="last_name"
              value={last_name}
              onChange={handleChange}
            />
          </div>
          <div className="account-inputs">
            <input
              placeholder="Username"
              name="username"
              value={username}
              onChange={handleChange}
            />
            <input
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <input
              placeholder="Password"
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <Button className={classes.button} variant="contained" type="submit">
            Sign up
          </Button>
        </form>
        <p className="login-user">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
      <div
        style={{
          width: "30vw",
          margin: "0 auto",
        }}
      >
        <ProgressDots totalDots={4} filledDots={1} />
      </div>
    </>
  );
};

export default Register;
