import React from "react";
import HomeImage from "../../assets/images/aboutusbg.png";
import BannerImg from "../../assets/images/services_banner.jpg";

export default function Banner() {
  return (
    <>
      <section className="home-slider-section">
        <div className="home-slider">
          <div className="home-banner-items">
            <img className="full-banner-image" src={BannerImg} alt="" />
            <div className="banner-content-wrap">
              <div className="container-fluid">
                <div className="banner-content">
                  <h2 className="banner-title text-left mt-5 pt-3">Caution</h2>
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
