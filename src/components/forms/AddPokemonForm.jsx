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
} from "@chakra-ui/react";

import { FaPlus, FaSearch } from "react-icons/fa";
import AddPokemonHelpText from "../helpText/AddPokemonHelpText";
import { useContext } from "react";
import { TrainersContext } from "../../TrainersContext";
import { addPokemonToUser } from "../../api/service";

export default function AddPokemonForm({ trainerId }) {
  const [trainers, setTrainers] = useContext(TrainersContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const searchPokemon = () => {
    console.log("Search Pokemon");
  };

  const addToUser = (pokemon, trainerId) => {
    console.log("Add to User");

    setTrainers(addPokemonToUser(pokemon, trainers, trainerId));
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
          <DrawerHeader onClick={addToUser}>Add New Pokemon</DrawerHeader>

          <DrawerBody>
            <AddPokemonHelpText />
            <InputGroup size="md">
              <Input placeholder="Search Pokemon" variant={"flushed"} />
              <InputRightElement width="4.5rem">
                <Button size="sm" onClick={searchPokemon}>
                  <FaSearch color="orange" />
                </Button>
              </InputRightElement>
            </InputGroup>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
