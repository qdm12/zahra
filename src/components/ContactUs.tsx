import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormattedMessage } from "react-intl";
import GoogleMaps from "./GoogleMaps";
import colors from "colors";

const useStyles = makeStyles((theme) => ({
  root: {
    color: colors.contactText,
    marginTop: theme.spacing(4),
    padding: theme.spacing(0, 10),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0, 2),
    },
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      fontSize: 25,
    },
  },
  phone: {
    fontSize: 25,
    textDecoration: "none",
    color: colors.contactText,
    opacity: 0.7,
    transition: "1s ease all",
    "&:hover": {
      color: colors.hrefHover,
      opacity: 1,
    },
  },
  maps: {
    marginTop: theme.spacing(5),
  },
}));

function ContactUs(): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <FormattedMessage id="ContactUs" />
      </div>
      <a className={classes.phone} href="tel:+40748518994">
        (+40) 748 518 994
      </a>
      <GoogleMaps className={classes.maps} />
    </div>
  );
}

export default ContactUs;
