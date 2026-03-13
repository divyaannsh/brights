import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./YourStyles.css"; // Make sure to import your CSS file

export default function AdventureActivity() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="activity-section">
        <div className="container-fluid">
          <div className="section-heading text-center">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h5
                  className="dash-style"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-once="true"
                >
                  TRAVEL BY ACTIVITY
                </h5>
                <h2
                  data-aos="fade-up"
                  data-aos-delay="150"
                  data-aos-once="true"
                >
                  ADVENTURE & ACTIVITY
                </h2>
                <p data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
                  No matter what type of traveler you are, Bright Airways has a
                  package tailored to your interests. Start planning your next
                  adventure with us and discover the world through the
                  activities that you love.
                </p>
              </div>
            </div>
          </div>
          <Slider
            {...settings}
            className="activity-inner"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-once="true"
          >
            <div className="activity-item">
              <div
                className="activity-icon"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <a href="/">
                  <img
                    src="assets/images/icon6.png"
                    alt="Adventure"
                    style={{ width: "80px", height: "80px" }}
                  />
                </a>
                <p>Adventure</p>
              </div>
            </div>
            <div className="activity-item">
              <div
                className="activity-icon"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <a href="/">
                  <img
                    src="assets/images/icon10.png"
                    alt="Trekking"
                    style={{ width: "80px", height: "80px" }}
                  />
                </a>
                <p>Trekking</p>
              </div>
            </div>
            <div className="activity-item">
              <div
                className="activity-icon"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <a href="/">
                  <img
                    src="assets/images/icon9.png"
                    alt="Camp Fire"
                    style={{ width: "80px", height: "80px" }}
                  />
                </a>
                <p>Camp Fire</p>
              </div>
            </div>
            <div className="activity-item">
              <div
                className="activity-icon"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <a href="/">
                  <img
                    src="assets/images/icon8.png"
                    alt="Off Road"
                    style={{ width: "80px", height: "80px" }}
                  />
                </a>
                <p>Off Road</p>
              </div>
            </div>
            <div className="activity-item">
              <div
                className="activity-icon"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <a href="/">
                  <img
                    src="assets/images/icon7.png"
                    alt="Camping"
                    style={{ width: "80px", height: "80px" }}
                  />
                </a>
                <p>Camping</p>
              </div>
            </div>
            <div className="activity-item">
              <div
                className="activity-icon"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <a href="/">
                  <img
                    src="assets/images/icon11.png"
                    alt="Exploring"
                    style={{ width: "80px", height: "80px" }}
                  />
                </a>
                <p>Exploring</p>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}
