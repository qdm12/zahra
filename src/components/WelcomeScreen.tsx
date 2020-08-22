import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconWelcome from "components/IconWelcome";

const showMs = 50;
const fadeOutMs = 1000;

const useStyles = makeStyles({
  root: {
    position: "fixed",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#778a70",
    transition: `all ${fadeOutMs}ms ease`,
    opacity: (props: styleProps) => (props.fadeOut ? 0 : 1),
    display: (props: styleProps) => (props.show ? "flex" : "none"),
  },
  icon: {
    fontSize: "20em",
  },
});

interface styleProps {
  fadeOut: boolean;
  show: boolean;
}

function WelcomeScreen(): JSX.Element {
  const [fadeOut, setFadeOut] = useState(false);
  const [show, setShow] = useState(true);
  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);
    }, showMs);
    const showTimer = setTimeout(() => {
      setShow(false);
    }, showMs + fadeOutMs);
    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(showTimer);
    };
  }, []);
  const classes = useStyles({ fadeOut, show });
  return (
    <div className={classes.root}>
      <IconWelcome className={classes.icon} />
    </div>
  );
}

export default WelcomeScreen;