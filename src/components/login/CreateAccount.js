import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function CreateAccount() {
  return (
    <div className="login">
      <form className="login-form">
        <label>Enter Username:</label>
        <input type="text" id="username" />
        <label>Enter First Name:</label>
        <input type="text" id="fname" />
        <label>Enter Last Name:</label>
        <input type="text" id="lname" />
        <label>Enter Email:</label>
        <input type="email" id="email" />
        <label>Enter Password:</label>
        <input type="password" id="password" />
        <button>SUBMIT</button>
      </form>
      <Link to="/">Back To Login</Link>
    </div>
  );
}
