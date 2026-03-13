import React, { useState, useEffect } from "react";
import DestinationSection from "./Destination";
import Banner from "../Banner/FrontPageBanner";
import BannerSearch from "../Banner/BannerSearchBg";
import PopularPackages from "./PopularPackages";
import Passion from "./Passion";
import AdventureActivity from "./AdventureActivity";
import Subscribe from "./Subscribe";
import RecentPosts from "./RecentPosts";
import SliderBgImg from "../../assets/images/img23.jpg";
import Testimonials from "./Testimonials";
import WhyChooseUs from "./WhyChooseUs";
import Featuredon from "./Featuredon";
import Slider from "./BrandSlider";
// import Gallery from "./Gallery";
import { Helmet } from "react-helmet";
import * as Realm from "realm-web"; // Import Realm
import SearchComp from "./Search/main";

export default function Main() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const app = new Realm.App({ id: "application-0-rpwpphv" });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      const mongodb = app.currentUser.mongoClient("mongodb-atlas");
      const collection = mongodb.db("forms").collection("contact");
      await collection.insertOne({
        ...formData,
        createdAt: new Date(),
      });
      alert("Form submitted successfully!");
    } catch (err) {
      console.error("Failed to submit form:", err);
      alert("Failed to submit form. Please try again.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Bright Airways</title>
        <meta name="description" content="Bright Airways" />
      </Helmet>
      {/* <div id="siteLoader" className="site-loader">
        <div className="preloader-content">
          <img src="assets/images/loader1.gif" alt="" />
        </div>
      </div> */}
      <div id="page" className="full-page">
        <main id="content" className="site-main">
          <Banner />
          {/* <BannerSearch /> */}
          {/* <DestinationSection /> */}
          <SearchComp />
          <PopularPackages />
          <Passion />
          <WhyChooseUs />
          <AdventureActivity />
          <Subscribe />
          <RecentPosts />
          <Featuredon />
          <Testimonials />
          <Slider />
        </main>
        <a id="backTotop" href="/" className="to-top-icon">
          <i className="fas fa-chevron-up"></i>
        </a>
        <div className="header-search-form">
          <div className="container">
            <div className="header-search-container">
              <form className="search-form" role="search" method="get">
                <input type="text" name="s" placeholder="Enter your text..." />
              </form>
              <a href="/" className="search-close">
                <i className="fas fa-times"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
