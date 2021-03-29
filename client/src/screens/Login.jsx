import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

//Styling
import "../styles/Login.css";

//Assets
import Google from "../assets/google-color.png";
import Facebook from "../assets/facebook-color.png";
import Twitter from "../assets/twitter-color.png";
import {makeStyles} from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   root: {},
//   input: {
//     background: `#F5F5F5`,
//     width: "70vw",
//     height: "30px",
//     borderRadius: "20px",
//   },
// }));

const Login = (props) => {
  // const classes = useStyles();

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
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
      <p className="register-user">
        Not a member?{" "}
        <Link to="/register">Join to plan your next vacation!</Link>
      </p>
    </div>
  );
};

export default Login;
