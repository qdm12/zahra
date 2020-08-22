import React from "react";
import { Helmet } from "react-helmet";

function JsonLD(): JSX.Element {
  return (
    <Helmet>
      <script type="application/ld+json">
        {`
      {
        "@context": "http://schema.org",
        "@type": "Organization",
        "url": "https://zahrarestaurant.com",
        "logo": "https://zahrarestaurant/logo192.png",
        "name": "Zahra restaurant",
        "acceptsReservations": "Yes",
        "menu": "https://zahrarestaurant.com",
        "servesCuisine": "Arabic",
        "priceRange": "$$",
        "telephone": "+40748518994",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "RO",
          "addressLocality": "Romania",
          "postalCode": "077190",
          "streetAddress": "Strada Erou Iancu Nicolae 67A"
        }
      }
      `}
      </script>
    </Helmet>
  );
}

export default JsonLD;
