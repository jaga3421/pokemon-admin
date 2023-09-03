import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
  Text,
  InputGroup,
  InputRightElement,
  useDisclosure,
  Image,
  Box,
  useToast,
} from "@chakra-ui/react";

import { FaPlus, FaSearch } from "react-icons/fa";
import AddPokemonHelpText from "../helpText/AddPokemonHelpText";
import { useContext, useState } from "react";
import { TrainersContext } from "../../TrainersContext";
import { addPokemonToUser, searchPokemon } from "../../api/service";

export default function AddPokemonForm({ trainerId }) {
  const toast = useToast();

  const [trainers, setTrainers] = useContext(TrainersContext);
  const [search, setSearch] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedPokemon, setSelectedPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const lookUp = async () => {
    setIsLoading(true);
    const response = await searchPokemon(search);
    if (response.id) {
      setSelectedPokemon(response);
      setIsLoading(false);
      setIsError(false);
      console.log(response);
    } else {
      setIsLoading(false);
      setIsError(true);
    }
  };

  const addToUser = (pokemon, trainerId) => {
    const pokemonObj = {
      id: Math.floor(Math.random() * 1000),
      name: pokemon.name,
      image: pokemon.sprites?.other["official-artwork"].front_default,
      abilities: pokemon.abilities?.map((ability) => ability.ability.name),
    };

    setTrainers(addPokemonToUser(pokemonObj, trainers, trainerId));

    toast({
      title: "Pokemon Added.",
      description: `${pokemon.name} has been added to Trainer's collection.`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    setIsError(false);
    setIsLoading(false);
    setSelectedPokemon({});
    setSearch("");
  };

  return (
    <>
      <Button size={"xs"} onClick={onOpen}>
        <FaPlus />
        <Text ml={1}>Add Pokemon</Text>
      </Button>

      {/* Form */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Add New Pokemon</DrawerHeader>

          <DrawerBody>
            <>
              <AddPokemonHelpText />
              <InputGroup size="md">
                <Input
                  placeholder="Search Pokemon"
                  variant={"flushed"}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  autoFocus
                />
                <InputRightElement width="4.5rem">
                  <Button size="sm" onClick={lookUp}>
                    <FaSearch color="orange" />
                  </Button>
                </InputRightElement>
              </InputGroup>

              {/* Loading screen */}
              {isLoading && (
                <Text as="p" fontSize="sm" mt={5}>
                  Loading...
                </Text>
              )}

              {/* Error screen */}
              {isError && (
                <Text as="p" fontSize="sm" mt={5}>
                  Pokemon not found. Please try again.
                </Text>
              )}

              {/* Pokemon Found */}
              {selectedPokemon.id && (
                <Box boxShadow={"md"} borderRadius={5} mt={5} p={3}>
                  <Text as="p" fontSize="sm" mt={5} align={"center"}>
                    {selectedPokemon.name} found!
                  </Text>
                  <Image
                    src={
                      selectedPokemon.sprites?.other["official-artwork"]
                        .front_default
                    }
                    alt={selectedPokemon.name}
                    boxSize={100}
                    margin={"0 auto"}
                    borderRadius={"md"}
                  />
                  <Button
                    m={"5px auto"}
                    display={"block"}
                    size={"sm"}
                    colorScheme="orange"
                    onClick={() => addToUser(selectedPokemon, trainerId)}
                  >
                    Add Pokemon
                  </Button>
                </Box>
              )}
            </>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
