import React from "react";
import { useEffect, useState } from "react";
import { getTrainers } from "../api/service";
import { useParams } from "react-router-dom";
import TrainerInformation from "../components/TrainerInformation";

export default function TrainerDetails() {
  const { id } = useParams();
  const [trainer, setTrainer] = useState(null);

  useEffect(() => {
    const getAllTrainers = async () => {
      const trainersList = await getTrainers();
      const result = trainersList.find((trainer) => trainer.displayName === id);
      setTrainer(result);
    };
    getAllTrainers();
  }, []);

  return (
    <>
      {!trainer?.id ? "Please wait" : <TrainerInformation trainer={trainer} />}
    </>
  );
}
