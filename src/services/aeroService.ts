import axios, { AxiosResponse } from 'axios';

import { AERO_API_ENDPOINT } from '../config';

const aeroService = axios.create({
  baseURL: AERO_API_ENDPOINT,
  headers: {
    'content-type': 'application/json; charset=utf-8',
    'x-apikey': process.env.REACT_APP_AERO_API_KEY,
    'x-requested-with': ''
  },
});

aeroService.interceptors.response.use((res: AxiosResponse<any, any>) => {
  return res.data;
});

export default aeroService;
