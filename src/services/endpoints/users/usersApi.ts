import apiCall from 'services/apiCall';
import { Endpoint } from 'types/enums/APIEndpointEnum';
import { Method } from 'types/enums/MethodEnum';

export const getAllUsers = async () => {
  const result = await apiCall({
    url: Endpoint.Users,
    method: Method.Get,
  });
  return result;
};
export const getUserByUserId = async (urlSuffix: number) => {
  const result = await apiCall({
    url: Endpoint.Users,
    urlSuffix,
    method: Method.Get,
  });
  return result;
};
