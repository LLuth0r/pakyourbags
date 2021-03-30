// DEPENDENCIES
import React from "react";

// COMPONENTS
// import FooterNav from "../shared/FooterNav";

// STYLES
import "../styles/Layout.css";

const Layout = (props) => {
  // const {currentUser, handleLogout} = props;

  return (
    <>
      <div className="layout-div">{props.children}</div>
      {/* <footer className="nav-footer"> */}
      {/* <FooterNav handleLogout={handleLogout} currentUser={currentUser}/> */}
      {/* </footer> */}
    </>
  );
};

export default Layout;
