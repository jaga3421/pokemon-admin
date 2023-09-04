import arrayShuffle from "array-shuffle";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Box,
  Button,
  Text,
  Grid,
  GridItem,
  Avatar,
  Flex,
} from "@chakra-ui/react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

import { useState } from "react";

export default function Tournament({ isOpen, onClose, trainers }) {
  // eslint-disable-next-line no-unused-vars
  const [battleProgress, setBattleProgress] = useState(true);
  const { width, height } = useWindowSize();

  const trainersCopy = arrayShuffle(
    trainers.length % 2 === 0
      ? [...trainers]
      : [...trainers, { id: "dummy", displayName: "AI", pokemons: [] }]
  );

  const winner = trainersCopy[Math.floor(Math.random() * trainersCopy.length)];

  //   useEffect(() => {}, []);

  return (
    <Box>
      <Modal onClose={onClose} size={"full"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mt={8}>
            <Text
              fontFamily={"heading"}
              as={"p"}
              background={"orange"}
              p={5}
              align={"center"}
            >
              PokéClàsh - Tournament Zone
            </Text>
          </ModalHeader>

          <ModalBody>
            <Box fontSize={"sm"} align={"center"} w={"100%"}>
              Trainers are matched randomly. You cannot edit Trainers or their
              Pokemons <b>Battle is in progress</b>
            </Box>
            <Box my={5}>
              <Box maxW={"md"} mx={"auto"}>
                <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                  {trainersCopy.map((trainer) => {
                    return (
                      <GridItem
                        key={trainer.id}
                        bg="gray.100"
                        boxShadow={"md"}
                        borderRadius={5}
                        p={3}
                      >
                        <Text as="p" fontSize="sm" align={"center"}>
                          {trainer.displayName}
                        </Text>
                        <Text as="p" fontSize="sm" align={"center"}>
                          {trainer.pokemons.length} Pokemons
                        </Text>
                      </GridItem>
                    );
                  })}
                </Grid>
                <Text align={"center"} my="5">
                  Battle is over.. And the winner is {winner.displayName}
                </Text>
                <Flex justify={"center"}>
                  <Avatar src={winner.profile} margin={"0 auto"} size={"lg"} />
                </Flex>

                <Box
                  position={"fixed"}
                  top={0}
                  left={0}
                  height={"100vh"}
                  width={"100vw"}
                >
                  <Confetti width={width} height={height} />
                </Box>
              </Box>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} colorScheme="red">
              End Tournament
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
