import React from "react";
import Banner from "./Banner";
import BrandSlider from "../FrontPage/BrandSlider";
import Card from "./card";
import { Helmet } from "react-helmet";

export default function main() {
  return (
    <>
      <Helmet>
        <title>Caution - Bright Airways</title>
      </Helmet>
      <Banner />
      <div className="container">
        <h2>Caution</h2>
        <p>
          Bright Airways, one of India's fastest-growing job portals of India's
          aviation industry, is continuously in search of talent. However,
          please be cautioned that certain people claiming to represent Bright
          Airways - by misusing the brand name 'Bright Airways', and the names
          of our employees - are demanding money in exchange for interviews or
          jobs with Bright Airways. Bright Airways does not charge any money for
          interviews or recruitment. All communication related to offer letters
          will be sent from official Bright Airways email IDs only.
          (hr@brightairways.in)
        </p>
        <h2>Be mindful of</h2>
        <ul>
          <li>First of all, your documents should be complete.</li>
          <li>
            The selection of the candidate is done on the basis of his physical
            mental proficiency and on the basis of educational document
            qualification.
          </li>
          <li>
            Do ensure that the selection and offer-related communication comes
            only from the official Bright Airways email ID
            (hr@brightairways.in).
          </li>
        </ul>
        <h2>Be Alert to notice fake appointment letters:</h2>
        <ul>
          <li>Does not have an authentic signature.</li>
          <li>Has fudged Bright Airways logo and pictures.</li>
        </ul>
        <p>
          For Bright Airways’s official job postings and information on hiring
          events, visit{" "}
          <a href="https://www.brightairways.in/#/career">
            https://www.brightairways.in/#/career
          </a>{" "}
          and explore 'Jobs at Bright Airways'.
        </p>
      </div>
    </>
  );
}
