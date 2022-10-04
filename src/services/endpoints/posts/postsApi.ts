import apiCall from 'services/apiCall';
import { Endpoint } from 'types/enums/APIEndpointEnum';
import { Method } from 'types/enums/MethodEnum';

export const getAllPosts = async () => {
  const result = await apiCall({
    url: Endpoint.Posts,
    method: Method.Get,
  });
  return result;
};

export const getPostById = async (urlSuffix: string) => {
  const result = await apiCall({
    url: Endpoint.Posts,
    urlSuffix,
    method: Method.Get,
  });
  return result;
};

export const getPostByUserId = async (params: { userId: string }) => {
  const result = await apiCall({
    url: Endpoint.Posts,
    params,
    method: Method.Get,
  });
  return result;
};
