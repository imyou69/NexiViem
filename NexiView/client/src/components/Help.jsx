import React from "react";
import "../styles/help.css";

const Help = () => {
    return (
        <div className="help-container">
            <h2 className="help-heading">Help & Support</h2>
            <p className="help-description">Need assistance? Browse our FAQs or contact our support team.</p>
            <div className="help-sections">
                <div className="help-card">
                    <h3 className="help-title">FAQs</h3>
                    <p className="help-text">Find answers to common questions.</p>
                    <button className="help-button">View FAQs</button>
                </div>
                <div className="help-card">
                    <h3 className="help-title">Contact Support</h3>
                    <p className="help-text">Get in touch with our support team.</p>
                    <button className="help-button">Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default Help;