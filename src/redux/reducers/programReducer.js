import {
  GET_ALL_PROGRAMS_SUCCESS,
  GET_ALL_PROGRAMS_FAIL,
  GET_PROGRAM_BY_ID_SUCCESS,
  GET_PROGRAM_BY_ID_FAIL,
} from "../actions/programActions";

const initialState = {
  programs: [],
  program: null,
  error: null,
};

const programReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PROGRAMS_SUCCESS:
      return {
        programs: action.payload,
        error: null,
      };
    case GET_ALL_PROGRAMS_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_PROGRAM_BY_ID_SUCCESS:
      return {
        ...state,
        program: action.payload,
        error: null,
      };
    case GET_PROGRAM_BY_ID_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default programReducer;
