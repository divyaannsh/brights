import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Realm from "realm-web";

export default function Main() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Use useNavigate hook

  const app = new Realm.App({ id: "application-0-rpwpphv" }); // Replace with your Realm App ID

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const credentials = Realm.Credentials.anonymous();
      const user = await app.logIn(credentials);
      const mongodb = user.mongoClient("mongodb-atlas");
      const usersCollection = mongodb
        .db("brightairways")
        .collection("logindata"); // Replace with your DB and collection name

      const existingUser = await usersCollection.findOne({
        username,
        password,
      });
      if (existingUser) {
        localStorage.setItem("token", username); // Save token containing username
        alert("Login successful");
        navigate("/"); // Redirect to home page or any other page
        window.location.reload(); // Reload the page
      } else {
        alert("Invalid username or password");
      }
    } catch (error) {
      console.error("Failed to log in:", error);
    }
  };

  return (
    <div>
      <div className="container-fluid bg-dark pt-5 pb-5">
        <div className="row pt-5 pb-3"></div>
      </div>
      <h2 className="text-center mt-2">Login</h2>
      <div className="container mt-5 mb-5 pb-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-lg">
            Login
          </button>
        </form>
        <div className="mt-3">
          <Link to="/sign-up" onClick={() => window.scrollTo(0, 0)}>
            New User? Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
