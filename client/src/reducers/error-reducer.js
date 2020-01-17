import * as types from "../actions/action-types.js";
import initialState from "./initial-state.js";

export default function error(state = initialState.error, action) {
  switch (action.type) {
    case types.ERROR:
      return action.data;
    case types.CLEAR_ERROR:
      return action.data;
    default:
      return state;
  }
}
