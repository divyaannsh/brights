import React from "react";
import HolidayBG from "../Images/HolidayOfferBG.jpg";

export default function Subscribe() {
  return (
    <>
      <section
        className="subscribe-section"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-once="true"
        // style={{ backgroundImage: "url(assets/images/img16.jpg)" }}
        style={{ backgroundImage: `url(${HolidayBG})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="section-heading section-heading-white">
                <h5
                  className="dash-style"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-once="true"
                >
                  HOLIDAY PACKAGE OFFER
                </h5>
                <h2
                  data-aos="fade-up"
                  data-aos-delay="150"
                  data-aos-once="true"
                >
                  HOLIDAY SPECIAL 15% OFF !
                </h2>
                <h4
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-once="true"
                >
                  Sign up now to recieve hot special offers and information
                  about the best tour packages, updates and discounts !!
                </h4>
                <div className="newsletter-form">
                  <form
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-once="true"
                  >
                    <input
                      type="email"
                      name="s"
                      placeholder="Your Email Address"
                    />
                    <input type="submit" name="signup" value="SIGN UP NOW!" />
                  </form>
                </div>
                {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo. Eaque adipiscing, luctus eleifend temporibus
                      occaecat luctus eleifend tempo ribus.
                    </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
