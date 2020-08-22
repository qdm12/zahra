import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Menu } from "logic/models";
import FoodMenuSection from "./FoodMenuSection";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0, 10),
    backgroundColor: "#6b826e",
    color: "white",
    padding: theme.spacing(1, 4),
    borderRadius: 5,
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(0, 1),
      padding: theme.spacing(1, 2),
    },
  },
}));

interface Props {
  menu: Menu;
  className?: string;
}

function FoodMenu(props: Props): JSX.Element {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, props.className)}>
      {props.menu.sections.map((section) => (
        <FoodMenuSection key={section.translationID} section={section} />
      ))}
    </div>
  );
}

export default FoodMenu;
