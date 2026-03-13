import React from "react";
import ABoutUsText from "./AboutUs";
// import Mission from "./Mission";
// import Vision from "./Vision";
// import Values from "./Values";
import Banner from "./Banner";
import Cards from "./Cards";
import { Helmet } from "react-helmet";
import BrandSlider from "../FrontPage/BrandSlider";
import FeaturedOn from "../FrontPage/Featuredon";
// import Subscribe from "./Subscribe";

export default function main() {
  return (
    <>
      <Helmet>
        <title>About Us - Bright Airways</title>
        <meta name="description" content="About Us" />
      </Helmet>
      {/* <div id="siteLoader" className="site-loader">
        <div className="preloader-content">
          <img src="assets/images/loader1.gif" alt="" />
        </div>
      </div> */}
      <div id="page" className="full-page">
        <main id="content" className="site-main">
          <Banner />
          <ABoutUsText />
          <Cards />
          <FeaturedOn />
          <h2 className="text-center mb-4 mt-4 pb-5">POWERED BY</h2>
          <BrandSlider />
          {/* <Mission /> */}
          {/* <Vision /> */}
          {/* <Values /> */}
        </main>
      </div>
    </>
  );
}
