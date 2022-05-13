import React from "react";
import "../App.css";
import Messages from "./message-box/Messages";
import Profile from "./user-info/Profile";

export default function Home() {
    return (
        <div className="home-page">
            <Profile />
            <Messages />
        </div>
    )
}