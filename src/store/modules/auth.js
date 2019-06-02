import { toast } from 'react-toastify';

import { signUpRequest, loginRequest } from '../../api/auth';
import { setToken, destroyToken } from '../../api/helpers';

//constants
export const SIGNUP_INITIALIZED = 'SIGNUP_INITIALIZED';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';
export const LOGIN_INITIALIZED = 'LOGIN_INITIALIZED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT_INITIALIZED = 'LOGOUT_INITIALIZED';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

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

export const loginInitialized = () => {
  return {
    type: LOGIN_INITIALIZED,
  };
};

export const loginSuccess = response => {
  return {
    type: LOGIN_SUCCESS,
    response,
  };
};

export const loginError = error => {
  return {
    type: LOGIN_ERROR,
    error,
  };
};

export const logoutInitialized = () => {
  return {
    type: LOGOUT_INITIALIZED,
  };
};

export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const signupUser = (userData, history) => {
  return async dispatch => {
    try {
      dispatch(signUpInitialized());
      const { data } = await signUpRequest(userData);
      localStorage.setItem('user', JSON.stringify(data.data));
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

export const loginUser = (userData, history) => {
  return async dispatch => {
    try {
      dispatch(loginInitialized());
      const { data } = await loginRequest(userData);
      console.log('reading', data);
      localStorage.setItem('user', JSON.stringify(data.data));
      const [details] = data.data;

      setToken(details.token);
      const authenticatedUser = {
        admin: details.user.is_admin,
        firstname: details.user.first_name,
        email: details.user.email,
      };
      dispatch(loginSuccess(authenticatedUser));
      toast.success(data.message);
      history.push('/profile');
    } catch (err) {
      const { error } = err.response.data;
      dispatch(loginError([error]));
    }
  };
};

export const logout = history => {
  return dispatch => {
    dispatch(logoutInitialized());
    destroyToken();
    dispatch(logoutSuccess());
    history.push('/');
  };
};

export const initialState = {
  isAuthenticated: false,
  isLoading: false,
  errorResponse: [],
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

    case LOGIN_INITIALIZED:
      return {
        ...state,
        isLoading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        successResponse: action.response,
        isAuthenticated: true,
        isLoading: false,
        errorResponse: [],
      };

    case LOGIN_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        errorResponse: action.error,
      };

    case LOGOUT_INITIALIZED:
      return {
        ...state,
        isLoading: true,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        successResponse: {},
        errorResponse: [],
        isLoading: false,
      };

    default:
      return state;
  }
};
