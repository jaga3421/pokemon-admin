"use client";

import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

export default function WithSubnavigation() {
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
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"orange.400"}
            href={"#"}
            _hover={{
              bg: "orange.300",
            }}
          >
            Start Tournament
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}
