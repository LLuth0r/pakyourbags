import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
// import logo from "../../assets/logo.png";

const useStyles = makeStyles(() => ({
  logoContainer: {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    justifySelf: "flex-end",
  },
}));

export default function Logo() {
  const classes = useStyles();
  return (
    <div className={classes.logoContainer}>
      <Typography>PakYourBags</Typography>
      {/* <img src={logo} alt="logo" /> */}
    </div>
  );
}
