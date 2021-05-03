// DEPENDENCIES
import React from "react";

// COMPONENTS
import HeaderNav from "../components/shared/HeaderNav";
import FooterNav from "../components/shared/FooterNav";

// STYLES
// import "../styles/Layout.css";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  footer: {
    position: "fixed",
    bottom: 0,
    width: "100vw",
    boxShadow: "0px 0px 10px grey",
  },
  header: {
    postion: "fixed",
    top: 0,
    width: "100vw",
  },
}));

const Layout = (props) => {
  const { currentUser, handleLogout, location } = props;
  const classes = useStyles();
  console.log(location);
  return (
    <>
      <header className={classes.header}>
        <HeaderNav
          handleLogout={handleLogout}
          currentUser={currentUser}
          location={location}
        />
      </header>

      <div className="layout-div">{props.children}</div>

      <footer className={classes.footer}>
        <FooterNav location={location} />
      </footer>
    </>
  );
};

export default Layout;
