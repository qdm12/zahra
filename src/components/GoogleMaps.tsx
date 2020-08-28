import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
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
    <iframe
      title="maps"
      className={clsx(classes.root, props.className)}
      id="googlemaps"
      frameBorder="0"
      src={`https://www.google.com/maps/embed/v1/place?key=${APIKey}&q=${query}`}
      allowFullScreen
    />
  );
}

export default GoogleMaps;
