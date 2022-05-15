import React from "react";
import "../App.css";
import Messages from "./message-box/Messages";

export default function Home() {
    return (
        <div className="home-page">
            <Messages />
        </div>
    )
}