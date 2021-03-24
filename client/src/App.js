// DEPENDENCIES
import { Switch, Route, useHistory } from 'react-router-dom'
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
import { useState, useEffect } from 'react'

// COMPONENTS
import Layout from '../src/layouts/Layout'
import MainContainer from '../src/containers/MainContainer'
import Register from '../src/screens/Register'
import Login from '../src/screens/Login'
import {withTheme} from "./services/Theme"

// STYLES
import './App.css';


function App() {
  // Define current user to pass down as props
  const [currentUser, setCurrentUser] = useState(null);

  // useHistory to redirect user when they log in and/or register
  const history = useHistory();

  // Verify returning user
  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    }
  }, []);

  // Login user
  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    // Set up onboarding screen
    // userData.onboarding_check ? Redirect("/onboarding") :
    history.push('/');
  };

  // Register user
  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/');
  }

  // Logout user
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  }

  return (
    <Layout currentUser={currentUser} handleLogout={handleLogout}>
      <Switch>
        {/* LOGIN */}
        <Route path='/login'>
          <Login
            handleLogin={handleLogin}
          />
        </Route>

        {/* REGISTER */}
        <Route path='/register'>
          <Register
            handleRegister={handleRegister}
          />
        </Route>

        {/* LANDING */}
        <Route path='/'>
          <MainContainer currentUser={ currentUser}/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default withTheme(App);
