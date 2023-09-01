import React from "react";
import { getTrainers } from "../api/service";
import { useEffect, useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { Box, Text } from "@chakra-ui/react";
import TrainersList from "../components/TrainersList";

export default function AllTrainers() {
  const [trainers, setTrainers] = useState([]);
  const [filteredTrainers, setFilteredTrainers] = useState([]);

  useEffect(() => {
    const getAllTrainers = async () => {
      const trainersList = await getTrainers();
      setTrainers(trainersList);
      setFilteredTrainers(trainersList);
    };
    getAllTrainers();
  }, []);

  const searchAction = (searchValue) => {
    const result = trainers.filter((trainer) => {
      return (
        trainer.fullName.toLowerCase().includes(searchValue.toLowerCase()) ||
        trainer.displayName.toLowerCase().includes(searchValue.toLowerCase())
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
