import { getAllOffices } from '../../api/offices';

export const GET_ALL_OFFICES_INITIALIZED = 'GET_ALL_OFFICES_INITIALIZED';
export const GET_ALL_OFFICES_SUCCESS = 'GET_ALL_OFFICES_SUCCESS';
export const GET_ALL_OFFICES_ERROR = 'GET_ALL_OFFICES_ERROR';

export const getAllOfficesInitialized = () => {
  return {
    type: GET_ALL_OFFICES_INITIALIZED,
  };
};

export const getAllOfficesSuccess = response => {
  return {
    type: GET_ALL_OFFICES_SUCCESS,
    response,
  };
};

export const getAllOfficesError = error => {
  return {
    type: GET_ALL_OFFICES_ERROR,
    error,
  };
};

export const getAllOfficesRequest = () => {
  return async dispatch => {
    try {
      dispatch(getAllOfficesInitialized());
      const { data } = await getAllOffices();
      console.log('this is it', data);
      dispatch(getAllOfficesSuccess(data));
    } catch (error) {
      dispatch(getAllOfficesError([error]));
    }
  };
};

export const initialState = {
  isLoading: false,
  errorResponse: {},
  offices: { status: '' },
};

export const officesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_OFFICES_INITIALIZED:
      return {
        ...state,
        isLoading: true,
      };

    case GET_ALL_OFFICES_SUCCESS:
      return {
        ...state,
        offices: action.response,
        isLoading: false,
        errorResponse: [],
      };

    case GET_ALL_OFFICES_ERROR:
      return {
        ...state,
        isLoading: false,
        errorResponse: action.error,
      };

    default:
      return state;
  }
};
