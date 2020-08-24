import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
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
  map: {
    width: "100%",
    height: 500,
    borderRadius: 30,
    [theme.breakpoints.down("md")]: {
      left: 0,
      width: "100%",
      height: 350,
    },
  },
}));

interface Props {
  className?: string;
}

function GoogleMaps(props: Props): JSX.Element {
  const classes = useStyles();
  const APIKey = "AIzaSyCsJfA5hBKlsnLtNFkXOb_olfg015fZVD0";
  const query = "Zahra Restaurant Terrace".replace(/ /g, "+");

  return (
    <div className={clsx(classes.root, props.className)}>
      <div className={classes.title}>Location</div>
      <iframe
        title="maps"
        className={classes.map}
        id="googlemaps"
        frameBorder="0"
        src={`https://www.google.com/maps/embed/v1/place?key=${APIKey}&q=${query}`}
        allowFullScreen
      />
    </div>
  );
}

export default GoogleMaps;
