import React from "react";
import "../../App.css";
import Profile from "./Profile";

export default function Input() {
  return (
    <div className="input-bar">
      <div className="dropdown">
        <p>{"|->"}</p>
        <Profile />
      </div>
      <input
        type="text"
        placeholder="Enter your text here"
        className="message-input"
      />
      <button className="message-enter">Enter</button>
    </div>
  );
}
