import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

//Styling
import "../styles/Register.css";

//Assets
import Google from "../assets/google-color.png";
import Facebook from "../assets/facebook-color.png";
import Twitter from "../assets/twitter-color.png";

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

	return (
		<div className="registerpage">
			<h3 className="register-header">Create Your Account.</h3>
			<div className="register-div">
				<form
					className="register-form"
					onSubmit={(e) => {
						e.preventDefault();
						handleRegister(formData);
					}}
				>
					<TextField
						name="first_name"
						label="First Name"
						variant="filled"
						value={first_name}
						onChange={handleChange}
					/>
					<TextField
						name="last_name"
						label="Last Name"
						variant="filled"
						value={last_name}
						onChange={handleChange}
					/>
					<TextField
						name="username"
						label="Username"
						variant="filled"
						value={username}
						onChange={handleChange}
					/>
					<TextField
						name="email"
						label="Email"
						variant="filled"
						value={email}
						onChange={handleChange}
					/>
					<TextField
						name="password"
						type="password"
						label="Password"
						variant="filled"
						value={password}
						onChange={handleChange}
					/>
					<Button className="register-button" variant="contained" type="submit">
						Register
					</Button>
				</form>
			</div>
			<p>
				Already have an account? <Link to="/login">Login</Link>
			</p>
		</div>
	);
};

export default Register;
