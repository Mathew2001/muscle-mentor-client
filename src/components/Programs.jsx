import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPrograms } from "../redux/actions/programActions";
import { getAllWorkouts } from "../redux/actions/workoutActions";
import ProgramCard from "./ProgramCard";
import Search from "./Search";
import { Link } from "react-router-dom";
import "../css/Programs.css"; // make sure to create this CSS file


const Programs = () => {
  const dispatch = useDispatch();
  const { programs } = useSelector((state) => state.programReducer);
  const { workouts } = useSelector((state) => state.workoutReducer);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getAllPrograms());
    dispatch(getAllWorkouts());
  }, [dispatch]);

  const filteredPrograms = programs.filter((program) =>
    program.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="programs-page">
      <div className="search-section">
        <Search search={search} setSearch={setSearch} />
      </div>

      {filteredPrograms && filteredPrograms.length > 0 ? (
        <ul className="program-list">
          {filteredPrograms.map((program) => (
            <li key={program._id}>
              <ProgramCard
                name={program.name}
                durationWeeks={program.durationWeeks}
                description={program.description}
                workouts={workouts.filter(workout => workout.programId === program._id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className="no-programs">
          <p>There are no programs matching your search.</p>
        </div>
      )}

      <div className="back-link-wrapper">
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
    </section>
  );
};

export default Programs;
