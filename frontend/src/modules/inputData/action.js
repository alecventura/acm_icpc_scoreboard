import { API_URL } from '../../constants';
import axios from 'axios';

export const handleChange = (e) => {
    return {
        type: 'INPUT_CHANGED',
        payload: e.target.value
    }
} 

export const handleSubmit = (inputData) => {
    console.log(API_URL)
    return dispatch => {
        axios.post(`${API_URL}/process-input/`, {input: inputData})
        .then(resp => {
            dispatch({
                type: 'UPDATE_OUTPUT',
                payload: resp.data
            })
        })
        .catch(e => {
            dispatch({
                type: 'UPDATE_OUTPUT',
                payload: e.message
            })
        })
    }
}