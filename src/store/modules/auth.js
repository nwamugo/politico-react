//constants
export const SIGNUP_INITIALIZED = 'SIGNUP_INITIALIZED';

export const initialState = {
  isLoading: false,
  errorResponse: [],
  successResponse: { status: '' },
  loggedInUser: {},
};

export const signUpInitialize = () => {
  return {
    type: SIGNUP_INITIALIZED,
  };
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_INITIALIZED:
      return {
        ...state,
      };
    default:
      return state;
  }
};
