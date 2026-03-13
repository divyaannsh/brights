import React from "react";
import { Link } from "react-router-dom";

export default function BannerSearch() {
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div
        className="trip-search-section shape-search-section"
        data-aos="fade-up"
        // data-aos-delay="500"
        data-aos-once="true"
      >
        <div className="slider-shape"></div>
        <div className="container">
          <div className="trip-search-inner white-bg d-flex">
            <div className="input-group">
              <label> From* </label>
              <input
                type="text"
                list="fromopts"
                name="s"
                placeholder="Enter Destination"
              />
            </div>
            <datalist id="fromopts">
              <option value="&#9992; New Delhi, India" />
              <option value="&#9992; Mumbai, India" />
              <option value="&#9992; Goa, India" />
              <option value="&#9992; Bengaluru, India" />
              <option value="&#9992; Chennai, India" />
              <option value="&#9992; kolkata, India" />
            </datalist>
            <div className="input-group">
              <label> To* </label>
              <input
                type="text"
                list="toopts"
                name="s"
                placeholder="No.of People"
              />
            </div>
            <datalist id="toopts">
              <option value="&#9992; New Delhi, India" />
              <option value="&#9992; Mumbai, India" />
              <option value="&#9992; Goa, India" />
              <option value="&#9992; Bengaluru, India" />
              <option value="&#9992; Chennai, India" />
              <option value="&#9992; kolkata, India" />
            </datalist>
            <div className="input-group width-col-3">
              <label> Journey Date* </label>
              {/* <i className="far fa-calendar"></i> */}
              <input
                className="input-date-picker"
                type="date"
                name="s"
                placeholder="MM / DD / YY"
                autocomplete="off"
                // readonly="readonly"
              />
            </div>
            <div className="input-group width-col-3">
              <label> Number of Travellers* </label>
              {/* <i className="far fa-calendar"></i> */}
              <input
                className="input-date-picker"
                type="text"
                name="s"
                placeholder="Enter Number"
                autocomplete="off"
                // readonly="readonly"
              />
            </div>
            <div className="input-group width-col-3">
              <Link to="/search" onClick={ScrollToTop}>
                <label className="screen-reader-text"> Search </label>
                <input
                  type="submit"
                  name="travel-search"
                  value="START SEARCHING"
                />
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse,
              repellendus!
            </div>
            <div className="col-md-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              corporis.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
