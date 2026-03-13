import React from "react";
import Banner from "./Banner";
import BrandSlider from "../FrontPage/BrandSlider";
import Card from "./card";
import Img1 from "../../assets/images/services/1.png";
import Img2 from "../../assets/images/services/2.png";
import Img3 from "../../assets/images/services/3.png";
import Img4 from "../../assets/images/services/4.png";
import Img5 from "../../assets/images/services/5.png";
import Img6 from "../../assets/images/services/6.png";
import Img7 from "../../assets/images/services/7.png";
import Img8 from "../../assets/images/services/8.png";

import Points from "./points";

export default function main() {
  return (
    <>
      <Banner />
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-12">
            <h2 className="text-center mb-5">Our Services</h2>
          </div>
          <div className="col-md-12">
            <p>
              At Bright Airways, we are dedicated to providing a comprehensive
              range of services tailored to meet your travel and aviation needs.
              Our flight booking services ensure a smooth and hassle-free
              experience, offering the best deals and timely updates. With our
              expertly curated tour and package bookings, we help you explore
              top destinations worldwide, creating unforgettable travel
              experiences. We also offer extensive job opportunities in the
              aviation industry, connecting you with roles such as Cabin Crew,
              Ground Staff, and more. Our specialized training and guidance
              programs, including diplomas in Aviation Management and Cabin
              Crew, are designed to equip aspiring professionals with the skills
              and knowledge required for successful careers. Additionally, we
              provide focused exam preparation for Junior Associate roles,
              ensuring you are well-prepared to achieve your career goals. At
              Bright Airways, we believe in creating transformative travel
              experiences that not only take you to new destinations but also
              leave lasting memories and broaden your horizons.
            </p>
          </div>
        </div>
        <Points />
        <div className="row">
          <Card img={Img1} heading="Largest Inventory" />
          <Card img={Img2} heading="Competitive Prices" />
          <Card img={Img3} heading="Seamless Booking" />
          <Card img={Img4} heading="24x7 Support" />
          <Card img={Img5} heading="Expert Guidance" />
          <Card img={Img6} heading="Curated Holidays" />
          <Card img={Img7} heading="Guaranteed Satisfaction" />
          <Card img={Img8} heading="Best Deals" />
        </div>
      </div>
      <h2 className="text-center mt-5 pb-4">POWERED BY</h2>
      <BrandSlider />
    </>
  );
}
