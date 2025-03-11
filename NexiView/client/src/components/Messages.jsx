import React from "react";
import "../styles/messages.css";

const messages = [
    { id: 1, sender: "Alice", text: "Hey, how are you?", time: "10:30 AM" },
    { id: 2, sender: "Bob", text: "Don't forget our meeting at 3 PM.", time: "11:00 AM" },
    { id: 3, sender: "Charlie", text: "Great job on the project!", time: "12:15 PM" }
];

const Messages = () => {
    return (
        <div className="messages-container">
            <h2 className="messages-heading">Messages</h2>
            <div className="messages-list">
                {messages.map(msg => (
                    <div key={msg.id} className="message-card">
                        <div className="message-header">
                            <h3 className="message-sender">{msg.sender}</h3>
                            <span className="message-time">{msg.time}</span>
                        </div>
                        <p className="message-text">{msg.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Messages;