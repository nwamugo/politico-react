import { http } from './client';

export const getElectionResult = async officeId => {
  console.log(officeId);
  return await http.get('/office/${officeId}/result');
};
