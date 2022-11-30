import axios, { AxiosInstance } from "axios";

// const host = process.env.PUBLIC_URL;

//api instance 모듈화
export const api: AxiosInstance = axios.create({
  baseURL: `https://pokeapi.com/api/v2`,
});
