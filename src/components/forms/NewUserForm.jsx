import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Textarea,
  Text,
  Box,
} from "@chakra-ui/react";

import { useState, useContext } from "react";
import { TrainersContext } from "../../TrainersContext";
import { defaultPokemon } from "../../api/defaultValues";
import { checkUniqueUserName } from "../../api/service";
import AddUserHelpText from "../helpText/AddUserHelpText";

export default function NewUserForm({ isOpen, onOpen, onClose }) {
  const [trainers, setTrainers] = useContext(TrainersContext);
  const [isError, setIsError] = useState(false);
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [globalRank, setGlobalRank] = useState("");
  const [bio, setBio] = useState("");
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(false);

  const addNewTrainer = () => {
    const newTrainer = {
      id: Math.floor(Math.random() * 1000),
      displayName: username,
      fullName: fullName,
      rank: globalRank,
      pokemons: [...defaultPokemon],
      bio: bio,
      joined: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
    };
    const newTraines = [...trainers, newTrainer];
    setTrainers(newTraines);
    onClose();
    reset();
  };

  const checkUserName = (e) => {
    const currentUserName = e.target.value;
    setUsername(currentUserName);
    if (
      currentUserName.trim().length > 0 &&
      checkUniqueUserName(currentUserName, trainers)
    ) {
      setIsUsernameAvailable(true);
      setIsError(false);
    } else {
      setIsUsernameAvailable(false);
      setIsError(true);
    }
  };

  const reset = () => {
    setUsername("");
    setFullName("");
    setGlobalRank("");
    setBio("");
    setIsUsernameAvailable(false);
    setIsError(false);
  };

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Add New Trainer</DrawerHeader>

          <DrawerBody>
            {/* New User Form */}
            <AddUserHelpText />
            <FormControl mb={5} isInvalid={isError}>
              <FormLabel mb={-0} fontSize={"sm"}>
                Choose Username
              </FormLabel>
              <Input
                variant={"flushed"}
                type="text"
                value={username}
                onChange={checkUserName}
                autoFocus
              />
              {!!(username.trim().length > 0) &&
                (isUsernameAvailable ? (
                  <FormHelperText color={"green"}>
                    Username available
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>Username is not available</FormErrorMessage>
                ))}
            </FormControl>
            <FormControl mb={5}>
              <FormLabel mb={-0} fontSize={"sm"}>
                Full Name
              </FormLabel>
              <Input
                variant={"flushed"}
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </FormControl>
            <FormControl mb={5}>
              <FormLabel mb={2} fontSize={"sm"}>
                Your Short Bio
              </FormLabel>
              <Textarea value={bio} onChange={(e) => setBio(e.target.value)} />
            </FormControl>
            <FormControl mb={5}>
              <FormLabel mb={-0} fontSize={"sm"}>
                Global Rank
              </FormLabel>
              <Input
                variant={"flushed"}
                type="number"
                value={globalRank}
                onChange={(e) => setGlobalRank(e.target.value)}
              />
            </FormControl>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme="orange"
              onClick={addNewTrainer}
              isDisabled={
                !(
                  isUsernameAvailable &&
                  fullName.trim().length > 0 &&
                  globalRank.trim().length > 0 &&
                  bio.trim().length > 0
                )
              }
            >
              Create New
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
