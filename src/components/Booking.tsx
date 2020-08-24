import React, { FormEvent, useState, ChangeEvent } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { FormattedMessage, useIntl } from "react-intl";
import submitToGoogle from "logic/booking";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
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
  label: {
    marginLeft: 3,
    fontSize: 16,
    fontStyle: "italic",
  },
  input: {
    width: 200,
    margin: theme.spacing(0.5, 0, 2, 0),
    padding: theme.spacing(1),
    fontSize: 15,
    fontWeight: "bold",
    borderRadius: 3,
    border: "1px solid green",
    outline: "none",
    transition: "all 1s ease",
    "&:hover": {
      borderColor: "aqua",
    },
    "&:focus": {
      borderColor: "aqua",
    },
  },
  inputTime: {
    maxWidth: 150,
  },
  inputNumber: {
    maxWidth: 70,
  },
  additionalInfo: {
    width: 300,
  },
  submit: {
    marginTop: theme.spacing(1),
    width: 100,
    fontSize: 15,
    fontWeight: "bold",
    padding: theme.spacing(1),
    color: "white",
    backgroundColor: "green",
    borderRadius: 5,
    border: "2px solid green",
  },
}));

function isEmailValid(email: string): boolean {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
} // TODO validate email with that

interface Props {
  className?: string;
  setError: (s: string) => void;
  clearError: () => void;
  setSuccess: (translationID: string) => void;
  language: string;
}

function Booking(props: Props): JSX.Element {
  const today = new Date();
  const classes = useStyles();
  const { formatMessage } = useIntl();
  const [date, setDate] = useState<Date>(today);
  const [time, setTime] = useState<string>("19:00:00");
  const [numberOfGuests, setNumberOfGuests] = useState<number>(2);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [additionalInformation, setAdditionalInformation] = useState<string>("");

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => setDate(event.currentTarget.valueAsDate || today);
  const handleTimeChange = (event: ChangeEvent<HTMLInputElement>) => setTime(event.currentTarget.value);
  const handleNumberOfGuestsChange = (event: ChangeEvent<HTMLInputElement>) =>
    setNumberOfGuests(event.currentTarget.valueAsNumber);
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => setName(event.currentTarget.value);
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.currentTarget.value);
  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => setPhone(event.currentTarget.value);
  const handleAdditionalInformationChange = (event: ChangeEvent<HTMLInputElement>) =>
    setAdditionalInformation(event.currentTarget.value);
  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    try {
      await submitToGoogle(date, time, numberOfGuests, name, email, phone, additionalInformation, props.language);
      // TODO clear form values on success
    } catch (e) {
      let errorStr: any = e;
      if (e instanceof Error) {
        errorStr = e.toString().replace("Error: ", "");
      }
      const message = `${formatMessage({ id: "bookingFailed" })}. (${errorStr})`;
      props.setError(message);
      return;
    }
    props.clearError();
    const message = formatMessage({ id: "bookingSuccess" });
    props.setSuccess(message);
  };

  return (
    <form className={clsx(classes.root, props.className)} onSubmit={handleSubmit}>
      <div className={classes.title}>
        <FormattedMessage id="Booking" />
      </div>
      <label className={classes.label} htmlFor="date">
        <FormattedMessage id="Date" />*
      </label>
      <input
        className={clsx(classes.input, classes.inputTime)}
        type="date"
        id="date"
        value={date.toISOString().split("T")[0]}
        min={today.toISOString().split("T")[0]}
        required
        onChange={handleDateChange}
      />

      <label className={classes.label} htmlFor="time">
        <FormattedMessage id="Time" />*
      </label>
      <input
        className={clsx(classes.input, classes.inputTime)}
        type="time"
        id="time"
        required
        min="10:00:00"
        max="22:15:00"
        value={time}
        step="600"
        onChange={handleTimeChange}
      />

      <label className={classes.label} htmlFor="guests">
        <FormattedMessage id="NumberOfguests" />*
      </label>
      <input
        className={clsx(classes.input, classes.inputNumber)}
        type="number"
        max="100"
        min="1"
        value={numberOfGuests}
        id="guests"
        required
        onChange={handleNumberOfGuestsChange}
      />

      <label className={classes.label} htmlFor="name">
        <FormattedMessage id="Name" />*
      </label>
      <input
        className={classes.input}
        type="text"
        id="name"
        value={name}
        autoComplete="on"
        required
        onChange={handleNameChange}
      />

      <label className={classes.label} htmlFor="email">
        <FormattedMessage id="Email" />*
      </label>
      <input
        className={classes.input}
        type="email"
        id="email"
        value={email}
        autoComplete="on"
        required
        onChange={handleEmailChange}
      />

      <label className={classes.label} htmlFor="phone">
        <FormattedMessage id="Phone" />
      </label>
      <input
        className={classes.input}
        type="tel"
        id="phone"
        value={phone}
        maxLength={20}
        autoComplete="on"
        onChange={handlePhoneChange}
      />

      <label className={classes.label} htmlFor="extra">
        <FormattedMessage id="AdditionalInformation" />
      </label>
      <input
        className={clsx(classes.input, classes.additionalInfo)}
        type="text"
        id="extra"
        value={additionalInformation}
        autoComplete="on"
        onChange={handleAdditionalInformationChange}
      />
      <input className={classes.submit} type="submit" value="Submit" />
    </form>
  );
}

export default Booking;
