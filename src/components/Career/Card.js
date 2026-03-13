import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const points = [
    props.point1,
    props.point2,
    props.point3,
    props.point4,
    props.point5,
    props.point6,
    props.point7,
    props.point8,
  ].filter((point) => point);

  return (
    <>
      <div className="container-fluid">
        <div className="card mb-3 shadow-sm mt-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={props.img}
                className="img-fluid rounded-start"
                alt="..."
                style={{ height: "300px", width: "400px", objectFit: "cover" }}
              />
              <div className="row">
                <div className="col-md-12 mt-3 text-center">
                  <Link to="/apply-for-job" onClick={ScrollToTop}>
                    <button className="btn btn-danger btn-lg">Apply Now</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title">{props.heading}</h3>
                <p className="card-text">{props.aboutJob}</p>
                <h4>Key Points</h4>
                <div className="row">
                  {points.map((point, index) => (
                    <div className="col-md-6 m-0 p-0" key={index}>
                      <ul>
                        <li>{point}</li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
