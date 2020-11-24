import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconFacebook from "./IconFacebook";
import colors from "colors";
import IconInstagram from "./IconInstagram";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: 0,
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  bar: {
    display: "flex",
    padding: theme.spacing(0, 5),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2, 1.5),
    },
  },
  icon: {
    color: colors.menuText,
    margin: theme.spacing(1, 3),
    fontSize: 45,
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(0.5, 1.5),
      fontSize: 35,
    },
  },
  facebook: {},
  instagram: {},
}));

function HorizontalIcons(): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.bar}>
        <IconFacebook className={clsx(classes.icon, classes.facebook)} />
        <IconInstagram className={clsx(classes.icon, classes.instagram)} />
      </div>
    </div>
  );
}

export default HorizontalIcons;
