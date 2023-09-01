import { createContext } from "react";

export const TrainersContext = createContext({
  trainers: [],
  setTrainers: () => {},
});
