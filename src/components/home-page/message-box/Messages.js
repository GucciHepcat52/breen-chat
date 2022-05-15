import React from "react";
import "../../App.css";
import Profile from "../user-info/Profile";

export default function Messages() {
  return (
    <div className="message-box">
      <Profile />
      <h1>Hello World</h1>
    </div>
  );
}
