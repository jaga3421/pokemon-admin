import {
  Box,
  Heading,
  Image,
  Text,
  useColorModeValue,
  Container,
  Grid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
  Avatar,
  Tag,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import { MdOutlineKeyboardBackspace } from "react-icons/md";
import PokemonList from "./PokemonList";
import EditUserForm from "./forms/EditUserForm";

const TrainerInformation = ({ trainer }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Container maxW={"1200px"} p="6">
      <Box w={"100px"}>
        <Link to="/">
          <Flex alignItems={"center"}>
            <MdOutlineKeyboardBackspace />
            <Text as="span" ml={2} fontSize={"xs"}>
              All Trainers
            </Text>
          </Flex>
        </Link>
      </Box>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 2fr" }}
        gap={4}
        marginTop={{ base: "1", sm: "5" }}
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          position="relative"
          alignItems="center"
          flexDirection={"column"}
          p={5}
          background={useColorModeValue("white", "gray.900")}
          borderRadius={"md"}
          boxShadow={"sm"}
        >
          {trainer.profile ? (
            <>
              <Image
                borderRadius="full"
                boxSize={"200px"}
                src={trainer.profile}
                alt={trainer.fullName}
                objectFit="cover"
                onClick={onOpen}
                cursor={"pointer"}
              />
              <Modal size={"2xl"} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalCloseButton />
                  <ModalBody p={3} display={"flex"} justifyContent={"center"}>
                    <Image
                      w={"90vw"}
                      src={trainer.profile}
                      alt={trainer.fullName}
                      objectFit={"contain"}
                    />
                  </ModalBody>
                </ModalContent>
              </Modal>
            </>
          ) : (
            <Avatar src={trainer.profile} size={"2xl"} />
          )}
          <Box textDecoration="none" _hover={{ textDecoration: "none" }}></Box>

          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            marginTop={{ base: "3", sm: "0" }}
          >
            <Heading marginTop="1">
              <Text textDecoration="none" _hover={{ textDecoration: "none" }}>
                {trainer.fullName}
              </Text>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
            >
              @{trainer.displayName}
            </Text>{" "}
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="sm"
            >
              {trainer.bio}
            </Text>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="sm"
            >
              <b>Global Rank</b>: {trainer.rank}
            </Text>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="sm"
            >
              <b>Member Since</b>: {trainer.joined}
            </Text>
            <Tag
              p={2}
              marginTop="2"
              display={"span"}
              w={"40"}
              align={"center"}
              color={useColorModeValue("white", "gray.200")}
              fontSize="xx-small"
              fontStyle={"bold"}
              borderRadius={"full"}
              background={trainer.pokemons.length >= 3 ? "green.400" : "red"}
            >
              {trainer.pokemons.length >= 3
                ? "Eligible for Battle"
                : "Not Eligible for Battle"}
            </Tag>
          </Box>
          <EditUserForm trainer={trainer} />
        </Box>

        <Box
          p={5}
          background={useColorModeValue("white", "gray.900")}
          borderRadius={"md"}
          boxShadow={"sm"}
          marginTop={{ base: "3", sm: "0" }}
        >
          <PokemonList pokemons={trainer.pokemons} trainerId={trainer.id} />
        </Box>
      </Grid>
    </Container>
  );
};

export default TrainerInformation;
