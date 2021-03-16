// DEPENDENCIES
import { useState, useEffect } from 'react';
import {Switch, Route, useHistory} from 'react-router-dom'

// COMPONENTS
import Layout from '../src/layouts/Layout'
import MainContainer from '../src/containers/MainContainer'

// STYLES
import './App.css';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';

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
    <Layout>
      <Switch>
        {/* LOGIN */}
        <Route path='/login'>
          
        </Route>

        {/* REGISTER */}
        <Route path='/register'>

        </Route>

        {/* LANDING */}
        <Route path='/'>
          <MainContainer />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
