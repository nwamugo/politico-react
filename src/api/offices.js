import { http } from './client';

export const getAllOffices = async () => {
  return await http.get('/offices');
};
