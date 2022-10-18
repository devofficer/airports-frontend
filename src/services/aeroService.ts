import axios, { AxiosResponse } from 'axios';

import { AERO_API_SERVER } from '../config';

const aeroService = axios.create({
  baseURL: AERO_API_SERVER,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'x-apikey': process.env.REACT_APP_AERO_API_KEY,
    'x-requested-with': 'http://localhost:3000'
  },
});

aeroService.interceptors.response.use((res: AxiosResponse<any, any>) => {
  return res.data;
});

export default aeroService;
