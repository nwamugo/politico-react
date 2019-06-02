import { http } from './client';

export const getAllParties = async () => {
  return await http.get('/parties');
};
