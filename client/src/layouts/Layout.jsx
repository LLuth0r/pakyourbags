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
    marginBottom: "1vh",
  },
}));

const Layout = (props) => {
  const { currentUser, handleLogout, location } = props;
  const classes = useStyles();
  console.log(location);
  return (
    <>
      <HeaderNav
        handleLogout={handleLogout}
        currentUser={currentUser}
        location={location}
      />
      <div className="layout-div">{props.children}</div>
      <footer className={classes.footer}>
        <FooterNav />
      </footer>
    </>
  );
};

export default Layout;
