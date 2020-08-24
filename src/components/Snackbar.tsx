import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import Alert, { AlertProps } from "@material-ui/lab/Alert";

const useStyles = makeStyles(() => ({
  root: {},
}));

interface Props {
  open: boolean;
  message: string;
  onClose: () => void;
  severity: AlertProps["severity"];
}

function ErrorSnackbar(props: Props): JSX.Element {
  const classes = useStyles();
  return (
    <Snackbar className={classes.root} open={props.open} autoHideDuration={3000} onClose={props.onClose}>
      <Alert onClose={props.onClose} severity={props.severity} elevation={6} variant="filled">
        {props.message}
      </Alert>
    </Snackbar>
  );
}

export default ErrorSnackbar;
