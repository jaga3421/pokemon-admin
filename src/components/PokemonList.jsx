import {
  Button,
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalBody,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { TrainersContext } from "../TrainersContext";

import PokemonDetail from "./PokemonDetail";
import AddPokemonForm from "./forms/AddPokemonForm";

export default function PokemonList({ pokemons, trainerId }) {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [todelete, setTodelete] = useState(null);
  const [trainers, setTrainers] = useContext(TrainersContext);

  const deletePokemon = (id) => {
    setTodelete(id);
    onOpen();
  };

  const confirmDelete = () => {
    const newPokemons = pokemons.filter((pokemon) => pokemon.id !== todelete);
    onClose();
    const newTrainers = trainers.map((trainer) => {
      if (trainer.id === trainerId) {
        return {
          ...trainer,
          pokemons: newPokemons,
        };
      }
      return trainer;
    });

    setTrainers(newTrainers);
    toast({
      title: "Pokemon Deleted.",
      description: "The pokemon has been deleted.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };
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

        {pokemons?.length < 6 && <AddPokemonForm trainerId={trainerId} />}
      </Flex>
      <PokemonDetail pokemons={pokemons} deletePokemon={deletePokemon} />

      {/* Confirmation Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Pokemon</ModalHeader>
          <ModalBody>
            <Text fontSize={"sm"}>
              Are you sure you want to delete this pokemon? There is a tiny
              chance, the pokemon <b>will get angry </b>and attack you.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="orange" mr={3} onClick={confirmDelete}>
              Yes, Delete
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
