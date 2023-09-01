import React from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";
import TrainerCard from "./TrainerCard";

export default function TrainersList({ trainers }) {
  return (
    <>
      {trainers.length === 0 && (
        <Box padding={5} margin={"0 auto"} textAlign={"center"} mt={10}>
          No Results
        </Box>
      )}
      <SimpleGrid
        columns={{ base: 2, md: 4, lg: 6 }}
        spacing={{ base: 2, md: 4 }}
      >
        {trainers.map((trainer) => {
          return <TrainerCard trainer={trainer} key={trainer.id} />;
        })}
      </SimpleGrid>
    </>
  );
}
