import React from "react";
import { Link, useParams } from "react-router-dom";

//MaterialUI stuff
import { Button, Tooltip, Typography, withStyles } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import SearchIcon from "@material-ui/icons/Search";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

const useStyles = makeStyles((theme) => ({
  footerNav: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#E5E5E5",
    height: "10vh",
  },
  link: {
    display: "flex",
    flexFlow: "column wrap",
    textDecoration: "none",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
  },
  button: {},
  text: { fontSize: ".6rem" },
  icon: {},
  iconActive: {
    color: theme.palette.primary.main,
  },
}));

const CustomNavButton = withStyles((theme) => ({
  label: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
  },
}))(Button);

export default function FooterNav({ location }) {
  const classes = useStyles();

  return (
    <div className={classes.footerNav}>
      {/* Home Button */}
      <Tooltip title="My Trips">
        <Link className={classes.link} to="/mytrips">
          <CustomNavButton className={classes.button}>
            <WorkOutlineIcon
              className={
                location === "/mytrips" ? classes.iconActive : classes.icon
              }
            />
            <Typography className={classes.text}>My Trips</Typography>
          </CustomNavButton>
        </Link>
      </Tooltip>

      {/* Explore Icon*/}
      <Tooltip title="Explore">
        <Link className={classes.link} to="/explore">
          <CustomNavButton className={classes.button}>
            <SearchIcon
              className={
                location === "/explore" ? classes.iconActive : classes.icon
              }
            />
            <Typography className={classes.text}>Explore</Typography>
          </CustomNavButton>
        </Link>
      </Tooltip>

      {/* Chats Icon Button */}
      <Tooltip title="Chats">
        <Link className={classes.link} to="/chats">
          <CustomNavButton className={classes.button}>
            <ChatBubbleOutlineIcon
              className={
                location === "/chats" ? classes.iconActive : classes.icon
              }
            />
            <Typography className={classes.text}>Chats</Typography>
          </CustomNavButton>
        </Link>
      </Tooltip>

      {/* Account Icon */}
      <Tooltip title="My Account">
        <Link className={classes.link} to="/my-account">
          <CustomNavButton className={classes.button}>
            <PersonOutlineIcon
              className={
                location === "/my-account" ? classes.iconActive : classes.icon
              }
            />
            <Typography className={classes.text}>My Account</Typography>
          </CustomNavButton>
        </Link>
      </Tooltip>
    </div>
  );
}
