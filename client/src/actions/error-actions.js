export function message(string) {
  return dispatch => {
    dispatch({ type: "ERROR", data: string });
  };
}

export function clear() {
  return (dispatch, getState) => {
    dispatch({ type: "CLEAR_ERROR", data: null });
  };
}
