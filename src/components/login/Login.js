import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <form className="login-form">
        <h1>Breen Chat</h1>
        <label>Enter Username:</label>
        <input type="text" id="username" />
        <label>Enter Password:</label>
        <input type="password" id="password" />
        <Link to="/home">
          <button>SUBMIT</button>
        </Link>
      </form>
      <Link to="/create-account">Create Account Here</Link>
    </div>
  );
}
