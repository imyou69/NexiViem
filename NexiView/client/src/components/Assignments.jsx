import React from "react";
import '../styles/assignments.css';

const assignments = [
    { id: 1, title: "React Hooks Overview", dueDate: "2025-03-15" },
    { id: 2, title: "Node.js Express API", dueDate: "2025-03-20" },
    { id: 3, title: "MongoDB Schema Design", dueDate: "2025-03-25" }
];

const Assignments = () => {
    return (
        <div className="container">
            <h2 className="heading">Assignments</h2>
            <div className="assignment-list">
                {assignments.map(assignment => (
                    <div key={assignment.id} className="assignment-card">
                        <h3 className="assignment-title">{assignment.title}</h3>
                        <p className="assignment-date">Due: {assignment.dueDate}</p>
                        <button className="assignment-button">View Details</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Assignments;
