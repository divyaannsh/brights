import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaneDeparture,
  faPlaneArrival,
  faCalendarAlt,
  faUser,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Flights() {
  const [tripType, setTripType] = useState("oneWay");

  const handleSearchClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="container shadow-lg pt-3 pb-3"
      style={{ borderRadius: "15px" }}
    >
      <div className="row mb-3">
        <div className="col">
          <button
            className={`btn btn-outline-pill rounded-pill ${
              tripType === "oneWay" ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setTripType("oneWay")}
          >
            One Way
          </button>
          <button
            className={`btn btn-outline-pill rounded-pill ml-2 ${
              tripType === "roundTrip" ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setTripType("roundTrip")}
          >
            Round Trip
          </button>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col">
          <form>
            <div className="form-row">
              <div className="col-12 col-md">
                <div className="form-group">
                  <label htmlFor="formFrom">From</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faPlaneDeparture} />
                      </span>
                    </div>
                    <select className="form-control" id="formFrom">
                      <option>Mumbai</option>
                      <option>Delhi</option>
                      <option>Bangalore</option>
                      <option>Chennai</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-auto d-flex align-items-center">
                <FontAwesomeIcon icon={faExchangeAlt} size="lg" />
              </div>
              <div className="col-12 col-md">
                <div className="form-group">
                  <label htmlFor="formTo">To</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faPlaneArrival} />
                      </span>
                    </div>
                    <select className="form-control" id="formTo">
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
              {tripType === "roundTrip" && (
                <div className="col-12 col-md">
                  <div className="form-group">
                    <label htmlFor="formReturnDate">Return Date</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <FontAwesomeIcon icon={faCalendarAlt} />
                        </span>
                      </div>
                      <input
                        type="date"
                        className="form-control"
                        id="formReturnDate"
                      />
                    </div>
                  </div>
                </div>
              )}
              <div className="col-12 col-md">
                <div className="form-group">
                  <label htmlFor="formTravelClass">Travel & Class</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                    </div>
                    <select className="form-control" id="formTravelClass">
                      <option>Economy</option>
                      <option>Business</option>
                      <option>First Class</option>
                    </select>
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
      <div className="row mt-3">
        <div className="col">
          <label className="text-muted">Select A Fare Type: </label>
          <div className="form-check form-check-inline col-12 col-md-auto">
            <input
              className="form-check-input ml-1"
              type="radio"
              name="fareType"
              id="regularFares"
              value="Regular Fares"
            />
            <label
              className="form-check-label"
              htmlFor="regularFares"
              style={{ fontSize: "20px" }}
            >
              Regular Fares
            </label>
          </div>
          <div className="form-check form-check-inline col-12 col-md-auto">
            <input
              className="form-check-input ml-1"
              type="radio"
              name="fareType"
              id="student"
              value="Student"
            />
            <label
              className="form-check-label"
              htmlFor="student"
              style={{ fontSize: "20px" }}
            >
              Student
            </label>
          </div>
          <div className="form-check form-check-inline col-12 col-md-auto">
            <input
              className="form-check-input ml-1"
              type="radio"
              name="fareType"
              id="defenceForces"
              value="Defence Forces"
            />
            <label
              className="form-check-label"
              htmlFor="defenceForces"
              style={{ fontSize: "20px" }}
            >
              Defence Forces
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
