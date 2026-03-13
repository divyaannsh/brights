import React from "react";
import Img1 from "../../assets/images/featuredon1.jpg";
import Img2 from "../../assets/images/featuredon2.jpg";
import Img3 from "../../assets/images/featuredon3.jpg";
import Img4 from "../../assets/images/featuredon4.jpg";
import Img5 from "../../assets/images/featuredon5.jpg";
// import "./Featuredon.css"; // Import CSS file for custom styles

export default function Featuredon() {
  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-12">
            <h2
              className="text-center mb-5 pb-3"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
            >
              FEATURED ON
            </h2>
          </div>
        </div>
        <div className="row d-flex justify-content-between">
          <div className="col-4 col-md-2">
            <img
              src={Img1}
              alt="Featured 1"
              className="img-fluid custom-image"
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-once="true"
            />
          </div>
          <div className="col-4 col-md-2">
            <img
              src={Img2}
              alt="Featured 2"
              className="img-fluid custom-image"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="true"
            />
          </div>
          <div className="col-4 col-md-2">
            <img
              src={Img5}
              alt="Featured 5"
              className="img-fluid custom-image"
              data-aos="fade-up"
              data-aos-delay="250"
              data-aos-once="true"
            />
          </div>
          <div className="col-4 col-md-2 d-none d-md-block">
            <img
              src={Img4}
              alt="Featured 4"
              className="img-fluid custom-image"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once="true"
            />
          </div>
          <div className="col-4 col-md-2 d-none d-md-block">
            <img
              src={Img3}
              alt="Featured 3"
              className="img-fluid custom-image"
              data-aos="fade-up"
              data-aos-delay="350"
              data-aos-once="true"
            />
          </div>
        </div>
        {/* Center last two images on small screens with reduced spacing */}
        <div className="row d-flex justify-content-center d-md-none">
          <div className="col-4 mb-2">
            {" "}
            {/* Add margin-bottom to reduce spacing */}
            <img
              src={Img4}
              alt="Featured 4"
              className="img-fluid custom-image"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-once="true"
            />
          </div>
          <div className="col-4 mb-2">
            {" "}
            {/* Add margin-bottom to reduce spacing */}
            <img
              src={Img3}
              alt="Featured 3"
              className="img-fluid custom-image"
              data-aos="fade-up"
              data-aos-delay="450"
              data-aos-once="true"
            />
          </div>
        </div>
      </div>
    </>
  );
}
