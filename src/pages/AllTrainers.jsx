import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { SearchBar } from "../components/SearchBar";
import { Box, Text } from "@chakra-ui/react";
import TrainersList from "../components/TrainersList";
import { TrainersContext } from "../TrainersContext";

export default function AllTrainers() {
  const [trainers] = useContext(TrainersContext);
  console.log(trainers);
  const [filteredTrainers, setFilteredTrainers] = useState([]);

  useEffect(() => {
    setFilteredTrainers([...trainers]);
  }, [trainers]);

  const searchAction = (searchValue) => {
    const result = trainers.filter((trainer) => {
      return (
        trainer.fullName?.toLowerCase().includes(searchValue.toLowerCase()) ||
        trainer.displayName?.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
    setFilteredTrainers(result);
  };

  return (
    <>
      <Box padding={5} maxW={"1400px"} margin={"0 auto"}>
        <Text as="h1" fontSize="2xl" fontWeight="bold" mb={5}>
          All Trainers
        </Text>

        <SearchBar searchAction={searchAction} />
        <TrainersList trainers={filteredTrainers} />
      </Box>
    </>
  );
}
