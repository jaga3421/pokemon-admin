import axios from "axios";
import { API_URL } from "../config";

export const getTrainers = async () => {
  const { data } = await axios.get(API_URL.defaultTrainers);

  return data;
};
