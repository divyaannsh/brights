import React from "react";

export default function Card(props) {
  return (
    <div>
      <div className="container">
        <div className="flight-card">
          <div className="row">
            <div className="col-md-6">
              <span className="departure">Departure</span>
              <div className="mt-2">{props.date}</div>
            </div>
            <div className="col-md-6 text-end price-container">
              <div className="price">₹ {props.price}</div>
              <div className="seats-left">{props.seats} seats left</div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-2 flight-info">
              {/* <img
                alt="Air India logo"
                height="50"
                src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-YEYWBUTzoVfdKidjaBnKBnjO.png?st=2024-09-26T05%3A40%3A37Z&amp;se=2024-09-26T07%3A40%3A37Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-09-25T23%3A15%3A55Z&amp;ske=2024-09-26T23%3A15%3A55Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=xzUeRXV9pbkeKEEcIR78MMJgai9Ba8TWnBle8K7jPhg%3D"
                width="50"
              /> */}
              <div>
                <div>
                  <b>{props.flight}</b>
                </div>
                <div>{props.flightNo}</div>
              </div>
            </div>
            <div className="col-md-2 text-center">
              <div className="time">{props.startTime}</div>
              <div>
                <b>{props.start}</b>
              </div>
            </div>
            <div className="col-md-3 flight-details">
              <div className="duration">{props.time}</div>
              <div>
                <i className="fas fa-plane"></i>
              </div>
              {/* <div>1 stop via Hyderabad</div> */}
            </div>
            <div className="col-md-2 text-center">
              <div className="time">
                {props.endTime}
                <span className="text-danger">&nbsp;{props.plusDays}</span>
              </div>
              <div>
                <b>{props.end}</b>
              </div>
            </div>
            <div className="col-md-3 text-end price-container">
              <a className="book-now" href="/">
                BOOK NOW
              </a>
              <a className="flight-details-link" href="/">
                Flight Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
