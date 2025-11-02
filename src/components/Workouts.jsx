import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllWorkouts } from "../redux/actions/workoutActions";
import WorkoutCard from "./WorkoutCard";
import { Link } from "react-router-dom";
import Search from "./Search";
//import "../css/Workouts.css"; // ⬅️ make sure to create this CSS file

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
    <div className="container mt-5">
      <h1 className="text-center mb-4 text-white">Workouts</h1>
      <div className="mb-3">
        <Search search={search} setSearch={setSearch} />
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3 g-4">
          {filteredWorkouts && filteredWorkouts.length > 0 ? (
            <>
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
            </>
          ) : (
            <div className="text-center text-white">
              <p>There are no workouts matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Workouts;
