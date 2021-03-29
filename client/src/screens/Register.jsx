import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

//Styling
import "../styles/Register.css";

//Assets
import Google from "../assets/google-color.png";
import Facebook from "../assets/facebook-color.png";
import Twitter from "../assets/twitter-color.png";
import ProgressDots from "../components/OnboardingCarousel/ProgressDots";

const Register = (props) => {
  // setting form data state

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });

  const {first_name, last_name, username, email, password} = formData;

  // deconstructing handle register function from auth

  const {handleRegister, dots, advance, active} = props;

  // generic handle change for input fields
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

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
              value={password}
              onChange={handleChange}
            />
          </div>
          <button className="sign-up-button" type="submit">
            Sign up
          </button>
          {/* <Button className="register-button" variant="contained" type="submit">
          Register
        </Button> */}
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
