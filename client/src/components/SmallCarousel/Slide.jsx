import { Typography } from "@material-ui/core";
import React from "react";

import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  container: {},
  name: {},
  image: { maxWidth: "60vw", maxHeight: "30vh", borderRadius: "25px" },
}));

export default function Slide({ info }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography className={classes.name}>{info.name}</Typography>
      <img className={classes.image} src={info.image} />
    </div>
  );
}
