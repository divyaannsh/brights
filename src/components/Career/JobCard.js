import React from "react";
import { Link } from "react-router-dom";

export default function JobCard(props) {
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const {
    title,
    image,
    description,
    responsibilities = [],
    salary,
    qualification,
    totalVacancies,
    showApplyButton = true,
    applyButtonText = "Apply Now",
    applyButtonDisabled = false,
    index,
  } = props;

  // Determine if image should be on the right (even index) or left (odd index)
  // The reference provided has Content Left, Image Right. We will make this the default for even indexes (0, 2...)
  // and flip it for odd indexes.
  const isImageRight = index % 2 === 0;

  return (
    <div className="container-fluid">
      <div
        className="card mb-5 shadow-lg border-0 overflow-hidden p-3"
        style={{ borderRadius: "15px" }}
      >
        <div
          className={`row g-0 p-3 ${
            isImageRight
              ? "flex-column-reverse flex-md-row"
              : "flex-column-reverse flex-md-row-reverse"
          }`}
        >
          <div className="col-md-8">
            <div className="card-body pt-3 p-0 p-md-0">
              <h2
                className="text-primary"
                style={{
                  fontSize: "1.5rem",
                  lineHeight: "2.4rem",
                  fontWeight: "500",
                  marginBottom: "4px",
                }}
              >
                {title}
              </h2>
              <p
                className="card-text text-muted"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "1rem",
                  marginTop: "4px",
                  fontWeight: "400",
                  marginBottom: "15px",
                }}
              >
                {description}
              </p>

              {responsibilities.length > 0 && (
                <div className="mb-3">
                  <div className="row">
                    {responsibilities.map((responsibility, idx) => (
                      <div key={idx} className="col-12 col-md-6 ">
                        <div className="d-flex align-items-baseline">
                          <span className="me-2 text-primary flex-shrink-0 mr-1">
                            <i
                              aria-hidden="true"
                              className="fa fa-chevron-right"
                              style={{ fontSize: "0.7rem" }}
                            ></i>
                          </span>
                          <span
                            className="text-dark fw-medium"
                            style={{ fontSize: "14px", lineHeight: "24px" }}
                          >
                            {responsibility}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="table-responsive mb-3">
                <table className="table table-bordered w-100 table-sm mb-0">
                  <tbody style={{ fontSize: "0.9rem" }}>
                    <tr>
                      <th
                        className="bg-light fw-bold text-dark"
                        style={{ width: "30%" }}
                      >
                        Salary
                      </th>
                      <td className="text-dark">{salary}</td>
                    </tr>
                    <tr>
                      <th className="bg-light fw-bold text-dark">
                        Qualification
                      </th>
                      <td className="text-dark">{qualification}</td>
                    </tr>
                    <tr>
                      <th className="bg-light fw-bold text-dark">
                        Total Posts
                      </th>
                      <td className="text-dark">{totalVacancies}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {showApplyButton && (
                <div className="mt-2">
                  <Link to="/apply-for-job" onClick={ScrollToTop}>
                    <button
                      className="btn btn-primary px-4 py-2 fw-bold"
                      disabled={applyButtonDisabled}
                      style={{
                        borderRadius: "5px",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {applyButtonText}
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-4 p-0">
            <div className="h-100">
              <img
                src={image}
                className="img-fluid h-100 w-100 job-card-image"
                alt={title}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
