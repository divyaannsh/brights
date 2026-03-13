import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Realm from "realm-web";

export default function Main() {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate(); // Use useNavigate hook

  const app = new Realm.App({ id: "application-0-rpwpphv" }); // Replace with your Realm App ID

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    if (value.length < 4) {
      setUsernameError("Username must be at least 4 characters long.");
    } else {
      setUsernameError("");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
    } else {
      setPasswordError("");
    }
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

      const existingUser = await usersCollection.findOne({ username });
      if (existingUser) {
        alert("Username already taken");
      } else {
        await usersCollection.insertOne({ username, password });
        alert("New user created successfully, You can Login Now");
        setUsername("");
        setPassword("");
        navigate("/login"); // Redirect to login page
      }
    } catch (error) {
      console.error("Failed to sign up:", error);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="container-fluid bg-dark pt-5 pb-5">
        <div className="row pt-5 pb-3"></div>
      </div>
      <h2 className="text-center mt-3">Sign Up</h2>
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
            {usernameError && (
              <div className="text-danger mt-1">{usernameError}</div>
            )}
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
            {passwordError && (
              <div className="text-danger mt-1">{passwordError}</div>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            disabled={username.length < 4 || password.length < 8}
          >
            Sign Up
          </button>
        </form>
        <div className="mt-3">
          <Link to="/login" onClick={scrollToTop}>
            Existing user? Login
          </Link>
        </div>
      </div>
    </div>
  );
}
