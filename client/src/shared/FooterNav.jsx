import React from "react";
import {Link} from 'react-router-dom'

// MATERIAL UI COMPONENTS
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const FooterNav = (props) => {
  // Will Set this up
  const {currentUser, handleLogout} = props;
  console.log(currentUser)


  return (
    <div className="nav-container">
      <h1>Pak Your Bags</h1>
      {currentUser ? (
        <>
          <p>{`Welcome, ${currentUser.first_name}`} </p>
          <ExitToAppIcon id="exit-icon" onClick={handleLogout}/>
        </>
      ) : (
        
        <Link to='/login'>Login</Link>
      )}
    </div>
  );
};

export default FooterNav;
