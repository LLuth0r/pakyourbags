import React from "react";
import { Link } from "react-router-dom";

//MaterialUI stuff
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import InboxOutlinedIcon from "@material-ui/icons/InboxOutlined";
import { Button, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footerNav: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  newButton: {
    width: "40px",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "100%",
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
  newButtonIcon: {
    width: "100%",
    height: "100%",
  },
}));

export default function FooterNav() {
  const classes = useStyles();

  return (
    <div className={classes.footerNav}>
      {/* Home Button */}
      <Tooltip title="home">
        <Link to="/mytrips">
          <Button>
            <HomeOutlinedIcon />
          </Button>
        </Link>
      </Tooltip>
      {/* New Trip Icon */}
      <Tooltip title="Create a new trip">
        <Link to="/create-trip">
          <Button className={classes.newButton}>
            <AddCircleOutlineOutlinedIcon className={classes.newButtonIcon} />
          </Button>
        </Link>
      </Tooltip>
      {/* Messaging Icon */}
      <Tooltip title="Inbox">
        <Link to="/messages">
          <Button>
            <InboxOutlinedIcon />
          </Button>
        </Link>
      </Tooltip>
    </div>
  );
}
