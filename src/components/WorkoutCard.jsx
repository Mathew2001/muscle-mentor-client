import React from "react";
import "../css/WorkoutCard.css"; // Optional CSS file for styling

const WorkoutCard = ({ title, duration, level, description, muscleGroup }) => {
  return (
    <div className="workout-card">
      <h2 className="workout-title">{title}</h2>
      <p className="workout-info"><strong>Duration:</strong> {duration} minutes</p>
      <p className="workout-info"><strong>Level:</strong> {level}</p>
      <p className="workout-description">{description}</p>

      {muscleGroup && muscleGroup.length > 0 ? (
        <div className="muscle-group-section">
          <p><strong>Target Muscles:</strong></p>
          <ul className="muscle-list">
            {muscleGroup.map((muscle, i) => (
              <li key={i} className="muscle-item">{muscle}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="no-muscle">No muscle groups listed.</p>
      )}
    </div>
  );
};

export default WorkoutCard;
