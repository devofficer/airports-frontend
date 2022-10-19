import axios, { AxiosResponse } from 'axios';

import { AVIATIONSTACK_API_ENDPOINT } from '../config';

const aviationstackService = axios.create({
  baseURL: AVIATIONSTACK_API_ENDPOINT,
  headers: {
    'x-requested-with': ''
  },
  params: {
    access_key: process.env.REACT_APP_AVIATIONSTACK_API_KEY
  }
});

aviationstackService.interceptors.response.use((res: AxiosResponse<any, any>) => {
  return res.data;
});

export default aviationstackService;
