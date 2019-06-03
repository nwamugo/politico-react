import { http } from './client';

export const getElectionResult = async officeId => {
  return await http.get(`/office/${officeId}/result`, {
    params: { officeId },
  });
};
