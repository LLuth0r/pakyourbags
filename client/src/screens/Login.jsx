import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

//Styling
import "../styles/Login.css";

//Assets
import Google from "../assets/google-color.png";
import Facebook from "../assets/facebook-color.png";
import Twitter from "../assets/twitter-color.png";

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
			<h3 className="login-header">Login to your account.</h3>
			<div className="login-div">
				<form
					className="login-form"
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
			<p>Not a member?  <Link to='/register'>Join to plan your next vacation!
				</Link></p>
		</div>
	);
};

export default Login;
