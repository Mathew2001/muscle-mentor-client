import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllWorkouts } from "../redux/actions/workoutActions";
import WorkoutCard from "./WorkoutCard";
import { Link } from "react-router-dom";
import Search from "./Search";
import "../css/Workouts.css"; // ⬅️ make sure to create this CSS file

const Workouts = () => {
  const dispatch = useDispatch();
  const { workouts } = useSelector((state) => state.workoutReducer);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getAllWorkouts());
  }, [dispatch]);

  const filteredWorkouts = workouts.filter((workout) =>
    workout.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="workouts-page">
      <div className="search-section">
        <Search search={search} setSearch={setSearch} />
      </div>

      {filteredWorkouts && filteredWorkouts.length > 0 ? (
        <div className="workout-list">
          {filteredWorkouts.map((workout) => (
            <WorkoutCard
              key={workout._id}
              title={workout.title}
              duration={workout.duration}
              level={workout.level}
              description={workout.description}
              muscleGroup={workout.muscleGroup}
            />
          ))}
        </div>
      ) : (
        <div className="no-workouts">
          <p>There are no workouts matching your search.</p>
        </div>
      )}

      <div className="back-link-wrapper">
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
    </section>
  );
};

export default Workouts;
