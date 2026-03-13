import React from "react";
import "./card.css"; // Import the CSS file for styling

export default function card(props) {
  return (
    <>
      <div className="col-sm-3 mt-3">
        <div className="card shadow-sm" style={{ backgroundColor: "#E9E9EC" }}>
          <img
            src={props.img}
            alt="Services"
            className="card-img-center mt-3 zoom" // Add 'zoom' class for hover effect
            height={70}
            width={70}
          />
          <div className="card-body">
            <h5 className="card-title text-center">{props.heading}</h5>
          </div>
        </div>
      </div>
    </>
  );
}
