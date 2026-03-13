import React from "react";
import Banner from "./Banner";

import { Helmet } from "react-helmet";
import Form from "./Form";

export default function main() {
  return (
    <>
      <Helmet>
        <title>Apply For Job - Bright Airways</title>
        <meta name="description" content="Contact Us" />
      </Helmet>

      <Banner />
      <Form />
    </>
  );
}
