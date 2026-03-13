import React from "react";
// import LehImg from "../Images/Leh-Image.jpg";
// import GoaImg from "../Images/Goa-Image.jpg";
import Vietnam from "../Images/veitnam.png";
import Manali from "../Images/manali.png";
import AndImg from "../Images/Andaman-Image.jpg";

export default function PopularPackages() {
  return (
    <>
      <section className="package-section mt-5">
        <div className="container">
          <div className="section-heading text-center">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h5
                  className="dash-style"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-once="true"
                >
                  EXPLORE GREAT PLACES
                </h5>
                <h2
                  data-aos="fade-up"
                  data-aos-delay="150"
                  data-aos-once="true"
                >
                  POPULAR PACKAGES
                </h2>
                <p data-aos="fade-up" data-aos-delay="400" data-aos-once="true">
                  Explore the world with our most sought-after travel packages,
                  carefully curated to offer you the best experiences. These
                  popular itineraries are favorites among travelers for their
                  exceptional value, unique destinations, and unforgettable
                  adventures. Whether you're seeking relaxation, cultural
                  immersion, or thrilling activities, you'll find the perfect
                  getaway with Bright Airways.
                </p>
              </div>
            </div>
          </div>
          <div className="package-inner">
            <div className="row">
              <div
                className="col-lg-4 col-md-6 mb-3"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-once="true"
              >
                <div className="package-wrap d-flex flex-column shadow-lg">
                  <figure className="feature-image">
                    <a href="/">
                      <img src={Vietnam} alt="Vietnam" />
                    </a>
                  </figure>
                  <div className="package-price">
                    <h6>
                      <span>Rs. 77650</span> / per person
                    </h6>
                  </div>
                  <div className="package-content-wrap flex-grow-1">
                    <div className="package-content">
                      <h3 className="mt-3 text-center">
                        <a href="/">Vietnam Tour</a>
                      </h3>
                      <hr />
                      <div className="row">
                        <div className="col-3 text-center">
                          <i className="fa-solid fa-hotel"></i>
                          <p style={{ fontSize: "10px", fontWeight: "bold" }}>
                            Hotel
                          </p>
                        </div>
                        <div className="col-3 text-center">
                          <i className="fa-solid fa-binoculars"></i>
                          <p style={{ fontSize: "10px", fontWeight: "bold" }}>
                            Sightseeing
                          </p>
                        </div>
                        <div className="col-3 text-center">
                          <i className="fa-solid fa-car-side"></i>
                          <p style={{ fontSize: "10px", fontWeight: "bold" }}>
                            Transfer
                          </p>
                        </div>
                        <div className="col-3 text-center">
                          <i class="fa-solid fa-utensils"></i>
                          <p style={{ fontSize: "10px", fontWeight: "bold" }}>
                            Meal
                          </p>
                        </div>
                      </div>
                      <div className="row" style={{ textAlign: "center" }}>
                        <div className="col-md-12">
                          <i className="fa-solid fa-location-dot"></i>
                          <b> Thailand</b>
                        </div>
                      </div>
                      <div className="review-area">{/* Review area */}</div>
                      <p>
                        Discover the charm of Vietnam with our exclusive tour
                        packages, from the bustling streets of Hanoi to the
                        serene beauty of Halong Bay. Immerse yourself in rich
                        history.
                      </p>
                      <div
                        className="card"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          height: "100%",
                        }}
                      >
                        {/* Other card content here */}
                      </div>
                    </div>
                  </div>
                  <div
                    className="btn-wrap text-center pt-3 pb-3"
                    style={{
                      backgroundColor: "#ef2000",
                      marginTop: "auto",
                    }}
                  >
                    <a href="/" className="text-white">
                      Book Now <i className="fas fa-arrow-right text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 mb-3"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-once="true"
              >
                <div className="package-wrap d-flex flex-column shadow-lg">
                  <figure className="feature-image">
                    <a href="/">
                      <img src={Manali} alt="Manali" />
                    </a>
                  </figure>
                  <div className="package-price">
                    <h6>
                      <span>Rs. 12000 </span> / per person
                    </h6>
                  </div>
                  <div className="package-content-wrap flex-grow-1">
                    {/* <div className="package-meta text-center">
                      <ul>
                        <li>
                          <i className="far fa-clock"></i>
                          5D/4N
                        </li>
                        <li>
                          <i className="fas fa-user-friends"></i>
                          People: 8
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt"></i>
                          Canada
                        </li>
                      </ul>
                    </div> */}
                    <div className="package-content">
                      <h3 className="mt-3 text-center">
                        <a href="/">Manali Tour</a>
                      </h3>
                      <hr />
                      <div className="row">
                        <div className="col-3 text-center">
                          <i className="fa-solid fa-hotel"></i>
                          <p style={{ fontSize: "10px", fontWeight: "bold" }}>
                            Hotel
                          </p>
                        </div>
                        <div className="col-3 text-center">
                          <i className="fa-solid fa-binoculars"></i>
                          <p style={{ fontSize: "10px", fontWeight: "bold" }}>
                            Sightseeing
                          </p>
                        </div>
                        <div className="col-3 text-center">
                          <i className="fa-solid fa-car-side"></i>
                          <p style={{ fontSize: "10px", fontWeight: "bold" }}>
                            Transfer
                          </p>
                        </div>
                        <div className="col-3 text-center">
                          <i class="fa-solid fa-utensils"></i>
                          <p style={{ fontSize: "10px", fontWeight: "bold" }}>
                            Meal
                          </p>
                        </div>
                      </div>
                      <div className="row" style={{ textAlign: "center" }}>
                        <div className="col-md-12">
                          <i className="fa-solid fa-location-dot"></i>
                          <b> Uttarakhand, India</b>
                        </div>
                      </div>
                      <div className="review-area">
                        {/* <span className="review-text">(17 reviews)</span>
                        <div className="rating-start" title="Rated 5 out of 5">
                          <span style={{ width: "100%" }}></span>
                        </div> */}
                      </div>
                      <p>
                        Explore the scenic beauty of Manali, with its
                        snow-capped mountains, adventure activities, and vibrant
                        local culture, offering a perfect escape to the
                        Himalayas.
                      </p>
                      <div
                        className="card"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          height: "100%",
                        }}
                      >
                        {/* Other card content here */}
                      </div>
                    </div>
                  </div>
                  <div
                    className="btn-wrap text-center  pt-3 pb-3"
                    style={{
                      backgroundColor: "#ef2000",
                      marginTop: "auto",
                    }}
                  >
                    <a href="/" className="text-white">
                      Book Now <i className="fas fa-arrow-right text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 mb-3"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-once="true"
              >
                <div className="package-wrap d-flex flex-column shadow-lg">
                  <figure className="feature-image">
                    <a href="/">
                      <img src={AndImg} alt="" />
                    </a>
                  </figure>
                  <div className="package-price">
                    <h6>
                      <span>Rs. 80,999 </span> / per person
                    </h6>
                  </div>
                  <div className="package-content-wrap flex-grow-1">
                    {/* <div className="package-meta text-center">
                      <ul>
                        <li>
                          <i className="far fa-clock"></i>
                          6D/5N
                        </li>
                        <li>
                          <i className="fas fa-user-friends"></i>
                          People: 6
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt"></i>
                          Portugal
                        </li>
                      </ul>
                    </div> */}
                    <div className="package-content">
                      <h3 className="mt-3 text-center">
                        <a href="/">Andaman and Nicobar</a>
                      </h3>
                      <hr />
                      <div className="row">
                        <div className="col-3 text-center">
                          <i className="fa-solid fa-hotel"></i>
                          <p style={{ fontSize: "10px", fontWeight: "bold" }}>
                            Hotel
                          </p>
                        </div>
                        <div className="col-3 text-center">
                          <i className="fa-solid fa-binoculars"></i>
                          <p style={{ fontSize: "10px", fontWeight: "bold" }}>
                            Sightseeing
                          </p>
                        </div>
                        <div className="col-3 text-center">
                          <i className="fa-solid fa-car-side"></i>
                          <p style={{ fontSize: "10px", fontWeight: "bold" }}>
                            Transfer
                          </p>
                        </div>
                        <div className="col-3 text-center">
                          <i class="fa-solid fa-utensils"></i>
                          <p style={{ fontSize: "10px", fontWeight: "bold" }}>
                            Meal
                          </p>
                        </div>
                      </div>
                      <div className="row" style={{ textAlign: "center" }}>
                        <div className="col-md-12">
                          <i className="fa-solid fa-location-dot"></i>
                          <b> Andaman and Nicobar</b>
                        </div>
                      </div>
                      <div className="review-area">
                        {/* <span className="review-text">(22 reviews)</span>
                        <div className="rating-start" title="Rated 5 out of 5">
                          <span style={{ width: "80%" }}></span>
                        </div> */}
                      </div>
                      <p>
                        Enjoy a 7-night, 8-day tour of the Andaman Islands,
                        featuring untouched beaches, crystal-clear waters, and
                        abundant marine life. Whether you're seeking relaxation
                        or adventure, this trip is the ideal tropical escape.
                      </p>
                      <div
                        className="card"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          height: "100%",
                        }}
                      >
                        {/* Other card content here */}
                      </div>
                    </div>
                  </div>
                  <div
                    className="btn-wrap text-center pt-3 pb-3"
                    style={{
                      backgroundColor: "#ef2000",
                      marginTop: "auto",
                    }}
                  >
                    <a href="/" className="text-white">
                      Book Now <i className="fas fa-arrow-right text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="btn-wrap" style={{ textAlign: "center" }}>
              <a href="/" className="button-primary">
                VIEW ALL PACKAGES
              </a>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
