import React from "react";
import AboutImg from "../Images/about-page-image.jpg";

export default function AboutUs() {
  return (
    <>
      <div className="container mt-4">
        <div className="row mt-2 mb-5 pb-2">
          <div className="col-md-12">
            <h2 className="text-center">OUR JOURNEY</h2>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-12 shadow-lg rounded">
            <div className="row">
              <div className="col-md-6 d-flex align-items-center justify-content-center">
                <img src={AboutImg} className="img-fluid" alt="Our Journey" />
              </div>
              <div className="col-md-6">
                <h3 className="mt-4">Bright Airways</h3>
                <p className="text-justify mt-4 mb-4">
                  At Bright Airways, we are more than just an airline—we are a
                  gateway to the world, committed to providing exceptional
                  travel experiences and opportunities for career growth in the
                  aviation sector. Whether you're a frequent flyer looking for
                  seamless, affordable travel or an aspiring aviation
                  professional seeking expert training, Bright Airways is
                  dedicated to delivering excellence in everything we do. Our
                  focus is on creating meaningful connections—between people,
                  places, and dreams. With a commitment to safety, innovation,
                  and superior customer service, we aim to make every journey
                  with us memorable and every opportunity for learning
                  impactful.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </>
  );
}
