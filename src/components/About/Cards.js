import React from "react";

export default function Cards() {
  return (
    <>
      <div
        className="container-fluid pt-5 pb-3 mb-5"
        style={{ backgroundColor: "#101F46" }}
      >
        <div className="container mb-5">
          <div className="card-deck">
            <div className="card">
              <div className="card-body">
                <h4
                  className="card-title text-center"
                  style={{ color: "#F56960" }}
                >
                  Our Mission
                </h4>
                <p className="card-text" style={{ textAlign: "justify" }}>
                  Our mission is to revolutionize air travel by offering
                  top-tier services, career development opportunities, and
                  unforgettable travel experiences. We strive to make air travel
                  accessible, affordable, and enjoyable for every customer while
                  empowering individuals to pursue fulfilling careers in the
                  aviation industry through our comprehensive training programs.
                </p>
                {/* <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p> */}
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h4
                  className="card-title text-center"
                  style={{ color: "#F56960" }}
                >
                  Our Vision
                </h4>
                <p className="card-text" style={{ textAlign: "justify" }}>
                  Our vision is to be the most trusted and innovative airline,
                  known not only for our superior travel services but also as a
                  leader in fostering talent within the aviation sector. We aim
                  to connect the world, enrich lives, and contribute to the
                  global community by creating a seamless, comfortable, and
                  efficient travel experience.
                </p>
                {/* <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p> */}
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h4
                  className="card-title text-center"
                  style={{ color: "#F56960" }}
                >
                  Our Values
                </h4>
                <p className="card-text" style={{ textAlign: "justify" }}>
                  At Bright Airways, we are committed to providing exceptional,
                  customer-focused service, with safety as our top priority. We
                  operate with integrity and transparency, building trust
                  through honest communication. Our dedication to excellence
                  drives us to constantly improve and deliver the best travel
                  experiences. We foster a culture of inclusivity and respect,
                  ensuring a positive environment for both our passengers and
                  employees. These values define who we are and guide everything
                  we do.
                </p>
                {/* <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
