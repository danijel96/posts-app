import { Method } from '../../../types/enums/MethodEnum';
import apiCall from '../../apiCall';

export const getAllUsers = async () => {
  const result = await apiCall({
    url: 'users',
    method: Method.Get,
  });
  return result;
};
