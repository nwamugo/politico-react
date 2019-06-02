import { getProfileRequest } from '../../api/profile';

export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_ERROR = 'GET_PROFILE_ERROR';

export const getUserProfileError = error => ({
  type: GET_PROFILE_ERROR,
  error,
});

export const getUserProfile = profile => ({
  type: GET_PROFILE_SUCCESS,
  publications: profile.publications,
  firstName: profile.firstName,
  lastName: profile.lastName,
  bio: profile.bio,
  followings: profile.followings,
  followers: profile.followers,
  image: profile.image,
  email: profile.email,
  username: profile.username,
  updatedAt: profile.updatedAt,
});

export const getUserProfileRequest = username => async dispatch => {
  try {
    const res = await getProfileRequest(username);
    localStorage.setItem('userprofile', JSON.stringify(res.data));
    dispatch(getUserProfile(res.data.data));
  } catch (error) {
    return dispatch(getUserProfileError(error));
  }
};

export const DEFAULT_STATE = {
  firstName: '',
  lastName: '',
  bio: '',
  publications: [],
  followings: [],
  followers: [],
  bookmarks: [],
  image: '',
  email: '',
  username: '',
  updatedAt: '',
  error: {},
  isLoading: true,
  isDeleting: false,
};

export const profileReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        publications: action.publications,
        firstName: action.firstName,
        lastName: action.lastName,
        bio: action.bio,
        followings: action.followings,
        followers: action.followers,
        image: action.image,
        email: action.email,
        username: action.username,
        updatedAt: action.updatedAt,
        isLoading: false,
      };
    case GET_PROFILE_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
};
