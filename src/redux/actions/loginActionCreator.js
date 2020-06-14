import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_FAILURE,
  LOGIN_REQUEST_SUCCESS,
}
  from '../actionTypes/authActionTypes';
import apiHelder from '../../utils/apiHelper';

const loginRequest = () => ({
  type: LOGIN_REQUEST,
});
const loginRequestFailure = (data) => ({
  type: LOGIN_REQUEST_FAILURE,
  payload: data,
});
const loginRequestSuccess = (data) => ({
  type: LOGIN_REQUEST_SUCCESS,
  payload: data,
});

export const loginWhatscoolUser = (credentials) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const response = await apiHelder.post('/auth/login', credentials);
    return dispatch(loginRequestSuccess(response.data));
  } catch (err) {
    if (err.response) {
      const { data } = err.response;

      return dispatch(loginRequestFailure(data));
    } if (err.request) {
      return dispatch(loginRequestFailure({
        error: 'It\'s not you, it\'s us. Please try again later.',
        status: 400,
      }));
    }

    return dispatch(loginRequestFailure({
      error: 'OOps!, something went wrong. Please try again later!.',
      status: 500,
    }));
  }
};
