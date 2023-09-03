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
  // FormErrorMessage,
  // FormHelperText,
  Textarea,
  useDisclosure,
  Text,
} from "@chakra-ui/react";

import { useState, useContext } from "react";
import { TrainersContext } from "../../TrainersContext";
import { FaEdit } from "react-icons/fa";

export default function EditUserForm({ trainer }) {
  const [trainers, setTrainers] = useContext(TrainersContext);
  const [fullName, setFullName] = useState(trainer.fullName);
  const [globalRank, setGlobalRank] = useState(trainer.rank);
  const [bio, setBio] = useState(trainer.bio);
  const { onOpen, isOpen, onClose } = useDisclosure();

  const editTrainer = () => {
    const newTrainer = {
      id: trainer.id,
      displayName: trainer.displayName,
      fullName: fullName,
      rank: globalRank,
      bio: bio,
      joined: trainer.joined,
      pokemons: trainer.pokemons,
      profile: trainer.profile,
    };
    const newTrainers = trainers.map((trainer) => {
      if (trainer.id === newTrainer.id) {
        return newTrainer;
      }
      return trainer;
    });
    setTrainers(newTrainers);
    onClose();
  };

  return (
    <>
      <Button mt={5} size={"xs"} onClick={onOpen} variant="link">
        <FaEdit />
        <Text ml={1}>Edit Trainer</Text>
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Edit {trainer.fullName}</DrawerHeader>

          <DrawerBody>
            {/* New User Form */}

            <FormControl mb={5}>
              <FormLabel mb={-0} fontSize={"sm"}>
                Username
              </FormLabel>
              <Input
                variant={"flushed"}
                type="text"
                value={trainer.displayName}
                disabled
                autoFocus
              />
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
              onClick={editTrainer}
              isDisabled={
                !(
                  fullName.trim().length > 0 &&
                  globalRank.trim().length > 0 &&
                  bio.trim().length > 0
                )
              }
            >
              Update Trainer
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
