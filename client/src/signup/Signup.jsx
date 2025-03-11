import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom"

function Signup ()  {
  // Initialize state with empty strings
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make sure all fields are filled out
    if (!name || !email || !password) {
      alert("Please fill out all fields");
      return;
    }

    // Send data to the server
    axios.post('http://127.0.0.1:3001/signup', { name, email, password })
      .then(result => {
        console.log(result); // Log the result for debugging
        alert("Signup successful!"); // Optional: alert user about success
        // Redirect to login page or other actions
        navigate('/login')
      })
      .catch(err => {
        console.log(err); // Log the error for debugging
        alert("Signup failed! Please try again.");
      });
  }

  return (
    <div className="addUser">
      <h3>Sign Up</h3>
      <form className="addUserForm" onSubmit={handleSubmit}>
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            placeholder="Enter your name"
            onChange = {(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Enter your Email"
            onChange = {(e) => setEmail(e.target.value)}
          />
          <label htmlFor="Password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Enter Password"
            onChange = {(e) => setPassword(e.target.value)}
          />
          <button type="submit" class="btn btn-success">
            Sign Up
          </button>
        </div>
      </form>
      <div className="login">
        <p>Already have an Account? </p>
        <Link to="/login" type="submit" class="btn btn-primary">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;