import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import logo from "../../assets/logo.png";
import LogoSVG from "./LogoSVG";

const useStyles = makeStyles(() => ({
  logoContainer: {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    justifySelf: "flex-end",
  },
  logo: {
    height: "100px",
    width: "100px",
  },
  logoText: {
    marginRight: "4vw",
    color: "#96B4B6",
    fontSize: "1.2rem",
  },
}));

export default function Logo() {
  const classes = useStyles();
  return (
    <div className={classes.logoContainer}>
      <Typography className={classes.logoText}>PakYourBags</Typography>
      {/* <img src={logo} alt="logo" className={classes.logo} /> */}
      <LogoSVG />
    </div>
  );
}
