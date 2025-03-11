import React from "react";
import { Link } from "react-router-dom";
import { BiUser, BiBell, BiCog } from "react-icons/bi";
import "../styles/contentheader.css";

const ContentHeader = () => {
    return (
        <header className="content-header">
            <div className="header-icons">
                <div className="icon-container">
                    <BiBell className="header-icon" aria-label="Notifications" />
                </div>
                <div className="icon-container">
                    <BiCog className="header-icon" aria-label="Settings" />
                </div>
                <div className="icon-container">
                    <Link to="/profile" className="item">
                        <BiUser className="header-icon" aria-label="Profile" />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default ContentHeader;
