import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function main() {
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Helmet>
        <title>404 Not Found - Bright Airways</title>
        <meta name="description" content="Not Found Page" />
      </Helmet>
      <div className="container-fluid bg-dark pt-5 pb-5">
        <div className="row pt-5 pb-3"></div>
      </div>
      <div
        className="container-fluid text-white"
        style={{ backgroundColor: "#383838" }}
      >
        <div className="container pt-5 text-center">
          <div className="row mt-5 pt-5">
            <div className="col-md-12">
              <div className="error-template">
                <h1 className="text-white">Oops!</h1>
                <h2 className="text-white">404 NOT FOUND</h2>
                <div className="error-details">
                  Sorry, an error has occured, Requested page not found!
                </div>
                <div className="error-actions mt-2 mb-4">
                  <Link
                    to="/"
                    className="btn btn-primary btn-lg"
                    onClick={ScrollToTop}
                  >
                    <span className="glyphicon glyphicon-home"></span>
                    Take Me Home{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
