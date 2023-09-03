import { Box, Text } from "@chakra-ui/react";

export default function AddPokemonHelpText() {
  return (
    <Box mb={5} p={3} bg={"orange.100"}>
      <Text fontSize={"xs"} mb={5}>
        Please enter the full Pokemon name to search and add to the trainer.
      </Text>{" "}
    </Box>
  );
}
