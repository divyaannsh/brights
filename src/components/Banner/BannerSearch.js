import React from "react";
import { Link } from "react-router-dom";

export default function BannerSearch() {
  return (
    <>
      <div className="trip-search-section shape-search-section">
        {/* <div className="slider-shape"></div> */}
        <div className="container pt-5">
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
              <input
                className="input-date-picker"
                type="text"
                name="s"
                placeholder="Enter Number"
                autocomplete="off"
              />
            </div>
            <div className="input-group width-col-3">
              <Link to="/search">
                <label className="screen-reader-text"> Search </label>
                <input
                  type="submit"
                  name="travel-search"
                  value="START SEARCHING"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
