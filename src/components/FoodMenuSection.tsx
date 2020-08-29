import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MenuSection } from "logic/models";
import { FormattedMessage } from "react-intl";
import FoodMenuSubsection from "./FoodMenuSubsection";
import colors from "colors";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 3,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: colors.menuText,
    margin: theme.spacing(3, 0),
    padding: theme.spacing(1, 2),
    transition: "all 1s ease",
  },
  name: {
    fontSize: 32,
    fontStyle: "italic",
    margin: theme.spacing(2, 0, 1, 0),
    [theme.breakpoints.down("md")]: {
      fontSize: 25,
    },
  },
}));

interface Props {
  section: MenuSection;
}

function FoodMenuSection(props: Props): JSX.Element {
  const classes = useStyles();
  const name = <FormattedMessage id={props.section.translationID} />;
  return (
    <div className={classes.root}>
      <div className={classes.name}>{name}</div>
      {props.section.subsections.map((subsection) => (
        <FoodMenuSubsection key={subsection.translationID} subsection={subsection} />
      ))}
    </div>
  );
}

export default FoodMenuSection;
