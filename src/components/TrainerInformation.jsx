import {
  Box,
  Heading,
  Image,
  Text,
  useColorModeValue,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";

const TrainerInformation = ({ trainer }) => {
  return (
    <Container maxW={"1600px"} p="6">
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        spacing={10}
        marginTop={{ base: "1", sm: "5" }}
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box zIndex="2" marginLeft={{ base: "0", sm: "5%" }} marginTop="5%">
            <Box textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                borderRadius="lg"
                src={trainer.profile}
                alt={trainer.fullName}
                objectFit="contain"
              />
            </Box>
          </Box>
        </Box>

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
            Global Rank: {trainer.rank}
          </Text>
        </Box>

        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          marginTop={{ base: "3", sm: "0" }}
        >
          <Text as="b">Available Pokemons</Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default TrainerInformation;
