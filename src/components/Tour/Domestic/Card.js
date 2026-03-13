import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Card.css";

function Card({ id, image, name, name2, about, time, price }) {
  return (
    <div
      className="card card-hover shadow-sm"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <img src={image} alt={name} className="card-img-top" />
      <div className="card-body" style={{ flexGrow: 1 }}>
        <h3 className="card-title text-center" style={{ color: "#005DB9" }}>
          {name}
        </h3>
        <div className="row">
          <div className="col-3 text-center">
            <i className="fa-solid fa-hotel"></i>
            <p style={{ fontSize: "9px", fontWeight: "bold" }}>Hotel</p>
          </div>
          <div className="col-3 text-center">
            <i className="fa-solid fa-binoculars"></i>
            <p style={{ fontSize: "9px", fontWeight: "bold" }}>Sightseeing</p>
          </div>
          <div className="col-3 text-center">
            <i className="fa-solid fa-car-side"></i>
            <p style={{ fontSize: "9px", fontWeight: "bold" }}>Transfer</p>
          </div>
          <div className="col-3 text-center">
            <i className="fa-solid fa-utensils"></i>
            <p style={{ fontSize: "9px", fontWeight: "bold" }}>Meal</p>
          </div>
        </div>
        <div className="row" style={{ textAlign: "center" }}>
          <div className="col-md-12 mb-2">
            <i className="fa-solid fa-location-dot"></i>
            <b> {name2}</b>
          </div>
        </div>
        <p className="card-text">{about}</p>
        <div className="row">
          <div
            className="col-md-6 mb-2 text-center"
            style={{ fontSize: "14px" }}
          >
            <i className="fa-regular fa-clock"></i>
            <b> {time}</b>
          </div>
          <div
            className="col-md-6 mb-2 text-center"
            style={{ color: "#005DB9", fontSize: "20px" }}
          >
            <i className="fa-solid fa-indian-rupee-sign"></i>
            <b> {price}</b>
          </div>
        </div>
      </div>
      <Link to={`/tour/domestic/${id}`} className="text-white">
        <div
          className="btn-wrap text-center pt-3 pb-3"
          style={{
            backgroundColor: "#ef2000",
            marginTop: "auto",
          }}
        >
          Book Now <i className="fas fa-arrow-right text-white"></i>
        </div>
      </Link>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  name2: PropTypes.string,
  time: PropTypes.string,
  price: PropTypes.string,
  about: PropTypes.string,
};

export default Card;
