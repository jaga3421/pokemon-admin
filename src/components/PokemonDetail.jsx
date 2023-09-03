import { SimpleGrid, Box, Text, Image, Tag, Button } from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";

export default function PokemonDetail({ pokemons, deletePokemon }) {
  const showWarning = (id) => deletePokemon(id);

  return (
    <SimpleGrid
      mt={4}
      columns={{ base: 2, md: 3 }}
      spacing={{ base: 2, md: 4 }}
    >
      {pokemons?.map((pokemon) => (
        <Box
          p={3}
          boxShadow={"md"}
          key={pokemon.id}
          position={"relative"}
          _hover={{
            "&>button": {
              opacity: 1,
            },
          }}
        >
          <Button
            variant="ghost"
            position={"absolute"}
            top={0}
            right={0}
            p={0}
            _hover={{ bg: "transparent" }}
            transition={"all .3s ease"}
            opacity={{ base: 1, md: 0 }}
            onClick={() => showWarning(pokemon.id)}
          >
            <AiOutlineDelete />
          </Button>
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
