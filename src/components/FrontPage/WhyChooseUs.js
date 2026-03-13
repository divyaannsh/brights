import React, { useState } from "react";
// import BookingImg from "../Images/instant-booking.png";
// import DealsImg from "../Images/unbeatable-deals.png";

export default function WhyChooseUs() {
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);
  return (
    <>
      <section className="activity-section">
        <div className="container">
          <div className="section-heading text-center">
            <div className="row">
              <div className="col-lg-12">
                <h2
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-once="true"
                >
                  Why Choose Bright Airways?
                </h2>
                {/* <p>
                  No matter what type of traveler you are, Bright Airways has a
                  package tailored to your interests. Start planning your next
                  adventure with us and discover the world through the
                  activities that you love.
                </p> */}
              </div>
            </div>
            <div className="row mt-5">
              <div className="card-group">
                <div
                  className="card"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-once="true"
                  style={{
                    transition: "transform 0.5s ease",
                    transform: hover ? "scale(1.1)" : "scale(1)",
                    zIndex: hover ? 10 : 1,
                    position: "relative",
                  }}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  {/* <img
                    src={BookingImg}
                    height={150}
                    width={150}
                    alt="Card image cap"
                    style={{ display: "block", margin: "0 auto" }}
                  /> */}
                  <div className="card-body">
                    <h5 className="card-title">Instant Booking</h5>
                    <p className="card-text" style={{ textAlign: "justify" }}>
                      Enjoy the convenience of instant online booking with
                      Bright Airways. Secure your flights quickly and
                      effortlessly, without any hassle or delay.
                    </p>
                    {/* <p className="card-text">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </p> */}
                  </div>
                </div>
                <div
                  className="card"
                  data-aos="fade-up"
                  data-aos-delay="250"
                  data-aos-once="true"
                  style={{
                    transition: "transform 0.5s ease",
                    transform: hover2 ? "scale(1.1)" : "scale(1)",
                    zIndex: hover2 ? 10 : 1,
                    position: "relative",
                  }}
                  onMouseEnter={() => setHover2(true)}
                  onMouseLeave={() => setHover2(false)}
                >
                  {/* <img
                    className="card-img-top"
                    src="..."
                    alt="Card image cap"
                  /> */}
                  <div className="card-body">
                    <h5 className="card-title">Unbeatable Deals</h5>
                    <p className="card-text" style={{ textAlign: "justify" }}>
                      Take advantage of our incredible deals and discounts on
                      both flight and hotel bookings, making air travel
                      affordable and accessible for everyone.
                    </p>
                    <p className="card-text">
                      {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                    </p>
                  </div>
                </div>
                <div
                  className="card"
                  data-aos="fade-up"
                  data-aos-delay="250"
                  data-aos-once="true"
                  style={{
                    transition: "transform 0.5s ease",
                    transform: hover3 ? "scale(1.1)" : "scale(1)",
                    zIndex: hover3 ? 10 : 1,
                    position: "relative",
                  }}
                  onMouseEnter={() => setHover3(true)}
                  onMouseLeave={() => setHover3(false)}
                >
                  {/* <img
                    className="card-img-top"
                    src="..."
                    alt="Card image cap"
                  /> */}
                  <div className="card-body">
                    <h5 className="card-title">24/7 Support</h5>
                    <p className="card-text" style={{ textAlign: "justify" }}>
                      We offer round-the-clock customer support to ensure you
                      receive timely assistance whenever you need it, enhancing
                      your overall travel experience.
                    </p>
                    <p className="card-text">
                      {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                    </p>
                  </div>
                </div>
                <div
                  className="card"
                  data-aos="fade-up"
                  data-aos-delay="250"
                  data-aos-once="true"
                  style={{
                    transition: "transform 0.5s ease",
                    transform: hover4 ? "scale(1.1)" : "scale(1)",
                    zIndex: hover4 ? 10 : 1,
                    position: "relative",
                  }}
                  onMouseEnter={() => setHover4(true)}
                  onMouseLeave={() => setHover4(false)}
                >
                  {/* <img
                    className="card-img-top"
                    src="..."
                    alt="Card image cap"
                  /> */}
                  <div className="card-body">
                    <h5 className="card-title">Career Opportunities</h5>
                    <p className="card-text" style={{ textAlign: "justify" }}>
                      Bright Airways isn’t just about travel; we’re about
                      growth. We offer a range of career opportunities across
                      the aviation and travel sectors, providing a supportive
                      environment where you can develop your skills and achieve
                      your professional goals.
                    </p>
                    <p className="card-text">
                      {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                    </p>
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
