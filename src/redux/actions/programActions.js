
import programServices from "../services/programsServices";

export const GET_ALL_PROGRAMS_SUCCESS = "GET_ALL_PROGRAMS_SUCCESS";
export const GET_ALL_PROGRAMS_FAIL = "GET_ALL_PROGRAMS_FAIL";
export const GET_PROGRAM_BY_ID_SUCCESS = "GET_PROGRAM_BY_ID_SUCCESS";
export const GET_PROGRAM_BY_ID_FAIL = "GET_PROGRAM_BY_ID_FAIL";


export const getAllPrograms = () => async (dispatch) => {
  try {
    const programs = await programServices.getAllPrograms();
    dispatch({ type: GET_ALL_PROGRAMS_SUCCESS, payload: programs });
  } catch (error) {
    dispatch({
      type: error?.response?.data?.message || "get all progarms failed",
    });
  }
};

export const getProgramById = (id) => async (dispatch) => {
  try {
    const program = await programServices.getProgramById(id)
    if(program)
    {
      dispatch({
        type: GET_PROGRAM_BY_ID_SUCCESS,payload:program
      });
    }
  } catch (error) {
    dispatch({
      type:GET_PROGRAM_BY_ID_FAIL,payload:null
    })
  }
}  