import React from "react";
import "../../App.css";
import Input from "./Input";

export default function Messages() {
  return (
    <div className="message-box">
      <Input />
      <div className="message-fam">
        <div className="message-info">
          <img
            src={
              "https://miro.medium.com/fit/c/176/176/1*xeEz6d3ZAd7uhRqD7K-dQQ.jpeg"
            }
            alt="person"
            className="message-img"
          />
        </div>
        <div className="message">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="edit">
            <p>March 5th, 2022 | 12:21 p.m.</p>
            <button>Edit</button>
          </div>
        </div>
      </div>
      <div className="message-self">
        <div className="message-info">
          <img
            src={
              "https://miro.medium.com/fit/c/176/176/1*xeEz6d3ZAd7uhRqD7K-dQQ.jpeg"
            }
            alt="person"
            className="message-img"
          />
        </div>
        <div className="message">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="edit">
            <p>March 5th, 2022 | 12:21 p.m.</p>
            <button>Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
