import axios from 'axios';
import { API_URL } from '../../constants';

export const handleChange = e => ({
  type: 'INPUT_CHANGED',
  payload: e.target.value,
});

export const handleSubmit = inputData =>
  (dispatch) => {
    axios.post(`${API_URL}/process-input/`, { input: inputData })
      .then((resp) => {
        dispatch({
          type: 'UPDATE_OUTPUT',
          payload: resp.data,
        });
      })
      .catch((e) => {
        dispatch({
          type: 'UPDATE_OUTPUT',
          payload: e.message,
        });
      });
  };

