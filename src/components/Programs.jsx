import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPrograms } from "../redux/actions/programActions";
import { getAllWorkouts } from "../redux/actions/workoutActions";
import ProgramCard from "./ProgramCard";
import Search from "./Search";
//import "../css/Programs.css"; // make sure to create this CSS file


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
    <div className="container mt-5">
      <h1 className="text-center mb-4 text-white">Programs</h1>
      <div className="mb-3">
        <Search search={search} setSearch={setSearch} />
      </div>
      {filteredPrograms && filteredPrograms.length > 0 ? (
        <>
          {filteredPrograms.map((program) => (
            <ProgramCard key={program._id} name={program.name} durationWeeks={program.durationWeeks} description={program.description} workouts={workouts.filter(workout => workout.programId === program._id)} images={program.images} />
          ))}
        </>
      ) : (
        <div className="text-center text-white">
          <p>There are no programs matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default Programs;
