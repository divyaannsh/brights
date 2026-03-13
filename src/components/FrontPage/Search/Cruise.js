import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faShip,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Cruise() {
  const handleSearchClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="container shadow-lg pt-3 pb-3"
      style={{ borderRadius: "15px" }}
    >
      <div className="row align-items-center">
        <div className="col">
          <form>
            <div className="form-row">
              <div className="col-12 col-md">
                <div className="form-group">
                  <label htmlFor="formDestination">Destination</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                      </span>
                    </div>
                    <select className="form-control" id="formDestination">
                      <option>Mumbai</option>
                      <option>Delhi</option>
                      <option>Bangalore</option>
                      <option>Chennai</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md">
                <div className="form-group">
                  <label htmlFor="formCruiseLine">Cruise Line</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faShip} />
                      </span>
                    </div>
                    <select className="form-control" id="formCruiseLine">
                      <option>Carnival</option>
                      <option>Royal Caribbean</option>
                      <option>Norwegian</option>
                      <option>Princess</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md">
                <div className="form-group">
                  <label htmlFor="formJourneyDate">Journey Date</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                      </span>
                    </div>
                    <input
                      type="date"
                      className="form-control"
                      id="formJourneyDate"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-auto d-flex align-items-center mt-3 btn-lg">
                <Link to="/search">
                  <button
                    type="submit"
                    className="btn"
                    style={{ backgroundColor: "#ef2000", color: "white" }}
                    onClick={handleSearchClick}
                  >
                    Search
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
