import axios from "axios";
import { API_URL } from "../config";

export const getTrainers = async () => {
  const { data } = await axios.get(API_URL.defaultTrainers);
  return data;
};

export const getTrainerInfo = async (displayName) => {
  const { data } = await axios.get(API_URL.defaultTrainers);
  return data.find((trainer) => trainer.displayName === displayName);
};

// get pikachu details
