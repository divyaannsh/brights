import React from "react";

export default function Special() {
  return (
    <>
      <section className="special-section">
        <div className="container">
          <div className="section-heading text-center">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h5 className="dash-style">TRAVEL OFFER & DISCOUNT</h5>
                <h2>SPECIAL TRAVEL OFFER</h2>
                <p>
                  Mollit voluptatem perspiciatis convallis elementum corporis
                  quo veritatis aliquid blandit, blandit torquent, odit placeat.
                  Adipiscing repudiandae eius cursus? Nostrum magnis maxime
                  curae placeat.
                </p>
              </div>
            </div>
          </div>
          <div className="special-inner">
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="special-item">
                  <figure className="special-img">
                    <img src="assets/images/img9.jpg" alt="" />
                  </figure>
                  <div className="badge-dis">
                    <span>
                      <strong>20%</strong>
                      off
                    </span>
                  </div>
                  <div className="special-content">
                    <div className="meta-cat">
                      <a href="/">CANADA</a>
                    </div>
                    <h3>
                      <a href="/">Experience the natural beauty of glacier</a>
                    </h3>
                    <div className="package-price">
                      Price:
                      <del>$1500</del>
                      <ins>$1200</ins>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="special-item">
                  <figure className="special-img">
                    <img src="assets/images/img10.jpg" alt="" />
                  </figure>
                  <div className="badge-dis">
                    <span>
                      <strong>15%</strong>
                      off
                    </span>
                  </div>
                  <div className="special-content">
                    <div className="meta-cat">
                      <a href="/">NEW ZEALAND</a>
                    </div>
                    <h3>
                      <a href="/">Trekking to the mountain camp site</a>
                    </h3>
                    <div className="package-price">
                      Price:
                      <del>$1300</del>
                      <ins>$1105</ins>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="special-item">
                  <figure className="special-img">
                    <img src="assets/images/img11.jpg" alt="" />
                  </figure>
                  <div className="badge-dis">
                    <span>
                      <strong>15%</strong>
                      off
                    </span>
                  </div>
                  <div className="special-content">
                    <div className="meta-cat">
                      <a href="/">MALAYSIA</a>
                    </div>
                    <h3>
                      <a href="/">Sunset view of beautiful lakeside city</a>
                    </h3>
                    <div className="package-price">
                      Price:
                      <del>$1800</del>
                      <ins>$1476</ins>
                    </div>
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
