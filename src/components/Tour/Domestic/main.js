import React from "react";
import Navbar from "../../Navbar/main";
import Banner from "./Banner";
import { Helmet } from "react-helmet";
import { domesticPackages } from "./domesticPackagesData";
import Card from "./Card";

export default function main() {
  return (
    <>
      <Helmet>
        <title>Domestic Packages | Bright Airways</title>
        <meta name="description" content="Bright Airways" />
      </Helmet>
      {/* <Navbar /> */}
      <Banner />
      <h3 className="mt-4 mb-4 text-center" style={{ fontSize: "35px" }}>
        Explore Domestic Holidays Packages
      </h3>
      <div
        className="container mb-5 d-flex align-items-center"
        style={{
          border: "1px solid black",
          background: "linear-gradient(to right, white, lightblue)",
        }}
      >
        <div className="row w-100">
          <div className="col-md-12 text-center mt-3">
            <h3>
              Choose a Package Duration:
              <select className="ml-2">
                <option value="3">3 Days</option>
                <option value="5">5 Days</option>
                <option value="7">7 Days</option>
              </select>
            </h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex mb-4">
          {domesticPackages.map((pkg) => (
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
