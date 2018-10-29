import {
  AUTH_SIGNUP_SUCCESS, AUTH_SIGNUP_PENDING, AUTH_SIGNUP_FAILURE,
  AUTH_SIGNIN_SUCCESS, AUTH_SIGNIN_PENDING, AUTH_SIGNIN_FAILURE
} from '../utils/constants';
import initialState from './initialState';


const authReducer = (state=initialState.auth, action) =>{
  switch (action.type)  {
    case AUTH_SIGNUP_SUCCESS:
    case AUTH_SIGNIN_SUCCESS:
      return {
        errorMessage: '',
        pending: false,
        userInfo: action.payload
      };

    case AUTH_SIGNUP_PENDING:
    case AUTH_SIGNIN_PENDING:
      return {
        ...state,
        pending: true,
        errorMessage: ''
      }

      case AUTH_SIGNUP_FAILURE:
      case AUTH_SIGNIN_FAILURE:
        return {
          ...state,
          pending: false,
          errorMessage: action.errorMessage
        }

    default:
      return state;
  }
};

export default authReducer;
