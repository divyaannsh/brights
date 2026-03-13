import React from "react";

export default function Gallery() {
  return (
    <>
      <section className="best-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="section-heading">
                <h5 className="dash-style">OUR TOUR GALLERY</h5>
                <h2>BEST TRAVELER'S SHARED PHOTOS</h2>
                <p>
                  Aperiam sociosqu urna praesent, tristique, corrupti
                  condimentum asperiores platea ipsum ad arcu. Nostrud. Esse?
                  Aut nostrum, ornare quas provident laoreet nesciunt odio
                  voluptates etiam, omnis.
                </p>
              </div>
              <figure className="gallery-img">
                <img src="assets/images/img12.jpg" alt="" />
              </figure>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-sm-6">
                  <figure className="gallery-img">
                    <img src="assets/images/img13.jpg" alt="" />
                  </figure>
                </div>
                <div className="col-sm-6">
                  <figure className="gallery-img">
                    <img src="assets/images/img14.jpg" alt="" />
                  </figure>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <figure className="gallery-img">
                    <img src="assets/images/img15.jpg" alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
