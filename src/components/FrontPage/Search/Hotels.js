import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHotel,
  faCalendarAlt,
  faBed,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Hotels() {
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
                  <label htmlFor="formHotelCity">Enter Hotel/City Name</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faHotel} />
                      </span>
                    </div>
                    <select className="form-control" id="formHotelCity">
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
                  <label htmlFor="formCheckIn">Check In</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                      </span>
                    </div>
                    <input
                      type="date"
                      className="form-control"
                      id="formCheckIn"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md">
                <div className="form-group">
                  <label htmlFor="formCheckOut">Check Out</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                      </span>
                    </div>
                    <input
                      type="date"
                      className="form-control"
                      id="formCheckOut"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md">
                <div className="form-group">
                  <label htmlFor="formRooms">Number of Rooms</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faBed} />
                      </span>
                    </div>
                    <select className="form-control" id="formRooms">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
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
    </div>
  );
}
