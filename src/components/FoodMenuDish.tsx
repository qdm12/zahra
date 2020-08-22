import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MenuDish } from "logic/models";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    margin: theme.spacing(2, 0),
  },
  name: {
    fontSize: 21,
    fontWeight: "bold",
    "&::first-letter": {
      textTransform: "uppercase",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 13,
    },
  },
  description: {
    fontStyle: "italic",
    fontSize: 17,
    "&::first-letter": {
      textTransform: "uppercase",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
    },
  },
  numbers: {
    marginTop: theme.spacing(1),
    fontSize: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(0.3),
      fontSize: 12,
    },
  },
  quantity: {},
  price: {},
}));

interface Props {
  dish: MenuDish;
}

function FoodMenuDish(props: Props): JSX.Element {
  const classes = useStyles();
  const name = <FormattedMessage id={props.dish.nameTranslationID} />;
  const description = props.dish.descriptionTranslationID ? (
    <FormattedMessage id={props.dish.descriptionTranslationID} />
  ) : undefined;
  return (
    <div className={classes.root}>
      {name && <div className={classes.name}>{name}</div>}
      {description && <div className={classes.description}>{description}</div>}
      <div className={classes.numbers}>
        <div className={classes.quantity}>{props.dish.quantity}</div>
        <div className={classes.price}>{props.dish.price} lei</div>
      </div>
    </div>
  );
}

export default FoodMenuDish;
