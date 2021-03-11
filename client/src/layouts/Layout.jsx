// DEPENDENCIES
import React from "react";

// COMPONENTS
import FooterNav from "../shared/FooterNav";

// STYLES
import "../styles/Layout.css";

const Layout = (props) => {
  return (
    <>
      <div className="layout-div">{props.children}</div>
      <footer className="nav-footer">
        <FooterNav />
      </footer>
    </>
  );
};

export default Layout;
