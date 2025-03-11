import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";
import {
  BiHome, BiTask, BiSolidReport, BiStats, BiMessage, BiHelpCircle
} from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="menu">
      {/* Clickable Logo */}
      <div className="logo">
        <Link to="/" className="logo-link">
          <h1>NexiViem</h1>
        </Link>
      </div>

      {/* Navigation Menu */}
      <div className="menu-list">
        <Link to="/dashboard" className="item">
          <BiHome className="icon" />
          Dashboard
        </Link>
        <Link to="/assignments" className="item">
          <BiTask className="icon" />
          Assignments
        </Link>
        <Link to="/report" className="item">
          <BiSolidReport className="icon" />
          Reports
        </Link>
        <Link to="/stats" className="item">
          <BiStats className="icon" />
          Stats
        </Link>
        <Link to="/messages" className="item">
          <BiMessage className="icon" />
          Messages
        </Link>
        <Link to="/help" className="item">
          <BiHelpCircle className="icon" />
          Help
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
