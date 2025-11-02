import { combineReducers } from "@reduxjs/toolkit";
import workoutReducer from "./workoutReducer";
import programReducer from "./programReducer";
import contactUsReducers from "./contactReducers";
import reviewReducer from "./reviewReducer";
const rootReducer = combineReducers({
  workoutReducer: workoutReducer,
  programReducer: programReducer,
  contactUsReducers: contactUsReducers,
  reviewReducer: reviewReducer,
});

export default rootReducer