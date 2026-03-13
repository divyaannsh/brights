import React from "react";
import FrontPageBanner from "./Banner";
import ContactForm from "./ContactForm";
import Cards from "./Cards";
import { Helmet } from "react-helmet";

export default function main() {
  return (
    <>
      <Helmet>
        <title>Contact Us - Bright Airways</title>
        <meta name="description" content="Contact Us" />
      </Helmet>
      <FrontPageBanner />
      <ContactForm />
      <Cards />
    </>
  );
}
