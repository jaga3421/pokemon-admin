import React from "react";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import TrainerInformation from "../components/TrainerInformation";
import { Flex } from "@chakra-ui/react";
import { trainersContext } from "../trainersContext";

export default function TrainerDetails() {
  const trainers = useContext(trainersContext);
  const { id } = useParams();
  const current = trainers.find((trainer) => trainer.displayName === id);
  console.log(trainers);
  const [trainer, setTrainer] = useState(current);

  useEffect(() => {
    setTrainer(current);
  }, [current]);

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
