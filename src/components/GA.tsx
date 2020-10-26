import React from "react";
import { Helmet } from "react-helmet";

function GA(): JSX.Element {
  return (
    <Helmet>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-67194515-1"></script>
      <script>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-67194515-1');`}
      </script>
    </Helmet>
  );
}

export default GA;
