import React from "react";
import PhiPhiIsland from "../Images/PhiPhiIsland.jpg";
import Maldives from "../Images/maldives.jpg";
import Bali from "../Images/Bali.jpg";
import Dubai from "../Images/Dubai.jpg";

export default function Destination() {
  return (
    <>
      <section className="destination-section">
        <div className="container">
          <div className="section-heading">
            <div className="row align-items-end">
              <div
                className="col-lg-7"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-once="true"
              >
                <h5 className="dash-style">Discover Our Destinations</h5>
                <h2>TOP NOTCH DESTINATION</h2>
              </div>
              <div
                className="col-lg-5"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-once="true"
              >
                <div className="section-disc" style={{ textAlign: "justify" }}>
                  Whether you're dreaming of a serene beach escape, a vibrant
                  city break, or an adventurous mountain trek, Bright Airways
                  connects you to the world's most exciting destinations. Our
                  extensive route network spans across continents, offering you
                  a wide range of travel options tailored to your interests and
                  needs.
                </div>
              </div>
            </div>
          </div>
          <div className="destination-inner destination-three-column">
            <div className="row">
              <div className="col-lg-7">
                <div className="row">
                  <div className="col-sm-6">
                    <div
                      className="desti-item overlay-desti-item"
                      data-aos="fade-up"
                      data-aos-delay="300"
                      data-aos-once="true"
                    >
                      <figure className="desti-image">
                        <img src={PhiPhiIsland} alt="" />
                      </figure>
                      <div className="meta-cat bg-meta-cat">
                        <a href="/">Thailand</a>
                      </div>
                      <div className="desti-content">
                        <h3>
                          <a href="/">Phi Phi Island</a>
                        </h3>
                        <div className="rating-start" title="Rated 5 out of 4">
                          <span style={{ width: "53%" }}></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-once="true"
                  >
                    <div className="desti-item overlay-desti-item">
                      <figure className="desti-image">
                        <img src={Maldives} alt="" />
                      </figure>
                      <div className="meta-cat bg-meta-cat">
                        <a href="/">Maldives</a>
                      </div>
                      <div className="desti-content">
                        <h3>
                          <a href="/">Maldives</a>
                        </h3>
                        <div className="rating-start" title="Rated 5 out of 5">
                          <span style={{ width: "100%" }}></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-5"
                data-aos="fade-up"
                data-aos-delay="450"
                data-aos-once="true"
              >
                <div className="row">
                  <div className="col-md-6 col-xl-12">
                    <div className="desti-item overlay-desti-item">
                      <figure className="desti-image">
                        <img src={Bali} alt="" />
                      </figure>
                      <div className="meta-cat bg-meta-cat">
                        <a href="/">Indonesia</a>
                      </div>
                      <div className="desti-content">
                        <h3>
                          <a href="/">Hindara Gate (Bali)</a>
                        </h3>
                        <div className="rating-start" title="Rated 5 out of 5">
                          <span style={{ width: "100%" }}></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-xl-12"
                    data-aos="fade-up"
                    data-aos-delay="450"
                    data-aos-once="true"
                  >
                    <div className="desti-item overlay-desti-item">
                      <figure className="desti-image">
                        <img src={Dubai} alt="" />
                      </figure>
                      <div className="meta-cat bg-meta-cat">
                        <a href="/">UAE</a>
                      </div>
                      <div className="desti-content">
                        <h3>
                          <a href="/">Dubai</a>
                        </h3>
                        <div className="rating-start" title="Rated 5 out of 4">
                          <span style={{ width: "60%" }}></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="btn-wrap text-center">
              <a href="/" className="button-primary">
                MORE DESTINATION
              </a>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
