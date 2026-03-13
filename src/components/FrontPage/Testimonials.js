import React from "react";
import Img1 from "../../assets/images/testiM1.png";
import Img2 from "../../assets/images/testiF1.png";
import Img3 from "../../assets/images/testiM2.png";
import Img4 from "../../assets/images/testiM3.png";

export default function Testimonials() {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#eff3fb" }}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12 text-center pt-4">
              <h2 data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
                TESTIMONIAL
              </h2>
              <p data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
                What People Have Said About Our Service
              </p>
            </div>
          </div>
        </div>
        <div
          id="carouselExampleControls"
          className="carousel slide mb-5"
          data-ride="carousel"
        >
          <div className="carousel-inner pt-3 pb-3">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="testimonial-item text-center">
                      <figure className="testimonial-img">
                        <img src={Img1} alt="" />
                      </figure>
                      <div className="testimonial-content">
                        <p>
                          " Bright Air Ways helped me kickstart my dream career
                          as a cabin crew member. Their professional training
                          and support led to a successful placement with a top
                          airline. Highly recommend! "
                        </p>
                        <cite>Aryan Sharma</cite>
                        <div
                          className="testimonial-rating"
                          style={{ fontSize: "1.5rem", color: "gold" }}
                        >
                          {"★".repeat(5)}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="testimonial-item text-center">
                      <figure className="testimonial-img">
                        <img src={Img2} alt="" />
                      </figure>
                      <div className="testimonial-content">
                        <p>
                          " Thanks to Bright Air Ways, I landed my ideal cabin
                          crew job. Their team provided exceptional guidance
                          throughout the process, making my transition into the
                          aviation industry smooth and easy. "
                        </p>
                        <cite>Kavya Iyer</cite>
                        <div
                          className="testimonial-rating"
                          style={{ fontSize: "1.5rem", color: "gold" }}
                        >
                          {"★".repeat(5)}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="testimonial-item text-center">
                      <figure className="testimonial-img">
                        <img src={Img3} alt="" />
                      </figure>
                      <div className="testimonial-content">
                        <p>
                          " Bright Air Ways made my dream of becoming a cabin
                          crew member a reality. Their experienced trainers and
                          excellent job placement services are truly
                          outstanding. I’m proud to be part of this industry. "
                        </p>
                        <cite>Sameer Khan</cite>
                        <div
                          className="testimonial-rating"
                          style={{ fontSize: "1.5rem", color: "gold" }}
                        >
                          {"★".repeat(5)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="testimonial-item text-center">
                      <figure className="testimonial-img">
                        <img src={Img4} alt="" />
                      </figure>
                      <div className="testimonial-content">
                        <p>
                          " The comprehensive training and career placement
                          assistance from Bright Air Ways exceeded my
                          expectations. I’m now flying with a renowned airline,
                          and I couldn’t be more grateful for their support. "
                        </p>
                        <cite>Rahul Mehta</cite>
                        <div
                          className="testimonial-rating"
                          style={{ fontSize: "1.5rem", color: "gold" }}
                        >
                          {"★".repeat(5)}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Add more testimonials here if needed */}
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-info"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-info"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </>
  );
}
