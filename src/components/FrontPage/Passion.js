import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";
import newBackgroundImage from "./Images/thumbnail.jpg";

export default function Passion() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="5CbyqNiP_ZI"
        onClose={() => setOpen(false)}
      />
      <section className="callback-section">
        <div className="container">
          <div className="row no-gutters align-items-center">
            <div
              className="col-lg-5"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div
                className="callback-img"
                style={{
                  backgroundImage: `url(${newBackgroundImage})`,
                }}
              >
                <div className="video-button">
                  <a id="video-container" onClick={() => setOpen(true)}>
                    <i className="fas fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-7"
              data-aos="fade-up"
              data-aos-delay="250"
              data-aos-once="true"
            >
              <div className="callback-inner">
                <div className="section-heading section-heading-white">
                  {/* <h5 className="dash-style">CALLBACK FOR MORE</h5> */}
                  <h2>Transform Your Passion into a Profession</h2>
                  <p>
                    At Bright Airways, we’re dedicated to shaping the future of
                    aviation by providing top-tier training programs and job
                    opportunities in the aviation industry. Our specialized
                    courses are designed to equip you with the essential skills
                    needed to succeed in various aviation roles, from Cabin Crew
                    and Ground Staff to Flight Attendants and Airport
                    Management.
                  </p>
                </div>
                <div className="callback-counter-wrap">
                  <div className="counter-item">
                    <div className="counter-icon">
                      <img src="assets/images/icon1.png" alt="" />
                    </div>
                    <div className="counter-content">
                      <span className="counter-no">
                        <span className="counter">500</span>K+
                      </span>
                      <span className="counter-text"> Satisfied Clients </span>
                    </div>
                  </div>
                  <div className="counter-item">
                    <div className="counter-icon">
                      <img src="assets/images/icon2.png" alt="" />
                    </div>
                    <div className="counter-content">
                      <span className="counter-no">
                        <span className="counter">250</span>K+
                      </span>
                      <span className="counter-text"> Satisfied Clients </span>
                    </div>
                  </div>
                  <div className="counter-item">
                    <div className="counter-icon">
                      <img src="assets/images/icon3.png" alt="" />
                    </div>
                    <div className="counter-content">
                      <span className="counter-no">
                        <span className="counter">15</span>K+
                      </span>
                      <span className="counter-text"> Satisfied Clients </span>
                    </div>
                  </div>
                  <div className="counter-item">
                    <div className="counter-icon">
                      <img src="assets/images/icon4.png" alt="" />
                    </div>
                    <div className="counter-content">
                      <span className="counter-no">
                        <span className="counter">10</span>K+
                      </span>
                      <span className="counter-text"> Satisfied Clients </span>
                    </div>
                  </div>
                </div>
                <div className="support-area">
                  <div className="support-icon">
                    <img src="assets/images/icon5.png" alt="" />
                  </div>
                  <div className="support-content">
                    {/* <h4>Our 24/7 Emergency Phone Services</h4> */}
                    <h3>
                      <a href="/">
                        0120-460-5747 <br />
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
