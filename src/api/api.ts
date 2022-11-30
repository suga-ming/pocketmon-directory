import axios from "axios";

const Base_URL = "https://pokeapi.co/api/v2";

export const getPocketList = async (id?: string): Promise<any> => {
  return await axios.get(`${Base_URL}/pokemon`).then((res) => res.data);
};

export const getPocketDetail = async (name?: string): Promise<any> => {
  return await axios.get(`${Base_URL}/pokemon/${name}`).then((res) => res.data);
};
