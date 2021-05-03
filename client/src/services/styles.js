import { makeStyles } from "@material-ui/core";

export const buttonStyles = makeStyles((theme) => ({
  button: {
    textTransform: "none",
      fontSize: "18px",
      width: "200px",
      height: "55px",
      backgroundColor: "#fe5d2a",
      color: "white",
      borderRadius: "100px 5px 100px 100px",
      boxShadow: "0px 5px 5px #12121280",
      "&:hover": {
        backgroundColor: "#e54f21",
        boxShadow: "0px 5px 5px #12121280",
      },
      "&:active": {
        transform: "translateY(3px)",
    },
  }
}))