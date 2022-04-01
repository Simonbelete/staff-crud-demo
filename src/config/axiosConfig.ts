/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios, { AxiosResponse } from "axios";

export interface IRes {
  data: any;
}

const BASE_URL = `http://127.0.0.1:${process.env.API_PORT || 4000}`;

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

if (typeof window !== "undefined") {
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response as IRes;
    },
    (error) => {
      return Promise.reject(error.response);
    }
  );
}

export default instance;
