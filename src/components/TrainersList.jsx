import {
  SimpleGrid,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  useDisclosure,
  Text,
  useToast,
} from "@chakra-ui/react";
import TrainerCard from "./TrainerCard";
import { TrainersContext } from "../TrainersContext";
import { useContext, useState } from "react";

export default function TrainersList({ trainers }) {
  // eslint-disable-next-line no-unused-vars
  const toast = useToast();
  const [ctxTrainer, setTrainers] = useContext(TrainersContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedTrainer, setSelectedTrainer] = useState({});

  const deleteTrainer = (trainer) => {
    setSelectedTrainer(trainer);
    onOpen();
  };

  const confirmDelete = () => {
    const item = trainers.filter(
      (trainer) => trainer.displayName !== selectedTrainer.displayName
    );

    toast({
      title: `${selectedTrainer.displayName}`,
      description: `${selectedTrainer.fullName} has been deleted.`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    onClose();
    setTrainers(item);
  };

  return (
    <>
      {trainers?.length === 0 && (
        <Box padding={5} margin={"0 auto"} textAlign={"center"} mt={10}>
          No Results
        </Box>
      )}
      <SimpleGrid
        columns={{ base: 2, md: 4, lg: 6 }}
        spacing={{ base: 2, md: 4 }}
      >
        {trainers?.map((trainer) => {
          return (
            <TrainerCard
              trainer={trainer}
              deleteTrainer={deleteTrainer}
              key={trainer.id}
            />
          );
        })}
      </SimpleGrid>

      {/* Confirmation Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete @{selectedTrainer.displayName}</ModalHeader>
          <ModalBody>
            <Text mb={2}>
              Are you sure you want to delete {selectedTrainer.fullName}?
            </Text>
            <Text fontSize={"sm"}>
              This action is irreversible. All the pokemons associated with this
              trainer will be deleted.
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
