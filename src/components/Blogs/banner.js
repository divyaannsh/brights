import React from "react";

export default function Banner(props) {
  return (
    <>
      <section className="home-slider-section">
        <div className="home-slider">
          <div className="home-banner-items">
            <img className="full-banner-image" src={props.img} alt="" />
            <div className="banner-content-wrap">
              <div className="container">
                <div className="banner-content text-center">
                  <h4
                    className="banner-title mt-5"
                    style={{ fontSize: "40px" }}
                  >
                    {props.title}
                  </h4>
                  {/* <p>
                    Immerse yourself in the serene landscapes, lush forests, and
                    breathtaking vistas, and rediscover the peace that nature
                    offers.
                  </p> */}
                </div>
              </div>
            </div>
            <div className="overlay"></div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .full-banner-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
          filter: brightness(0.7); /* Reduce brightness */
        }
        .home-banner-items {
          position: relative;
          width: 100%;
          height: 70vh; /* Change height to 70% of the screen height */
        }
      `}</style>
    </>
  );
}
