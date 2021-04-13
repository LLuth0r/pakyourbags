import { Avatar, Button, makeStyles } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Logo from "./Logo";

const useStyles = makeStyles(() => ({
  headerNav: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100vw",
    height: "8vh",
    position: "fixed",
    top: 0,
  },
}));

export default function HeaderNav(props) {
  const history = useHistory();
  const { location } = props;
  const classes = useStyles();

  const backButton = (
    <>
      <Button onClick={() => {}}>
        <ArrowBackIcon />
      </Button>
    </>
  );

  return (
    <div className={classes.headerNav}>
      {/* Back Button if not on home screen */}
      {location === "/mytrips" ? <div></div> : backButton}
      <Logo />
      {/* Prof Avatar */}
      <Avatar />
    </div>
  );
}
