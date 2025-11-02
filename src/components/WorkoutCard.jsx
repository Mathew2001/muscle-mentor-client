import React from "react";
//import "../css/WorkoutCard.css"; // Optional CSS file for styling

const WorkoutCard = ({ title, duration, level, description, muscleGroup }) => {
  return (
    <div className="col">
      <div className="card h-100 mt-2 bg-transparent border-white border-2 ">
        <div className="card-body text-white">
          <h3 className="card-title">{title}</h3>
          <p className="card-text"><strong>Duration:</strong> {duration} minutes</p>
          <p className="card-text"><strong>Level:</strong> {level}</p>
          <p className="card-text"><strong>Description:</strong> {description}</p>

          {muscleGroup && muscleGroup.length > 0 ? (
            <div className="card-text">
              <p><strong>Target Muscles:</strong></p>
              <ul className="text-white">
                {muscleGroup.map((muscle, i) => (
                  <li key={i} className="text-white">{muscle}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="card-text">No muscle groups listed.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
