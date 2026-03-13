import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ColorLogo from "../Images/Bright-Airways-Color.png";
import WhiteLogo from "../Images/Bright-Airways-White.png";

export default function Main() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [username, setUsername] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUsername(token);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
    if (isMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUsername(null);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  return (
    <>
      <header
        id="masthead"
        className={`site-header header-primary ${isScrolled ? "scrolled" : ""}`}
      >
        <div className={`top-header ${isScrolled ? "d-none" : ""}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 d-none d-lg-block">
                <div className="header-contact-info">
                  <ul
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-once="true"
                  >
                    <li>
                      <div
                        href="/"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <i className="fas fa-phone-alt"></i> 0120-460-5747
                      </div>
                    </li>
                    <li>
                      <a
                        href="mailto:info@brightairways.in"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <i className="fas fa-envelope"></i>{" "}
                        info@brightairways.in, hr@brightairways.in
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 d-none d-lg-flex justify-content-lg-end">
                <div className="header-social social-links">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/brightairways"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "white" }}
                      >
                        <i className="fab fa-facebook-f" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://x.com/brightairways"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "white" }}
                      >
                        <i
                          className="fa-brands fa-x-twitter"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/brightairways/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "white" }}
                      >
                        <i className="fab fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/@brightairways"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "white" }}
                      >
                        <i className="fab fa-youtube" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* TOP ROW SECTION START */}
              <div className="header-social social-links d-lg-none">
                <ul className={`${isScrolled ? "d-none" : "d-flex"}`}>
                  <li>
                    <a
                      href="https://www.facebook.com/brightairways"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "white" }}
                    >
                      <i className="fab fa-facebook-f" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/brightairways"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "white" }}
                    >
                      <i
                        className="fa-brands fa-x-twitter"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/brightairways/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "white" }}
                    >
                      <i className="fab fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@brightairways"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "white" }}
                    >
                      <i className="fab fa-youtube" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {/* Temp Method */}
              </div>
              <div
                className={`header-social social-links d-lg-none ${
                  isScrolled ? "d-none" : "d-flex"
                }`}
              >
                <Link
                  to="/apply-for-job"
                  onClick={ScrollToTop}
                  className="button-primary small-button"
                  style={{ backgroundColor: "#EF2000", color: "white" }}
                >
                  APPLY FOR JOBS
                </Link>
                <div
                  href="/"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    marginLeft: "10px",
                  }}
                >
                  <i className="fas fa-phone-alt"></i> 0120-460-5747
                </div>
              </div>
              {/* TOP ROW SECTION END */}
            </div>
          </div>
        </div>
        <div className="bottom-header">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="site-identity">
              <h1 className="site-title">
                <Link to="/" onClick={ScrollToTop}>
                  <img
                    className="white-logo"
                    src={ColorLogo}
                    alt="logo"
                    height={110}
                    width={110}
                    data-aos="fade-up"
                    data-aos-delay="700"
                    data-aos-once="true"
                  />
                  <img
                    className="black-logo"
                    src={ColorLogo}
                    alt="logo"
                    height={110}
                    width={110}
                    data-aos="fade-up"
                    data-aos-delay="700"
                    data-aos-once="true"
                  />
                </Link>
              </h1>
            </div>

            {/* Toggle button for mobile screens */}
            <button
              className="d-lg-none navbar-toggler"
              onClick={toggleMobileMenu}
              style={{ background: "none", border: "none", color: "white" }}
            >
              <i className="fas fa-bars" style={{ fontSize: "1.5rem" }}></i>
            </button>

            <div
              className={`main-navigation ${
                isMobileMenuOpen ? "d-block" : "d-none"
              } d-lg-block`}
            >
              <nav
                id="navigation"
                className="navigation"
                data-aos="fade-up"
                data-aos-delay="850"
                data-aos-once="true"
              >
                <ul>
                  <li>
                    <Link to="/" onClick={ScrollToTop}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" onClick={ScrollToTop}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" onClick={ScrollToTop}>
                      Services
                    </Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="/" onClick={ScrollToTop}>
                      Tour Packages
                    </Link>
                    <ul>
                      <li>
                        <Link to="/domestic-packages" onClick={ScrollToTop}>
                          Domestic Packages
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/international-packages"
                          onClick={ScrollToTop}
                        >
                          International Packages
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/career" onClick={ScrollToTop}>
                      Career
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" onClick={ScrollToTop}>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div
              className="header-btn d-none d-lg-block"
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-once="true"
            >
              <Link
                to="/apply-for-job"
                onClick={ScrollToTop}
                className="button-primary"
                style={{ fontSize: "12px" }}
              >
                APPLY FOR JOBS
              </Link>
              {username ? (
                <div className="dropdown ml-3">
                  <span className="username">
                    {username} <i className="fas fa-caret-down"></i>
                  </span>
                  <div className="dropdown-content">
                    <button onClick={handleLogout} className="button-primary">
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <Link
                  to="/login"
                  onClick={ScrollToTop}
                  className="button-primary ml-2"
                  style={{
                    backgroundColor: "white",
                    color: "#0052b3",
                    fontSize: "12px",
                  }}
                >
                  LOGIN
                </Link>
              )}
            </div>
          </div>
        </div>
        <div
          className={`mobile-menu-container ${isMobileMenuOpen ? "open" : ""}`}
          style={{ backgroundColor: "white" }}
        >
          <button
            className="close-btn"
            onClick={toggleMobileMenu}
            style={{ background: "none", border: "none", color: "black" }}
          >
            <i className="fas fa-times" style={{ fontSize: "1.5rem" }}></i>
          </button>
          <div className="mobile-logo">
            <img src={ColorLogo} alt="logo" height={80} width={80} />
          </div>
          <nav className="mobile-navigation">
            <ul>
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    ScrollToTop();
                    handleLinkClick();
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => {
                    ScrollToTop();
                    handleLinkClick();
                  }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={() => {
                    ScrollToTop();
                    handleLinkClick();
                  }}
                >
                  Services
                </Link>
              </li>
              <li className="menu-item-has-children">
                <Link
                  to="/domestic-packages"
                  onClick={() => {
                    ScrollToTop();
                    handleLinkClick();
                  }}
                >
                  Domestic Packages
                </Link>
              </li>
              <li className="menu-item-has-children">
                <Link
                  to="/international-packages"
                  onClick={() => {
                    ScrollToTop();
                    handleLinkClick();
                  }}
                >
                  International Packages
                </Link>
              </li>
              <ul className={openDropdown === 2 ? "d-block" : "d-none"}>
                <li>
                  <Link
                    to="/domestic-packages"
                    onClick={() => {
                      ScrollToTop();
                      handleLinkClick();
                    }}
                  >
                    Domestic Packages
                  </Link>
                </li>
                <li>
                  <Link
                    to="/international-packages"
                    onClick={() => {
                      ScrollToTop();
                      handleLinkClick();
                    }}
                  >
                    International Packages
                  </Link>
                </li>
              </ul>
              <li>
                <Link
                  to="/career"
                  onClick={() => {
                    ScrollToTop();
                    handleLinkClick();
                  }}
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => {
                    ScrollToTop();
                    handleLinkClick();
                  }}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/apply-for-job"
                  onClick={() => {
                    ScrollToTop();
                    handleLinkClick();
                  }}
                  className="button-primary text-white"
                >
                  APPLY FOR JOBS
                </Link>
              </li>
              <li>
                {username ? (
                  <div className="dropdown">
                    <span className="username">
                      {username} <i className="fas fa-caret-down"></i>
                    </span>
                    <div className="">
                      <button
                        onClick={handleLogout}
                        className="button-primary btn-primary"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => {
                      ScrollToTop();
                      handleLinkClick();
                    }}
                    className="button-primary"
                    style={{ backgroundColor: "white", color: "#0052b3" }}
                  >
                    LOGIN
                  </Link>
                )}
              </li>
              <li className="d-lg-none">
                <div
                  href="/"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <i className="fas fa-phone-alt"></i> 0120-460-5747
                </div>
              </li>
            </ul>
          </nav>
        </div>
        {isMobileMenuOpen && (
          <div className="mobile-menu-overlay" onClick={toggleMobileMenu}></div>
        )}
        {isPopupVisible && (
          <div className="popup-overlay" onClick={togglePopup}>
            <div className="popup-content">
              <p>Dropdown content is not available when scrolled.</p>
              <button onClick={togglePopup} className="button-primary">
                Close
              </button>
            </div>
          </div>
        )}
      </header>
      <style jsx>{`
        .mobile-menu-container {
          position: fixed;
          top: 60px; /* Adjust this value based on the height of your header */
          right: 0;
          width: 250px;
          height: 100%;
          background: #0052b3;
          transform: translateX(100%);
          transition: transform 0.3s ease-in-out;
          z-index: 1001; /* Ensure mobile menu container is above other elements */
          padding-top: 20px;
          overflow-y: auto; /* Ensure scrolling within the mobile menu */
        }
        .mobile-menu-container.open {
          transform: translateX(0);
        }
        .mobile-navigation ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .mobile-navigation ul li {
          padding: 15px;
          border-bottom: 1px solid black;
        }
        .mobile-navigation ul li a {
          color: black;
          text-decoration: none;
        }
        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
        }
        .mobile-logo {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }
        .dropdown {
          position: relative;
          display: inline-block;
        }
        .dropdown:hover .dropdown-content {
          display: block;
        }
        .dropdown-content button {
          color: black;
          padding: 12px 16px;
          text-decoration: none;
          display: block;
          background: none;
          border: none;
          width: 100%;
          text-align: left;
        }
        .dropdown-content button:hover {
          background-color: #f1f1f1;
        }
        .username {
          font-size: 0.875rem;
          color: white;
          cursor: pointer;
        }
        .site-header {
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          transition: background 0.3s ease-in-out;
        }
        .site-header.scrolled {
          background: linear-gradient(
            to right,
            #add8e6,
            /* Light blue */ #0052b3
          ); /* Blue gradient */
          z-index: 1000; /* Ensure it is above other elements */
        }
        @media (max-width: 768px) {
          .site-header {
            padding: 10px 0;
          }
          .site-identity img {
            height: 80px;
            width: 80px;
          }
          .mobile-navigation ul li {
            padding: 10px;
          }
        }
        .close-dropdown-btn {
          background: none;
          border: none;
          color: black;
          font-size: 2rem;
          float: right;
          margin-right: 10px;
        }
        .close-dropdown-btn:hover {
          color: #f1f1f1;
        }
        .small-button {
          padding: 5px 10px;
          font-size: 0.875rem;
        }
      `}</style>
    </>
  );
}
