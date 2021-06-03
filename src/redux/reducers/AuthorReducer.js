import * as types from "../actions/actionTypes";

export default function authorReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
      case types.LOAD_COURSES_SUCCESS:
          return action.courses;
    default:
      return state;
  }
}