import { Box, Text } from "@chakra-ui/react";

export default function AddUserHelpText() {
  return (
    <Box mb={5} p={3} bg={"orange.100"}>
      <Text fontSize={"xs"} mb={5}>
        1. Please fill out the form below to add a new trainer.
      </Text>{" "}
      <Text fontSize={"xs"} mb={5}>
        2. Choose a unique username for the trainer.
      </Text>
      <Text fontSize={"xs"} mb={5}>
        3. Default Pokemons will be added. You can later edit the pokemons
      </Text>
    </Box>
  );
}
