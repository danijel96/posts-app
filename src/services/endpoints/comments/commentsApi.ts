import { Method } from '../../../types/enums/MethodEnum';
import apiCall from '../../apiCall';

interface IParams {
  postId: string;
}
export const getAllComments = async () => {
  const result = await apiCall({
    url: 'comments',
    method: Method.Get,
  });
  return result;
};
export const getCommentsByPostId = async (params: IParams) => {
  const result = await apiCall({
    url: 'comments',
    params,
    method: Method.Get,
  });
  return result;
};
