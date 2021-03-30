// DEPENDENCIES
import React, {useState} from "react";
import {Link} from "react-router-dom";

// MATERIAL UI COMPONENTS
import {Button, makeStyles} from "@material-ui/core";

// STYLES
import "../styles/Login.css";

const Login = (props) => {
  // setting form data state
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const {username, password} = formData;

  // deconstructing the handle login function from props
  const {handleLogin} = props;

  // generic handle change to grab what is put in text fields
  const handleChange = (e) => {
    const {name, value} = e.target;
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
    <div className="login-page">
      <h3 className="login-header">Login to your account.</h3>
      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(formData);
        }}
      >
        <div className="user-inputs">
          <input
            placeholder="Username"
            name="username"
            value={username}
            onChange={handleChange}
          />
          <input
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <Button className={classes.button} variant="contained" type="submit">
          Login
        </Button>
      </form>
      <p className="register-user">
        Not a member?{" "}
        <Link to="/register">Join to plan your next vacation!</Link>
      </p>
    </div>
  );
};

export default Login;
