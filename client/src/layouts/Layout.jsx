import React from "react";
import "../styles/Layout.css";

const Layout = (props) => {
  return (
    <div className="layout-div">
      {props.children}
      <footer className="nav-footer">
        <h1>(_)_):::\\\\:::D~~~~</h1>
      </footer>
    </div>
  );
};

export default Layout;
