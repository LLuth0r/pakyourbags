import React from "react";

// MATERIAL UI COMPONENTS
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const FooterNav = () => {
  // Will Set this up
  let currentUser = "bill";
  return (
    <div className="nav-container">
      <h1>Pak Your Bags</h1>
      {currentUser ? (
        <>
          <p>{`Welcome, ${currentUser}`} </p>
          <ExitToAppIcon id="exit-icon" />
        </>
      ) : (
        <p>Login</p>
      )}
    </div>
  );
};

export default FooterNav;
