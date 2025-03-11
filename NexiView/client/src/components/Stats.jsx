import React from "react";
import "../styles/stats.css";

const statsData = [
    { id: 1, title: "Total Users", value: "1,250" },
    { id: 2, title: "Active Sessions", value: "320" },
    { id: 3, title: "New Signups", value: "45" },
    { id: 4, title: "Revenue", value: "$12,500" }
];

const Stats = () => {
    return (
        <div className="stats-container">
            <h2 className="stats-heading">Statistics</h2>
            <div className="stats-list">
                {statsData.map(stat => (
                    <div key={stat.id} className="stats-card">
                        <h3 className="stats-title">{stat.title}</h3>
                        <p className="stats-value">{stat.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stats;
