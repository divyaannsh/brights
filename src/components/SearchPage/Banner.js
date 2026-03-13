import React from "react";
import HomeImage from "../../assets/images/Carrer.png";

export default function FrontPageBanner() {
  return (
    <>
      <section className="home-slider-section">
        <div className="home-slider">
          {/* <div className="home-banner-items">
                <div
                  className="banner-inner-wrap"
                  style={{
                    backgroundImage: "url(assets/images/slider-banner-1.jpg)",
                  }}
                ></div>
                <div className="banner-content-wrap">
                  <div className="container">
                    <div className="banner-content text-center">
                      <h2 className="banner-title">
                        TRAVELLING AROUND THE WORLD
                      </h2>
                      <p>
                        Taciti quasi, sagittis excepteur hymenaeos, id
                        temporibus hic proident ullam, eaque donec delectus
                        tempor consectetur nunc, purus congue? Rem volutpat
                        sodales! Mollit. Minus exercitationem wisi.
                      </p>
                      <a href="/" className="button-primary">
                        CONTINUE READING
                      </a>
                    </div>
                  </div>
                </div>
                <div className="overlay"></div>
              </div> */}
          <div className="home-banner-items">
            <img className="full-banner-image" src={HomeImage} alt="" />
            <div className="banner-content-wrap">
              <div className="container">
                <div className="banner-content text-center">
                  <h2 className="banner-title">SEARCH</h2>
                  {/* <p>
                    Immerse yourself in the serene landscapes, lush forests, and
                    breathtaking vistas, and rediscover the peace that nature
                    offers.
                  </p> */}
                  {/* <a href="/" className="button-primary">
                        CONTINUE READING
                      </a> */}
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
          height: 100vh;
        }
      `}</style>
    </>
  );
}
