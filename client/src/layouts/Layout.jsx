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
      {/* <HeaderNav handleLogout={handleLogout} currentUser={currentUser}/>/> */}
      <div className="layout-div">{props.children}</div>
      {/* <footer className="nav-footer"> */}
      {/* <FooterNav   */}
      {/* </footer> */}
    </>
  );
};

export default Layout;
