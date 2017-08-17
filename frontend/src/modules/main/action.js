export default show => (dispatch) => {
  if (show) {
    dispatch({
      type: 'ENABLE_LOADING',
    });
  } else {
    dispatch({
      type: 'DISABLE_LOADING',
    });
  }
};
