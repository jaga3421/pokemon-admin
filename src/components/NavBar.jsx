"use client";

import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
  Tooltip,
} from "@chakra-ui/react";
import { useContext } from "react";
import { TrainersContext } from "../TrainersContext";

export default function WithSubnavigation() {
  const [trainers] = useContext(TrainersContext);
  const eligibleTrainers = trainers.filter((trainer) => {
    return trainer.pokemons?.length >= 3;
  });
  const battleReady = eligibleTrainers.length >= 8;
  const toolTipLabel = battleReady
    ? `${eligibleTrainers.length} are available for battle`
    : "Atleast 8 Trainer with minimum of 3 Pokemon are required to start a tournament";

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex flex={{ base: 1 }}>
          <Text
            fontFamily={"heading"}
            as={"b"}
            color={useColorModeValue("gray.800", "white")}
          >
            <Link to="/">PokéClàsh</Link>
          </Text>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Tooltip label={toolTipLabel}>
            <Button
              as={"a"}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={battleReady ? "orange.400" : "gray.300"}
              href={"#"}
              _hover={{
                bg: battleReady ? "orange.300" : "",
              }}
              cursor={battleReady ? "pointer" : "not-allowed"}
            >
              Start Tournament ({eligibleTrainers.length})
            </Button>
          </Tooltip>
        </Stack>
      </Flex>
    </Box>
  );
}
