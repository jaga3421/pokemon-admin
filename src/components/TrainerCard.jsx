import {
  Heading,
  Avatar,
  Box,
  Center,
  Flex,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

export default function TrainerCard({ trainer }) {
  return (
    <Center>
      <Box
        maxW={"270px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"md"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Link to={`/trainer/${trainer.displayName}`}>
          <Flex justify={"center"} mt={2}>
            <Avatar size={"xl"} src={trainer.profile} />
          </Flex>

          <Box p={6}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Heading fontSize={"xl"} fontWeight={500} fontFamily={"body"}>
                {trainer.fullName}
              </Heading>
              <Text color={"gray.500"}>@{trainer.displayName}</Text>
            </Stack>

            <Stack direction={"row"} justify={"center"} spacing={6}>
              <Stack spacing={0} align={"center"}>
                <Text fontSize={"sm"}>6 Pokemons</Text>
              </Stack>
            </Stack>
          </Box>
        </Link>
      </Box>
    </Center>
  );
}
