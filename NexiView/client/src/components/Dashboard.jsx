import React from "react";
import { FaChartLine, FaClipboardList, FaStar, FaCalendarAlt } from "react-icons/fa";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Header */}
      <h1 className="dashboard-title">Interview Dashboard</h1>
      <p className="dashboard-description">
        Track your interview performance and analytics in one place.
      </p>

      {/* Scrollable Stats Section */}
      <div className="dashboard-content">
        <div className="dashboard-cards">
          <div className="dashboard-card">
            <FaChartLine className="dashboard-icon" />
            <h2>Interview Score</h2>
            <p>85 / 100</p>
          </div>

          <div className="dashboard-card">
            <FaClipboardList className="dashboard-icon" />
            <h2>Total Interviews</h2>
            <p>5 Completed</p>
          </div>

          <div className="dashboard-card">
            <FaStar className="dashboard-icon" />
            <h2>Average Rating</h2>
            <p>4.2 / 5</p>
          </div>

          <div className="dashboard-card">
            <FaCalendarAlt className="dashboard-icon" />
            <h2>Last Interview</h2>
            <p>March 10, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
