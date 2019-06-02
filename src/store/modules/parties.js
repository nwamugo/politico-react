import { getAllParties } from '../../api/parties';

export const GET_ALL_PARTIES_INITIALIZED = 'GET_ALL_PARTIES_INITIALIZED';
export const GET_ALL_PARTIES_SUCCESS = 'GET_ALL_PARTIES_SUCCESS';
export const GET_ALL_PARTIES_ERROR = 'GET_ALL_PARTIES_ERROR';

export const getAllPartiesInitialized = () => {
  return {
    type: GET_ALL_PARTIES_INITIALIZED,
  };
};

export const getAllPartiesSuccess = response => {
  return {
    type: GET_ALL_PARTIES_SUCCESS,
    response,
  };
};

export const getAllPartiesError = error => {
  return {
    type: GET_ALL_PARTIES_ERROR,
    error,
  };
};

export const getAllPartiesRequest = () => {
  return async dispatch => {
    try {
      dispatch(getAllPartiesInitialized());
      const { data } = await getAllParties();
      console.log(data);
      dispatch(getAllPartiesSuccess(data));
    } catch (error) {
      dispatch(getAllPartiesError([error]));
    }
  };
};

export const initialState = {
  isLoading: false,
  errorResponse: {},
  parties: { status: '' },
};

export const partiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PARTIES_INITIALIZED:
      return {
        ...state,
        isLoading: true,
      };

    case GET_ALL_PARTIES_SUCCESS:
      return {
        ...state,
        parties: action.response,
        isLoading: false,
        errorResponse: [],
      };

    case GET_ALL_PARTIES_ERROR:
      return {
        ...state,
        isLoading: false,
        errorResponse: action.error,
      };

    default:
      return state;
  }
};
