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
        height={"100%"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"md"}
        rounded={"md"}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={trainer.pokemons.length < 3 ? "transparent" : "green.400"}
      >
        <Link to={`/trainer/${trainer.displayName}`}>
          <Flex justify={"center"} mt={2}>
            <Avatar size={"xl"} src={trainer.profile} />
          </Flex>

          <Box p={{ base: 3, sm: 6 }}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Heading fontSize={"lg"} fontWeight={500} fontFamily={"body"}>
                {trainer.fullName}
              </Heading>
              <Text color={"gray.500"} wordBreak={"break-all"} fontSize={"sm"}>
                @{trainer.displayName}
              </Text>
            </Stack>

            <Stack direction={"row"} justify={"center"} spacing={6}>
              <Stack spacing={0} align={"center"}>
                <Text fontSize={"xs"}>
                  {trainer.pokemons.length === 0
                    ? "No Pokemons"
                    : `${trainer.pokemons.length} Pokemon${
                        trainer.pokemons.length > 1 ? "s" : ""
                      }`}
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Link>
      </Box>
    </Center>
  );
}
