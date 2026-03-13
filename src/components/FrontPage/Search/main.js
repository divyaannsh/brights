import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Flights from "./Flights";
import Hotels from "./Hotels";
import Cars from "./Cars";
import Bus from "./Bus";
import Cruise from "./Cruise";
import Travel from "./Travel";
import "./main.css"; // Import the CSS file for animations

import FlightImg from "./Images/flights.png";
import BusImg from "./Images/bus.png";
import CarsImg from "./Images/cars.png";
import CruiseImg from "./Images/cruise.png";
import HotelImg from "./Images/hotels.png";
import TravelImg from "./Images/travel.png";

// Define the components for each option
const OptionComponents = [
  () => (
    <div>
      <Flights />
    </div>
  ),
  () => (
    <div>
      <Hotels />
    </div>
  ),
  () => (
    <div>
      <Cars />
    </div>
  ),
  () => (
    <div>
      <Bus />
    </div>
  ),
  () => (
    <div>
      <Cruise />
    </div>
  ),
  () => (
    <div>
      <Travel />
    </div>
  ),
];

const options = [
  { name: "Flights", icon: FlightImg },
  { name: "Hotels", icon: HotelImg },
  { name: "Cars", icon: CarsImg },
  { name: "Bus", icon: BusImg },
  { name: "Cruise", icon: CruiseImg },
  { name: "Travel Insurance", icon: TravelImg },
];

export default function Main() {
  const [activeButton, setActiveButton] = useState(0);

  const handleClick = (index) => {
    setActiveButton(index);
  };

  const ActiveComponent = OptionComponents[activeButton];

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {options.map((option, index) => (
            <span
              key={index}
              className={`text-option mx-3 my-1 ${
                activeButton === index
                  ? "text-primary border-bottom border-primary"
                  : ""
              }`}
              style={{
                cursor: "pointer",
                // fontWeight: "bold",
                fontSize: "1.2rem",
                borderBottomWidth: activeButton === index ? "5px" : "1px", // Thicker underline
              }}
              onClick={() => handleClick(index)}
            >
              <img
                src={option.icon}
                alt={option.name}
                style={{ width: "40px", marginRight: "8px" }} // Increased size
              />
              {option.name}
            </span>
          ))}
        </div>
        <CSSTransition
          in={true}
          appear={true}
          timeout={300}
          classNames="fade"
          key={activeButton}
        >
          <div className="mt-3">
            <ActiveComponent />
          </div>
        </CSSTransition>
      </div>
    </>
  );
}
