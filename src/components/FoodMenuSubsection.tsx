import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MenuSubsection } from "logic/models";
import { FormattedMessage } from "react-intl";
import FoodMenuDish from "./FoodMenuDish";

const useStyles = makeStyles((theme) => ({
  root: {},
  name: {
    fontSize: 24,
    fontStyle: "italic",
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
    },
  },
}));

interface Props {
  subsection: MenuSubsection;
}

function FoodMenuSubsection(props: Props): JSX.Element {
  const classes = useStyles();
  const name = props.subsection.translationID ? <FormattedMessage id={props.subsection.translationID} /> : undefined;
  return (
    <div className={classes.root}>
      <div className={classes.name}>{name}</div>
      {props.subsection.dishes.map((dish) => (
        <FoodMenuDish key={dish.nameTranslationID} dish={dish} />
      ))}
    </div>
  );
}

export default FoodMenuSubsection;
