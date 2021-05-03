import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Logo from "./Logo";

const useStyles = makeStyles(() => ({
  headerNav: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    alignItems: "center",
    height: "8vh",
    padding: "1vh 2vw 1vh 2vw",
  },
  backButton: {
    color: "#96B4B6",
  },
}));

export default function HeaderNav(props) {
  const history = useHistory();
  const { location } = props;
  const classes = useStyles();

  const backButton = (
    <>
      <Button
        onClick={() => {
          history.goBack();
        }}
        className={classes.backButton}
      >
        <ArrowBackIcon />
      </Button>
    </>
  );

  return (
    <div className={classes.headerNav}>
      {/* Back Button if not on home screen */}
      {location === "/mytrips" ? <div></div> : backButton}
      <Logo />
    </div>
  );
}
