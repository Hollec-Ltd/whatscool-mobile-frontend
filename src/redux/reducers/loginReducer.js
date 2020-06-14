import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_FAILURE,
  LOGIN_REQUEST_SUCCESS,
}
  from '../actionTypes/authActionTypes';

const initialState = {
  status: 0,
  message: '',
  error: '',
  loading: false,
  token: '',
};

const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_REQUEST_FAILURE:
      return {
        ...state,
        error: payload.error,
        message: '',
        token: '',
        status: payload.status,
        loading: false,
      };
    case LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        message: payload.message,
        token: payload.data.token,
        error: '',
        status: payload.status,
        loading: false,
      };

    default:
      return state;
  }
};

export default loginReducer;
