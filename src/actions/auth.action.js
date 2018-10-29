import axios from '../utils/axios.service';


// constants
import {
  AUTH_SIGNUP_SUCCESS, AUTH_SIGNUP_PENDING, AUTH_SIGNUP_FAILURE,
  AUTH_SIGNIN_SUCCESS, AUTH_SIGNIN_PENDING, AUTH_SIGNIN_FAILURE
} from '../utils/constants';
import { setToken } from '../utils/token';


const signupSuccess = payload => ({ type: AUTH_SIGNUP_SUCCESS, payload });
const signupPending = () => ({ type: AUTH_SIGNUP_PENDING });
const signupFailure = errorMessage => ({ type: AUTH_SIGNUP_FAILURE, errorMessage });

const signInSuccess = payload => ({ type: AUTH_SIGNIN_SUCCESS, payload });
const signInPending = () => ({ type: AUTH_SIGNIN_PENDING });
const signInFailure = errorMessage => ({ type: AUTH_SIGNIN_FAILURE, errorMessage });

export const signup = payload => dispatch => {
  dispatch(signupPending());
  return axios.post('/auth/signup', payload)
    .then(response => {
      const { token, ...userInfo } = response.data.data;
      setToken(token)
      return dispatch(signupSuccess(userInfo));
    })
    .catch(error => dispatch(signupFailure(error.errorMessage)))
};

export const signin = payload => dispatch => {
  dispatch(signInPending());
  return axios.post('/auth/signin', payload)
    .then(response => {
      const { token, ...userInfo } = response.data.data;
      setToken(token)
      return dispatch(signInSuccess(userInfo));
    })
    .catch(error => dispatch(signInFailure(error.errorMessage)))
}
