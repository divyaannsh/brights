import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "../../Navbar/main";
import Banner from "./Banner";
import Footer from "../../Footer/main";
import { domesticPackages } from "./domesticPackagesData";
import emailjs from "@emailjs/browser";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function DomesticPackageDetail() {
  const { id } = useParams();
  const [packageData, setPackageData] = useState(null);
  const sliderRef = useRef(null);

  // Form State
  const [formData, setFormData] = useState({
    date: "",
    name: "",
    email: "",
    contactNumber: "",
    adults: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const data = domesticPackages.find((pkg) => pkg.id === id);
    if (data) {
      setPackageData(data);
    }
    window.scrollTo(0, 0);
  }, [id]);

  if (!packageData) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // fade: true, // Use fade if 'swipe' feel isn't strictly horizontal slide, but user asked for swipe.
    // Default slide is swipe-like.
  };

  const handleThumbnailClick = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Use existing Env vars
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID_FOR_PACKAGES;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    // Map form data to template params
    // Note: Adjust these keys if your specific EmailJS template expects different ones.
    // Using generic keys commonly used.
    const templateParams = {
      name: formData.name,
      email: formData.email,
      contact_number: formData.contactNumber,
      message: `Booking Inquiry for: ${packageData.name}\nDate: ${formData.date}\nAdults: ${formData.adults}`,
      applied_for: `Domestic Package: ${packageData.name}`, // Reusing 'applied_for' from job form if it helps content context
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Your booking inquiry has been sent successfully!");
        setFormData({
          date: "",
          name: "",
          email: "",
          contactNumber: "",
          adults: "",
        });
      })
      .catch((err) => {
        console.log("FAILED...", err);
        alert("Failed to send inquiry. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const hasImages = packageData.images && packageData.images.length > 0;
  // Filter only images that are URLs (strings starting with http/https) 
  // We assume local imports (like Andaman, Goa etc) are ultimately resolved to paths but checking for 'http' is a safe way to distinguish external URLs if that is the intent.
  // Actually, local imports might be paths string like "/static/media/...". 
  // If the user wants to EXCLUDE the ones from "Images folder" (which correspond to the primary "image" property usually), we can just filter for http.

  let validImages = [];
  if (hasImages) {
    validImages = packageData.images.filter(img => typeof img === 'string' && img.startsWith('http'));
  }

  // If we found URL images, use them. Otherwise fallback to the main single image or all images if no URLs found but list exists.
  const mainImages = validImages.length > 0 ? validImages : (hasImages ? packageData.images : [packageData.image]);

  return (
    <>
      <Helmet>
        <title>{packageData.name} | Bright Airways</title>
      </Helmet>
      {/* <Navbar /> */}
      <Banner title={packageData.name} />

      <div className="container mt-5 mb-5">
        {/* Header Section */}
        <div className="bg-light p-4 rounded mb-4 shadow-sm">
          <h1
            className="text-primary fw-bold"
            style={{
              fontSize: "2.2rem",
            }}
          >
            {packageData.name}
          </h1>
          <h3 className="">₹ {packageData.price} /Per Person</h3>
          <p className="text-muted">
            <i className="fa-solid fa-location-dot me-2 mr-1"></i>
            {packageData.location}
          </p>
        </div>

        <div className="row">
          {/* Left Side: Details */}
          <div className="col-lg-8">
            {/* Main Image Slider */}
            <div className="mb-3">
              <Slider {...sliderSettings} ref={sliderRef}>
                {mainImages.map((img, idx) => (
                  <div key={idx} className="outline-none">
                    <img
                      src={img}
                      alt={`${packageData.name}-${idx}`}
                      className="img-fluid w-100"
                      style={{ maxHeight: "500px", objectFit: "cover" }} // outline-none to remove slick focus ring
                    />
                  </div>
                ))}
              </Slider>
            </div>

            {/* Thumbnails */}
            {mainImages.length > 1 && (
              <div className="row mb-4">
                {mainImages.map((img, idx) => (
                  <div className="col-3" key={idx}>
                    <img
                      src={img}
                      alt={`thumb-${idx}`}
                      className="img-fluid pointer"
                      style={{
                        cursor: "pointer",
                        height: "100px",
                        width: "100%",
                        objectFit: "cover",
                      }}
                      onClick={() => handleThumbnailClick(idx)}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Package Summary */}
            {packageData.summary && (
              <div
                className="mb-4 bg-white p-4 rounded "
                style={{ boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
              >
                <h4 className="text-warning fw-bold">Package Summary</h4>
                <p style={{ textAlign: "justify" }}>{packageData.summary}</p>
              </div>
            )}

            {/* Inclusions */}
            {packageData.inclusions && packageData.inclusions.length > 0 && (
              <div
                className="mb-4 bg-white p-4 rounded"
                style={{ boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
              >
                <h4 className="text-warning fw-bold">Inclusions</h4>
                <ul className="list-group list-group-flush">
                  {packageData.inclusions.map((item, idx) => (
                    <li key={idx} className="list-group-item">
                      <i className="fa-solid fa-check text-success mr-2"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Itinerary */}
            {packageData.itinerary && packageData.itinerary.length > 0 && (
              <div
                className="mb-4 bg-white p-4 rounded"
                style={{ boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
              >
                <h4 className="text-warning fw-bold">Itinerary</h4>
                {packageData.itinerary.map((day, idx) => (
                  <div key={idx} className="mb-2">
                    <h5 className="fw-bold" style={{ fontSize: "0.95rem" }}>
                      {day.day}: {day.title}
                    </h5>
                    <p style={{ textAlign: "justify" }}>{day.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Exclusions */}
            {packageData.exclusion && packageData.exclusion.length > 0 && (
              <div
                className="mb-4 bg-white p-4 rounded"
                style={{ boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
              >
                <h4 className="text-warning fw-bold">Exclusion</h4>
                <ul className="list-group list-group-flush">
                  {packageData.exclusion.map((item, idx) => (
                    <li key={idx} className="list-group-item">
                      <i className="fa-solid fa-times text-danger mr-2"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Side: Booking Form */}
          <div className="col-lg-4">
            <div className="card shadow border-0 mb-4" style={{ zIndex: 1 }}>
              <div
                className="card-header text-white text-center pt-3"
                style={{ background: "#5096e0" }}
              >
                <h5 className="mb-1" style={{ color: "white" }}>
                  Talk to our Holiday Expert
                </h5>
                <h4 className="fw-bold mb-0" style={{ color: "white" }}>
                  <i className="fa-solid fa-phone me-2"></i>8860691383
                </h4>
                <div
                  className="mt-2 text-warning"
                  style={{ fontWeight: 700, fontSize: "1.2rem" }}
                >
                  ₹ {packageData.price} /Per Person
                </div>
              </div>
              <div className="card-body">
                <h5 className="text-center text-uppercase mb-2">
                  Customize and Book Now
                </h5>
                <p className="text-center small text-muted mb-3">
                  Enter your contact details and we will plan the best holiday
                  suiting all your requirements.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-bold">
                      Select Date <span className="text-danger">*</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      className="form-control"
                      required
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-bold">
                      Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter Your Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-bold">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter Your Email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-bold">
                      Contact No. <span className="text-danger">*</span>
                    </label>
                    <input
                      type="tel"
                      name="contactNumber"
                      className="form-control"
                      placeholder="Enter Your Contact No."
                      required
                      value={formData.contactNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-bold">
                      No. of Adults <span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      name="adults"
                      className="form-control"
                      placeholder="Enter No. of Adults"
                      required
                      min="1"
                      value={formData.adults}
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100 fw-bold py-2"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Book Now"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
