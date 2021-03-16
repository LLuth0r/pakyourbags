// DEPENDENCIES
import { Switch, Route, useHistory } from 'react-router-dom'
import { loginUser, registerUser } from './services/auth'
import { useState } from 'react'

// COMPONENTS
import Layout from '../src/layouts/Layout'
import MainContainer from '../src/containers/MainContainer'

// STYLES
import './App.css';
import Login from './screens/Login';
import Register from './screens/Register'

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory()

  // imported loginuser from auth to handle our login functionality

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/')
  }

    // imported registeruser from auth to handle our register functionality
  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/')
  }

  return (
    <Layout currentUser={currentUser}>
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

export default App;
