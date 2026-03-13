import React from "react";
import Img from "../../assets/images/services/point-img.png";

export default function points() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-4 mt-4">
          <h3>Flight Booking</h3>
          <p>
            Enjoy hassle-free flight booking with our user-friendly platform,
            ensuring you get the best deals and smooth travel experiences.
          </p>
          <h3>Tour and Package Bookings</h3>
          <p>
            Explore the world with our carefully curated travel packages,
            offering unique experiences and unforgettable memories.
          </p>
        </div>
        <div className="col-md-4 mt-4 text-center">
          <img src={Img} alt="Services" className="img-fluid larger-image" />
        </div>
        <div className="col-md-4 mt-4">
          <h3>Job Opportunities in Aviation</h3>
          <p>
            Kickstart your aviation career with Bright Airways. We provide
            opportunities in various roles such as Cabin Crew, Ground Staff, and
            more.
          </p>
          <h3>Training and Guidance</h3>
          <p>
            Our expert-led training programs prepare you for successful careers
            in aviation, offering diplomas in key areas like Aviation Management
            and Cabin Crew.
          </p>
        </div>
      </div>
    </div>
  );
}

// Add the following CSS to your stylesheet
// .larger-image {
//   max-width: 120%; // Adjust the percentage as needed
// }
