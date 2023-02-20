import axios, { AxiosResponse } from "axios";
import { todosT, users } from "./types";

export const getUser = async () => {
  let res: AxiosResponse<users[]> = await axios.get(
    `https://jsonplaceholder.typicode.com/users`
  );
  return res.data;
};

export const getTodo = async (id: number) => {
  let res: AxiosResponse<todosT[]> = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}/todos`
  );
  return res.data;
};
