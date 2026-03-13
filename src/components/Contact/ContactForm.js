import React, { useState } from "react";
import * as Realm from "realm-web"; // Import Realm
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID_CONTACT; // New env var for Contact
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      full_name: formData.fullName,
      phone_number: formData.phoneNumber,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      // Send Email
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Save to MongoDB (Realm)
      const app = new Realm.App({ id: "application-0-rpwpphv" });
      const credentials = Realm.Credentials.anonymous();
      const user = await app.logIn(credentials);
      const mongodb = app.currentUser.mongoClient("mongodb-atlas");
      const collection = mongodb.db("forms").collection("contact");
      await collection.insertOne({
        ...formData,
        createdAt: new Date(),
      });

      alert("Form submitted successfully!");
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("Failed to submit form:", err);
      alert("Failed to submit form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12">
            <h2 style={{ color: "#045CBD" }} className="mb-4">
              Let's Connect
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form className="mb-4" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">
                      Full Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      style={{
                        backgroundColor: "#F9F9F9",
                        borderRadius: "5px",
                      }}
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                    />
                    <div className="mb-3 mt-4">
                      <label htmlFor="phoneNumber" className="form-label">
                        Phone Number <span className="text-danger">*</span>
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="phoneNumber"
                        name="phoneNumber"
                        style={{
                          backgroundColor: "#F9F9F9",
                          borderRadius: "5px",
                        }}
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Your Phone Number"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      style={{
                        backgroundColor: "#F9F9F9",
                        borderRadius: "5px",
                      }}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your Email"
                      required
                    />
                  </div>
                  <div className="mb-3 mt-4">
                    <label htmlFor="subject" className="form-label">
                      Subject <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      style={{
                        backgroundColor: "#F9F9F9",
                        borderRadius: "5px",
                      }}
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Your Subject of Contact"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3 mt-2">
                <label htmlFor="message" className="form-label">
                  Message <span className="text-danger">*</span>
                </label>
                <textarea
                  rows="5"
                  className="form-control"
                  id="message"
                  name="message"
                  style={{
                    backgroundColor: "#F9F9F9",
                    borderRadius: "5px",
                  }}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                />
              </div>
              <div className="mb-3">
                <div
                  className="g-recaptcha"
                  data-sitekey="YOUR_SITE_KEY_HERE"
                ></div>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
