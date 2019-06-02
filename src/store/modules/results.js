import { getElectionResult } from '../../api/results';

export const GET_ELECTION_RESULT_INITIALIZED =
  'GET_ELECTION_RESULT_INITIALIZED';
export const GET_ELECTION_RESULT_SUCCESS = 'GET_ELECTION_RESULT_SUCCESS';
export const GET_ELECTION_RESULT_ERROR = 'GET_ELECTION_RESULT_ERROR';

export const getElectionResultInitialized = () => {
  return {
    type: GET_ELECTION_RESULT_INITIALIZED,
  };
};

export const getElectionResultSuccess = response => {
  return {
    type: GET_ELECTION_RESULT_SUCCESS,
    response,
  };
};

export const getElectionResultError = error => {
  return {
    type: GET_ELECTION_RESULT_ERROR,
    error,
  };
};

export const getElectionResultRequest = officeId => {
  return async dispatch => {
    try {
      dispatch(getElectionResultInitialized());
      const { data } = await getElectionResult(officeId);
      console.log(data);
      dispatch(getElectionResultSuccess(data));
    } catch (error) {
      dispatch(getElectionResultError([error]));
    }
  };
};

export const initialState = {
  isLoading: false,
  errorResponse: [],
  results: { status: '' },
  office: {},
};

export const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ELECTION_RESULT_INITIALIZED:
      return {
        ...state,
        isLoading: true,
      };

    case GET_ELECTION_RESULT_SUCCESS:
      return {
        ...state,
        results: action.response,
        isLoading: false,
        errorResponse: [],
      };

    case GET_ELECTION_RESULT_ERROR:
      return {
        ...state,
        isLoading: false,
        errorResponse: action.error,
      };

    default:
      return state;
  }
};
