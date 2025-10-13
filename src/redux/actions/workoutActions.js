import { type } from "@testing-library/user-event/dist/type";
import workoutServices from "../services/workoutServices";

export const GET_ALL_WORKOUTS_SUCCESS = "GET_ALL_WORKOUTS_SUCCESS";
export const GET_ALL_WORKOUTS_FAIL = "GET_ALL_WORKOUTS_FAIL";
export const GET_WORKOUT_BY_ID_SUCCESS = "GET_WORKOUT_BY_ID_SUCCESS";
export const GET_WORKOUT_BY_ID_FAIL = "GET_WORKOUT_BY_ID_FAIL";


export const getAllWorkouts = () => async (dispatch) => {
  try {
    const workouts = await workoutServices.getAllWorkouts();
    if (workouts)
      dispatch({ type: GET_ALL_WORKOUTS_SUCCESS, payload: workouts });
  } catch (error) {
    dispatch({
      type: GET_ALL_WORKOUTS_FAIL,
      payload: error?.response?.data?.message || "Error get all workouts",
    });
  }
};

export const getWorkoutById = (id) => async (dispatch) => {
  try {
    const workout = await workoutServices.getWorkoutById(id);
    if (workout) {
      dispatch({
        type: GET_WORKOUT_BY_ID_SUCCESS,
        payload: workout,
      });
    }
  } catch (error) {
    dispatch({ type: GET_WORKOUT_BY_ID_FAIL, payload: null });
  }
};
