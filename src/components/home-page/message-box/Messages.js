import React from "react";
import "../../App.css";
import Input from "./Input";

export default function Messages() {
  return (
    <div className="message-box">
      <Input />
      <div className="message-fam"></div>
      <div className="message-self"></div>
      <div className="message-fam"></div>
      <div className="message-self"></div>
    </div>
  );
}
