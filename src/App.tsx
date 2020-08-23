import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import WelcomeScreen from "components/WelcomeScreen";
import IconZahraGreen from "components/IconZahraGreen";
import FoodMenu from "components/FoodMenu";
import { fetchYML, parseYMLData } from "logic/yml";
import { detectBrowserLanguage, getAllTranslations } from "logic/translations";
import { IntlProvider } from "react-intl";
import { Menu } from "logic/models";
import Snackbar from "components/Snackbar";
import Booking from "components/Booking";
import GoogleMaps from "components/GoogleMaps";
import MetaSEO from "components/MetaSEO";
import JsonLD from "components/JsonLD";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#adb5aa",
    paddingBottom: theme.spacing(3),
  },
  icon: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    paddingTop: 30,
    fontSize: "20em",
    marginBottom: theme.spacing(6),
    transition: "all 1s ease",
    contrast: 1,
    "&:hover": {
      filter: "contrast(1.4)",
    },
  },
  menu: {},
  booking: {
    marginTop: theme.spacing(5),
  },
  maps: {
    marginTop: theme.spacing(5),
  },
}));

const language = detectBrowserLanguage();
const rootURL = window.location.href;

function App(): JSX.Element {
  const classes = useStyles();
  const errorRef = useRef("");
  const [showError, setShowError] = useState(false);
  // TODO initialize here as well
  const [translations, setTranslations] = useState<Record<string, Record<string, string>>>({});
  const [menu, setMenu] = useState<Menu>({ sections: [] });

  // Helper functions
  const setError = (s: string): void => {
    errorRef.current = s;
    setShowError(true);
  };
  const clearError = (): void => {
    errorRef.current = "";
    setShowError(false);
  };

  useEffect(() => {
    const asyncFunc = async (): Promise<void> => {
      try {
        const data = parseYMLData(await fetchYML(rootURL));
        setTranslations(getAllTranslations(data.translations));
        setMenu(data.menu);
      } catch (e) {
        setError(e.toString());
      }
    };
    asyncFunc();
  }, []);

  if (JSON.stringify(translations) === "{}") {
    return <WelcomeScreen />;
  }

  return (
    <IntlProvider locale={language} messages={translations[language]} defaultLocale="ro">
      <div className={classes.root}>
        <MetaSEO />
        <JsonLD />
        <WelcomeScreen />
        <IconZahraGreen className={classes.icon} />
        <FoodMenu menu={menu} className={classes.menu} />
        <Booking setError={setError} clearError={clearError} className={classes.booking} />
        <GoogleMaps className={classes.maps} />
        <Snackbar open={showError} message={errorRef.current} onClose={clearError} />
      </div>
    </IntlProvider>
  );
}

export default App;
