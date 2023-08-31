import React from "react";
import { useEffect, useState } from "react";
import { getTrainerInfo } from "../api/service";
import { useParams } from "react-router-dom";
import TrainerInformation from "../components/TrainerInformation";

export default function TrainerDetails() {
  const { id } = useParams();
  const [trainer, setTrainer] = useState(null);

  useEffect(() => {
    const getAllTrainers = async () => {
      const result = await getTrainerInfo(id);
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
