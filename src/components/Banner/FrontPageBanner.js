import React from "react";
import HomeVid from "../../assets/images/Airway.mp4";

export default function FrontPageBanner() {
  return (
    <>
      <section
        className="home-slider-section"
        style={{ position: "relative", overflow: "hidden" }}
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-once="true"
      >
        <div className="home-slider">
          <div className="home-banner-items">
            {/* Video tag with inline styles to cover the section */}
            <video
              className="banner-inner-wrap"
              autoPlay
              loop
              muted
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                minWidth: "100%",
                minHeight: "100%",
                width: "100vw",
                height: "100vh",
                zIndex: 0, // Set lower z-index for the video
                transform: "translate(-50%, -50%)",
                objectFit: "cover",
              }}
            >
              <source src={HomeVid} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div
              className="banner-content-wrap"
              style={{ position: "relative", zIndex: 1 }}
            >
              <div
                className="container"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-once="true"
              >
                <div
                  className="banner-content text-center"
                  style={{ paddingBottom: "20px" }} // Adjust padding to reduce space
                >
                  <h2 className="banner-title">
                    EXPERIENCE THE NATURE'S BEAUTY
                  </h2>
                  <p>
                    Immerse yourself in the serene landscapes, lush forests, and
                    breathtaking vistas, and rediscover the peace that nature
                    offers.
                  </p>
                  {/* <a href="/" className="button-primary">
                        CONTINUE READING
                      </a> */}
                </div>
              </div>
            </div>
            <div
              className="overlay"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
              }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}
