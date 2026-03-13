import React from "react";
import Navbar from "../../Navbar/main";
import Banner from "./Banner";
import { Helmet } from "react-helmet";
import Card from "./Card";
import Bali from "./Images/bali.jpg";
import Dubai from "./Images/dubai.jpg";
import Japan from "./Images/japan.jpg";
import Laksh from "./Images/lakshwadeep.jpg";
import London from "./Images/london.jpg";
import medufushi from "./Images/medufushi-island.jpg";
import Nepal from "./Images/nepal.jpg";
import Singapore from "./Images/singapore.jpg";
import SriLanka from "./Images/sri-lanka.jpg";
import Switzerland from "./Images/switzerland.jpg";
import Thailand from "./Images/thailand.jpg";
import Vietnam from "./Images/vietnam.jpg";
import { internationalPackages } from "./internationalPackagesData";

export default function main() {
  return (
    <>
      <Helmet>
        <title>International Packages | Bright Airways</title>
        <meta name="description" content="Bright Airways" />
      </Helmet>
      <Navbar />
      <Banner />
      <h3 className="mt-4 mb-2 text-center" style={{ fontSize: "35px" }}>
        Explore International Holidays Packages
      </h3>
      <p className="text-center mb-5" style={{ fontSize: "22px" }}>
        India's leading tour and travels Booking website, Amazing packages with
        best price.
      </p>
      <div className="container">
        <div className="row d-flex mb-4">
          {internationalPackages.map((pkg) => (
            <div className="col-md-4 d-flex mb-4" key={pkg.id}>
              <Card
                id={pkg.id}
                image={pkg.image}
                name={pkg.name}
                name2={pkg.location}
                about={pkg.about}
                time={pkg.duration}
                price={pkg.price}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
