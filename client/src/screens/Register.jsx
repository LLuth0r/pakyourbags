import React, { useState } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Register = (props) => {

  // setting form data state

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData;

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
    <div className='formdiv'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister(formData);
        }}
      >
        <TextField
          name="username"
          id="username"
          label="Username"
          variant="outlined"
          value={username}
          onChange={handleChange}
        />
        <TextField
          name="email"
          id="email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={handleChange}
        />
        <TextField
          name="password"
          id="password"
          type="password"
          label="Password"
          variant="outlined"
          value={password}
          onChange={handleChange}
        />
        <Button className='formbutton'
          variant="contained"
          type='submit'
        >Login</Button>
      </form>
    </div>
  );
};

export default Register;