import React from "react";
import "../styles/report.css";

const reports = [
    { id: 1, title: "Q1 Financial Report", date: "2025-03-10", status: "Approved" },
    { id: 2, title: "Customer Feedback Analysis", date: "2025-03-15", status: "Pending" },
    { id: 3, title: "Market Research 2025", date: "2025-03-20", status: "Reviewed" }
];

const Report = () => {
    return (
        <div className="report-container">
            <h2 className="report-heading">Reports</h2>
            <div className="report-list">
                {reports.map(report => (
                    <div key={report.id} className="report-card">
                        <h3 className="report-title">{report.title}</h3>
                        <p className="report-date">Date: {report.date}</p>
                        <p className={`report-status ${report.status.toLowerCase()}`}>{report.status}</p>
                        <button className="report-button">View Report</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Report;