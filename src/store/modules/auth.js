import { toast } from 'react-toastify';

import { signUpRequest } from '../../api/auth';

//constants
export const SIGNUP_INITIALIZED = 'SIGNUP_INITIALIZED';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

export const signUpInitialized = () => {
  return {
    type: SIGNUP_INITIALIZED,
  };
};

export const signUpSuccess = response => {
  return {
    type: SIGNUP_SUCCESS,
    response,
  };
};

export const signUpError = error => {
  return {
    type: SIGNUP_ERROR,
    error,
  };
};

export const signupUser = (userData, history) => {
  return async dispatch => {
    try {
      dispatch(signUpInitialized());
      const { data } = await signUpRequest(userData);
      console.log(data);
      history.push('/profile');
      dispatch(signUpSuccess(data));
    } catch (err) {
      const { error } = err.response.data;
      dispatch(signUpError([error]));
      toast.error('Something went wrong. Signup Unsuccessful!');
    }
  };
};

export const initialState = {
  isAuthenticated: false,
  isLoading: false,
  errorResponse: {},
  successResponse: { status: '' },
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_INITIALIZED:
      return {
        ...state,
        isLoading: true,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        errorResponse: [],
        successResponse: action.response,
      };

    case SIGNUP_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        errorResponse: action.error,
      };

    default:
      return state;
  }
};
