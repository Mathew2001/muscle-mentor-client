import React, { useState } from 'react';
import '../css/ProgramCard.css';
import WorkoutCard from './WorkoutCard';

const ProgramCard = ({ name, durationWeeks, description, workouts }) => {
  const [showWorkouts, setShowWorkouts] = useState(false);

  const handleCardClick = () => {
    setShowWorkouts(!showWorkouts);
  };

  return (
    <div
      className={`program-card ${showWorkouts ? 'expanded' : ''}`}
      onClick={handleCardClick}
    >
      <div className="program-info">
        <h2 className="program-title">{name}</h2>
        <p className="program-duration">Duration: {durationWeeks} weeks</p>
        <p className="program-description">{description}</p>
        <span className="view-toggle">
          {showWorkouts ? 'Hide Workouts ▼' : 'View Workouts ▲'}
        </span>
      </div>

      {showWorkouts && (
        <div className="workouts-container" onClick={e => e.stopPropagation()}>
          {workouts?.length > 0 ? (
            workouts.map((workout, index) => (
              <WorkoutCard key={index} workout={workout} name={workout.name} duration={workout.duration} level={workout.level} description={workout.description} muscleGroup={workout.muscleGroup} />
            ))
          ) : (
            <p className="no-workouts">No workouts available for this program</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ProgramCard;
