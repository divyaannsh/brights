import React from "react";

export default function Contact() {
  return (
    <>
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="contact-img"
                style={{ backgroundImage: "url(assets/images/img24.jpg)" }}
              ></div>
            </div>
            <div className="col-lg-8">
              <div className="contact-details-wrap">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="contact-details">
                      <div className="contact-icon">
                        <img src="assets/images/icon12.png" alt="" />
                      </div>
                      <ul>
                        <li>
                          <a href="/">support@gmail.com</a>
                        </li>
                        <li>
                          <a href="/">info@domain.com</a>
                        </li>
                        <li>
                          <a href="/">name@company.com</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="contact-details">
                      <div className="contact-icon">
                        <img src="assets/images/icon13.png" alt="" />
                      </div>
                      <ul>
                        <li>
                          <a href="/">+132 (599) 254 669</a>
                        </li>
                        <li>
                          <a href="/">+123 (669) 255 587</a>
                        </li>
                        <li>
                          <a href="/">+01 (977) 2599 12</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="contact-details">
                      <div className="contact-icon">
                        <img src="assets/images/icon14.png" alt="" />
                      </div>
                      <ul>
                        <li>3146 Koontz, California</li>
                        <li>Quze.24 Second floor</li>
                        <li>36 Street, Melbourne</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-btn-wrap">
                <h3>LET'S JOIN US FOR MORE UPDATE !!</h3>
                <a href="/" className="button-primary">
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
