import React from "react";
import "./Cards.css"; // Import the CSS file

export default function Cards() {
  return (
    <>
      <div className="container mb-5">
        <div className="card-deck">
          <div className="card zoom">
            <div className="card-body">
              <h3 className="card-title text-center">
                <i className="fas fa-map-marker-alt" /> <br /> Address
              </h3>
              <p className="card-text text-center">
                10A, IOC Colony, Sector 10, Gurgaon 122001
              </p>
            </div>
          </div>
          <div className="card zoom">
            <div className="card-body">
              <h3 className="card-title text-center">
                <i className="fas fa-envelope" /> <br /> Email
              </h3>
              <p className="card-text text-center">
                hr@brightairways.in, info@brightairways.in
              </p>
            </div>
          </div>
          <div className="card zoom">
            <div className="card-body">
              <h3 className="card-title text-center">
                <i className="fas fa-phone" /> <br /> Contact Details
              </h3>
              <p className="card-text text-center">0120-460-5747</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
