import React from "react";
import { useEffect, useState } from "react";
import { getTrainerInfo } from "../api/service";
import { useParams } from "react-router-dom";
import TrainerInformation from "../components/TrainerInformation";
import { Flex } from "@chakra-ui/react";

export default function TrainerDetails() {
  const { id } = useParams();
  const [trainer, setTrainer] = useState(null);

  useEffect(() => {
    const getAllTrainers = async () => {
      const result = await getTrainerInfo(id);
      setTrainer(result);
    };
    getAllTrainers();
  }, [id]);

  return (
    <>
      {!trainer?.id ? (
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          height={"80vh"}
          width={"100%"}
        >
          Please wait
        </Flex>
      ) : (
        <TrainerInformation trainer={trainer} />
      )}
    </>
  );
}
