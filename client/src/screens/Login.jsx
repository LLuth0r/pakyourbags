import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {NavLink} from 'react-router-dom'

//Styling
import '../styles/Login.css'

const Login = (props) => {
  
  // setting form data state

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  // deconstructing the handle login function from props

  const { handleLogin } = props;

  // generic handle change to grab what is put in text fields

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="loginpage">
			<div className="login-text">
				<h3 className="login-header">Login to your account.</h3>
				<h6 className="register-header">
					Don't have one?{" "}
					<NavLink className="register-link" to="/register">
						Register for an account.
					</NavLink>
				</h6>
			</div>
      <form
      className='login-form'
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(formData);
        }}
      >
        <TextField
          name="username"
          id="username"
          label="Username"
          variant="filled"
          value={username}
          onChange={handleChange}
        />
        <TextField
          name="password"
          id="password"
          type="password"
          label="Password"
          variant="filled"
          value={password}
          onChange={handleChange}
        />
        <Button className="formbutton" variant="contained" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
