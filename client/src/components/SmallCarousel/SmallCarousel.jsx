import React, { useState } from "react";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import Slide from "./Slide";

import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  slideContainer: {
    display: "flex",
    flexFlow: "row nowrap",
    overflowX: "scroll",
    maxHeight: "30vh",
    maxWidth: "100vw",
  },
}));

export default function SmallCarousel(props) {
  const { data } = props;
  const [activeIndex, setActiveIndex] = useState();
  const classes = useStyles();

  // const advance = () => {
  //   if (activeIndex === data.length - 1) {
  //     //
  //   } else {
  //     setActiveIndex((prev) => prev + 1);
  //   }
  // };

  // const back = () => {
  //   if (activeIndex <= 0) {
  //     // history.push("/register");
  //   } else {
  //     setActiveIndex((prev) => prev - 1);
  //   }
  // };

  return (
    <div>
      {/* <ArrowLeft /> */}
      <div className={classes.slideContainer}>
        {data.map((data) => (
          <Slide info={data} />
        ))}
      </div>
      {/* <ArrowRight /> */}
    </div>
  );
}
