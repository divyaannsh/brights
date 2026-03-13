import React, { useState } from "react";
import * as Realm from "realm-web";

export default function Subscribe() {
  const [email, setEmail] = useState("");

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
    <div className="container mb-5">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 shadow-lg rounded p-4">
          <div className="row">
            <div className="col-md-12">
              <h3 className="text-center">Subscribe to our newsletter</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
              <input
                type="email"
                placeholder="Your Email.."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-100"
              />
            </div>
            <div className="col-md-3">
              <button
                className="btn text-white mt-1"
                onClick={handleSubmit}
                style={{ backgroundColor: "#101E44" }}
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
}
