import { authReducer } from './authReducer';

describe('Article Reducer', () => {
  it('should return default state', () => {
    const newState = authReducer(undefined, {});
    expect(newState).toEqual({
      isAuthenticated: false,
      isLoading: false,
      errorResponse: {},
      successResponse: { status: '' },
    });
  });

  // it('should return new state if receiving type', () => {
  //   const ratings = { rating: 2, averageRating: 4 };
  //   const newState = authReducer(undefined, {
  //     type: SIGNUP_SUCCESS,
  //     response,
  //   });
  //   expect(newState).toEqual;
  // });
});
