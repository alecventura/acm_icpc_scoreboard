export const setLoading = show => (dispatch) => {
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

export default setLoading;
