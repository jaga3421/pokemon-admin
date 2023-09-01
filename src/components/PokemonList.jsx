import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

import { FaPlus } from "react-icons/fa";
import PokemonDetail from "./PokemonDetail";

export default function PokemonList({ pokemons }) {
  return (
    <>
      <Flex justifyContent={"space-between"}>
        {pokemons?.length === 0 ? (
          <Text as="p" fontSize="l" fontWeight="bold" mb={5}>
            No Pokemons Available
          </Text>
        ) : (
          <>
            <Text as="h3">
              <b>Available Pokemons: {pokemons?.length}</b>
            </Text>
          </>
        )}

        {pokemons?.length < 6 && (
          <Button size={"xs"}>
            <FaPlus />
            <Text ml={1}>Add Pokemon</Text>
          </Button>
        )}
      </Flex>
      <PokemonDetail pokemons={pokemons} />
    </>
  );
}
