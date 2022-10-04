import axios, { AxiosError } from 'axios';
import { Endpoint } from 'types/enums/APIEndpointEnum';
import { Method } from 'types/enums/MethodEnum';
import { API_URL } from './constant.service';

type APICallProps = {
  url: Endpoint;
  method: Method;
  data?: any;
  urlSuffix?: string | number;
  params?: any;
  contentType?: string;
};
export default async function apiCall({
  url,
  method,
  data,
  urlSuffix,
  params,
  contentType = 'application/json'
}: APICallProps) {
  try {
    const result = await axios({
      baseURL: API_URL,
      url: [url, urlSuffix].filter(Boolean).join('/'),
      method,
      data,
      params,
      headers: {
        'Content-type': contentType
      }
    });
    return { result };
  } catch (error: any) {
    if (error instanceof Error) {
      return {
        error: {
          message: error.message
        }
      };
    }
  }
}
