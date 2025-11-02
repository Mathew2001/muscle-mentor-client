import React, { useState, useEffect } from 'react';
import WorkoutCard from './WorkoutCard';
import SwiperItems from './SwiperItems';
import AppImage from '../assets/images/AppImage.jpg';

const ProgramCard = ({ name, durationWeeks, description, workouts = [], images }) => {
  const [showWorkouts, setShowWorkouts] = useState(false);

  const openPopup = () => {
    if (!workouts || workouts.length === 0) return;
    setShowWorkouts(true);
  };

  const closePopup = () => {
    setShowWorkouts(false);
  };

  // lock / unlock scroll
  useEffect(() => {
    if (showWorkouts) {
      // save current scroll if you want
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // cleanup (in case component unmounts while open)
    return () => {
      document.body.style.overflow = '';
    };
  }, [showWorkouts]);

  return (
    <>
        <div className="card h-100 mt-2 bg-transparent border-white border-2 ">
          <div className="row g-0">
            <div className="col-md-6">
              <div className="card-body text-white">
                <h2 className="card-title">{name}</h2>
                <p className="card-text">Duration: {durationWeeks} weeks</p>
                <p className="card-text">{description}</p>
                <button
                  type="button"
                  className="btn btn-link p-0 mt-2 text-danger"
                  onClick={openPopup}
                  disabled={!workouts || workouts.length === 0}
                >
                  {workouts && workouts.length > 0 ? 'View Workouts ▲' : 'No workouts'}
                </button>
              </div>
            </div>
            <div className="col-md-6">
              {images && images.length > 0 && (
                images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={name}
                    className="img-fluid h-100 w-100"
                    style={{ objectFit: 'cover' }}
                  />
                ))
              )}
            </div>
          </div>
        </div>

      {showWorkouts && (
        <>
          {/* backdrop */}
          <div
            className="position-fixed top-0 start-0 w-100 h-100"
            style={{ background: 'rgba(0,0,0,0.5)', zIndex: 1050 }}
            onClick={closePopup}
          ></div>

          {/* modal */}
          <div
            className="position-fixed top-50 start-50 translate-middle bg-dark rounded shadow border border-white border-2"
            style={{
              zIndex: 1051,
              width: 'min(1000px, 90vw)',
              maxHeight: '90vh',
              overflow: 'auto',
              backgroundImage: `url(${AppImage})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" 
            }}
          >
            <div className="d-flex justify-content-between align-items-center border-bottom p-3">
              <h5 className="mb-0 text-white">Workouts in {name}</h5>
              <button type="button" className="btn-close btn-close-white" onClick={closePopup} />
            </div>

            <div className="p-3">
              <SwiperItems
                items={workouts}
                renderItems={(item) => (
                  <WorkoutCard
                    key={item?._id}
                    title={item?.title}
                    duration={item?.duration}
                    level={item?.level}
                    description={item?.description}
                    muscleGroup={item?.muscleGroup}
                  />
                )}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProgramCard;
