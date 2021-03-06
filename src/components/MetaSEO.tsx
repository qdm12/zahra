import React from "react";
import { Helmet } from "react-helmet";

function MetaSEO(): JSX.Element {
  return (
    <Helmet>
      <meta name="description" content="Zahra restaurant" />
      <meta
        name="keywords"
        content="Zahra restaurant, Arabic restaurant, food, restaurant, Bucharest, Pipera, Middle eastern, lebanese cuisine, food delivery Pipera, takeaway Pipera"
      />
    </Helmet>
  );
}

export default MetaSEO;
