import { Method } from '../../../types/enums/MethodEnum';
import apiCall from '../../apiCall';

export const getAllPosts = async () => {
  const result = await apiCall({
    url: 'posts',
    method: Method.Get,
  });
  return result;
};

export const getPostById = async (urlSuffix: string) => {
  const result = await apiCall({
    url: 'posts',
    urlSuffix,
    method: Method.Get,
  });
  return result;
};

export const getPostByUserId = async (params: { userId: string }) => {
  const result = await apiCall({
    url: 'posts',
    params,
    method: Method.Get,
  });
  return result;
};
