import { http } from './client';

export const signUpRequest = async userData => {
  return await http.post('/auth/signup', userData);
};

export const loginRequest = async credentials => {
  return await http.post('/auth/login', credentials);
};
