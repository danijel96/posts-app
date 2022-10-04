import apiCall from 'services/apiCall';
import { IParams } from 'types/api';
import { Endpoint } from 'types/enums/APIEndpointEnum';
import { Method } from 'types/enums/MethodEnum';

export const getAllComments = async () => {
  const result = await apiCall({
    url: Endpoint.Comments,
    method: Method.Get,
  });
  return result;
};
export const getCommentsByPostId = async (params: IParams) => {
  const result = await apiCall({
    url: Endpoint.Comments,
    params,
    method: Method.Get,
  });
  return result;
};
