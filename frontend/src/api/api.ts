import axios, { AxiosInstance } from "axios";

let api: AxiosInstance | undefined;

export const getApi: () => AxiosInstance = () => {
  if (api) return api;

  api = axios.create({
    baseURL: 'http://localhost:4001'
  });

  return api;
}