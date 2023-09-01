import { SimpleGrid, Box, Text, Image, Tag } from "@chakra-ui/react";
import React from "react";

export default function PokemonDetail({ pokemons }) {
  return (
    <SimpleGrid
      mt={4}
      columns={{ base: 2, md: 3 }}
      spacing={{ base: 2, md: 4 }}
    >
      {pokemons?.map((pokemon) => (
        <Box p={3} boxShadow={"md"} key={pokemon.id}>
          <Image
            boxSize={100}
            src={pokemon.image}
            alt={pokemon.name}
            margin={"0 auto"}
            borderRadius={"md"}
          />
          <Text my={3} align={"center"}>
            {pokemon.name}
          </Text>
          {pokemon.abilities?.map((ability, i) => (
            <Tag size={"sm"} key={i} ml={1} colorScheme="orange">
              {ability}
            </Tag>
          ))}
          <Box></Box>
        </Box>
      ))}
    </SimpleGrid>
  );
}
