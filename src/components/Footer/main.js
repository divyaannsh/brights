import React, { useState } from "react";
import WhiteLogo from "../Images/Bright-Airways-White.png";
import { Link } from "react-router-dom";
import * as Realm from "realm-web";

export default function Main() {
  const [email, setEmail] = useState("");

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const app = new Realm.App({ id: "application-0-rpwpphv" });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      const mongodb = app.currentUser.mongoClient("mongodb-atlas");
      const collection = mongodb.db("forms").collection("subscribe");

      const existingEmail = await collection.findOne({ email });
      if (existingEmail) {
        alert("Email Already Subscribed!");
      } else {
        await collection.insertOne({ email });
        alert("Subscription successful!");
      }
      setEmail("");
    } catch (err) {
      console.error("Failed to subscribe", err);
      alert("Subscription failed!");
    }
  };

  return (
    <>
      <footer id="colophon" className="site-footer footer-primary">
        <div className="top-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <aside className="widget widget_text">
                  <h3 className="widget-title">Bright Consulting Services</h3>
                  <div className="textwidget widget-text">
                    We are dedicated to providing transformative and enriching
                    travel experiences that allow you to explore new
                    destinations, immerse yourself in diverse cultures, and
                    discover breathtaking landscapes.
                  </div>
                  {/* <div className="award-img">
                    <a href="/">
                      <img src="assets/images/logo6.png" alt="" />
                    </a>
                    <a href="/">
                      <img src="assets/images/logo2.png" alt="" />
                    </a>
                  </div> */}
                </aside>
              </div>
              <div className="col-lg-3 col-md-6">
                <aside className="widget widget_text">
                  <h3 className="widget-title">Quick Links</h3>
                  <div className="textwidget widget-text">
                    <ul>
                      <li>
                        <Link to="/" onClick={ScrollToTop}>
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link to="about" onClick={ScrollToTop}>
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link to="contact" onClick={ScrollToTop}>
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link to="career" onClick={ScrollToTop}>
                          Carrer
                        </Link>
                      </li>
                      <li>
                        <Link to="services" onClick={ScrollToTop}>
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link to="blogs" onClick={ScrollToTop}>
                          Blogs
                        </Link>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
              <div className="col-lg-3 col-md-6">
                <aside className="widget widget_recent_post">
                  <h3 className="widget-title">Contact Details</h3>
                  <ul>
                    <li>
                      <i className="fas fa-phone-alt"></i> 0120-460-5747
                    </li>
                    <li>
                      <a
                        href="mailto:info@brightairways.in"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fas fa-envelope"></i>{" "}
                        info@brightairways.in
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt"></i> 10A, IOC Colony,
                      Sector 10, Gurgaon 122001
                    </li>
                  </ul>
                </aside>
              </div>
              <div className="col-lg-3 col-md-6">
                <aside className="widget widget_newslatter">
                  <h3 className="widget-title">SUBSCRIBE US</h3>
                  <div className="widget-text">
                    for more info and latest updates
                  </div>
                  <form className="newslatter-form" onSubmit={handleSubmit}>
                    <input
                      type="email"
                      name="s"
                      placeholder="Your Email.."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <input type="submit" name="s" value="SUBSCRIBE NOW" />
                  </form>
                </aside>
              </div>
            </div>
          </div>
        </div>
        <div className="buttom-footer">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <Link to="/caution" onClick={ScrollToTop}>
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="/terms-and-conditions" onClick={ScrollToTop}>
                        Term & Condition
                      </Link>
                    </li>
                    <li>
                      <Link to="/faq" onClick={ScrollToTop}>
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 text-center">
                <div className="footer-logo">
                  <Link to="/" onClick={ScrollToTop}>
                    <img src={WhiteLogo} alt="" height={110} width={110} />
                  </Link>
                </div>
              </div>
              <div className="col-md-5">
                <div className="copy-right text-right">
                  Copyright © 2024 Bright Airways. All rights Reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
