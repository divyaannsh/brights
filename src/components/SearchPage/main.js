import React from "react";
import Card from "./card";
import Banner from "./Banner";
// import BannerSearch from "../Banner/BannerSearch";

export default function main() {
  return (
    <>
      {/* <h2>Search Page goes here...</h2> */}
      <Banner />
      {/* <BannerSearch /> */}
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="mt-4">
              <div className="filter-card">
                <div className="filter-header">
                  <h5>Filters</h5>
                  <a href="/">Clear All</a>
                </div>
                <p>Showing 180 Flights</p>
                <div className="divider"></div>
                <div className="filter-section">
                  <h6>Price Range</h6>
                  <div className="price-range-inputs">
                    <input type="text" value="5000" />
                    <span>-</span>
                    <input type="text" value="15000" />
                  </div>
                  <input
                    className="price-slider"
                    type="range"
                    min="5000"
                    max="15000"
                    value="10000"
                  />
                </div>
                <div className="filter-section">
                  <h6>Stops</h6>
                  <div className="checkbox-group">
                    <label>
                      <input type="checkbox" /> Non-Stop
                    </label>
                    <label>
                      <input type="checkbox" /> 1 Stop
                    </label>
                    <label>
                      <input type="checkbox" /> 2 Stop
                    </label>
                    <label>
                      <input type="checkbox" /> 3 Stop
                    </label>
                  </div>
                </div>
                <div className="filter-section">
                  <h6>
                    Preferred Airlines{" "}
                    <a href="/" style={{ fontSize: "0.9em" }}>
                      Reset
                    </a>
                  </h6>
                  <div className="preferred-airlines">
                    <div>
                      <input type="checkbox" />
                      {/* <img
                        src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-Hz5t6Kz5a3qQNXANtRQRHwHk.png?st=2024-09-27T05%3A17%3A08Z&se=2024-09-27T07%3A17%3A08Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-26T23%3A24%3A07Z&ske=2024-09-27T23%3A24%3A07Z&sks=b&skv=2024-08-04&sig=brV6MZLgj8HPjkMi0QVpVSy%2BuZRQ8SaHDxzk4dGsutk%3D"
                        alt="Air India logo"
                        width="20"
                        height="20"
                      /> */}
                      &nbsp;Air India
                    </div>
                    <div>₹ 8,316</div>
                  </div>
                  <div className="preferred-airlines">
                    <div>
                      <input type="checkbox" />
                      {/* <img
                        src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-Hz5t6Kz5a3qQNXANtRQRHwHk.png?st=2024-09-27T05%3A17%3A08Z&se=2024-09-27T07%3A17%3A08Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-26T23%3A24%3A07Z&ske=2024-09-27T23%3A24%3A07Z&sks=b&skv=2024-08-04&sig=brV6MZLgj8HPjkMi0QVpVSy%2BuZRQ8SaHDxzk4dGsutk%3D"
                        alt="Air India logo"
                        width="20"
                        height="20"
                      /> */}
                      &nbsp;Spice Jet
                    </div>
                    <div>₹ 8,930</div>
                  </div>
                  <div className="preferred-airlines">
                    <div>
                      <input type="checkbox" />
                      {/* <img
                        src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-Hz5t6Kz5a3qQNXANtRQRHwHk.png?st=2024-09-27T05%3A17%3A08Z&se=2024-09-27T07%3A17%3A08Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-26T23%3A24%3A07Z&ske=2024-09-27T23%3A24%3A07Z&sks=b&skv=2024-08-04&sig=brV6MZLgj8HPjkMi0QVpVSy%2BuZRQ8SaHDxzk4dGsutk%3D"
                        alt="Air India logo"
                        width="20"
                        height="20"
                      /> */}
                      &nbsp;Vistara
                    </div>
                    <div>₹ 8,930</div>
                  </div>
                  <div className="preferred-airlines">
                    <div>
                      <input type="checkbox" />
                      {/* <img
                        src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-Hz5t6Kz5a3qQNXANtRQRHwHk.png?st=2024-09-27T05%3A17%3A08Z&se=2024-09-27T07%3A17%3A08Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-26T23%3A24%3A07Z&ske=2024-09-27T23%3A24%3A07Z&sks=b&skv=2024-08-04&sig=brV6MZLgj8HPjkMi0QVpVSy%2BuZRQ8SaHDxzk4dGsutk%3D"
                        alt="Air India logo"
                        width="20"
                        height="20"
                      /> */}
                      &nbsp;Akasa Air
                    </div>
                    <div>₹ 9,420</div>
                  </div>
                  <div className="preferred-airlines">
                    <div>
                      <input type="checkbox" />
                      {/* <img
                        src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-Hz5t6Kz5a3qQNXANtRQRHwHk.png?st=2024-09-27T05%3A17%3A08Z&se=2024-09-27T07%3A17%3A08Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-26T23%3A24%3A07Z&ske=2024-09-27T23%3A24%3A07Z&sks=b&skv=2024-08-04&sig=brV6MZLgj8HPjkMi0QVpVSy%2BuZRQ8SaHDxzk4dGsutk%3D"
                        alt="Air India logo"
                        width="20"
                        height="20"
                      /> */}
                      &nbsp;Indigo
                    </div>
                    <div>₹ 8,316</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <Card
              date="26 June 2024"
              price="8,316"
              seats="3"
              flight="Air India"
              flightNo="AI 439"
              start="New Delhi"
              end="Hyderabad"
              startTime="22:40"
              endTime="01:25"
              time="02 h 45 m"
              plusDays=""
            />
            <Card
              date="26 June 2024"
              price="8,930"
              seats="2"
              flight="SpiceJet"
              flightNo="SG 161"
              start="New Delhi"
              end="Hyderabad"
              startTime="14:45"
              endTime="16:50"
              time="02 h 05 m"
              plusDays=""
            />
            <Card
              date="26 June 2024"
              price="9,450"
              seats="0"
              flight="Vistara"
              flightNo="UK 829"
              start="New Delhi"
              end="Hyderabad"
              startTime="17:00"
              endTime="19:10"
              time="02 h 10 m"
              plusDays=""
            />
            <Card
              date="26 June 2024"
              price="9,420"
              seats="2"
              flight="Akasa Air"
              flightNo="6E 6612"
              start="New Delhi"
              end="Hyderabad"
              startTime="07:40"
              endTime="12:20"
              time="02 h 50 m"
              plusDays=""
            />
            <Card
              date="26 June 2024"
              price="8,316"
              seats="1"
              flight="Indigo"
              flightNo="6E 6612"
              start="New Delhi"
              end="Hyderabad"
              startTime="07:40"
              endTime="12:20"
              time="01 h 50 m"
              plusDays=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
