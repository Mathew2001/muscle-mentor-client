import {
  GET_ALL_WORKOUTS_SUCCESS,
  GET_ALL_WORKOUTS_FAIL,
  GET_WORKOUT_BY_ID_SUCCESS,
  GET_WORKOUT_BY_ID_FAIL,
} from "../actions/workoutActions";

const initialState = {
  workouts: [],
  workout: null,
  error: null,
};
const workoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_WORKOUTS_SUCCESS:
      return {
        workouts: action.payload,
        error: null,
      };
    case GET_ALL_WORKOUTS_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_WORKOUT_BY_ID_SUCCESS:
      return {
        ...state,
        workout: action.payload,
        error: null,
      };
    case GET_WORKOUT_BY_ID_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default workoutReducer;
