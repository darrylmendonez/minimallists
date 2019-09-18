export const newList = (list) => {
  return (dispatch, getState) => {
    // make async call to database
    dispatch({ type: 'NEW_LIST', list });
  }
};