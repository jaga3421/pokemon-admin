import {
  Flex,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
} from "@chakra-ui/react";
import { Search2Icon, AddIcon } from "@chakra-ui/icons";

export const SearchBar = ({ searchAction }) => {
  return (
    <Flex
      boxShadow={"md"}
      borderRadius={5}
      padding={5}
      bg={"white"}
      justifyContent={"space-between"}
      alignItems={"center"}
      mb={5}
    >
      <InputGroup borderRadius={5} size="sm">
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="orange.600" />}
        />
        <Input
          type="text"
          placeholder="Trainer's name or handle "
          onChange={(e) => searchAction(e.target.value.trim())}
          variant={"flushed"}
        />
        <InputRightAddon marginLeft={{ base: 2, md: 16 }} p={0} border="none">
          <Button
            as={"a"}
            size={"sm"}
            fontSize={"sm"}
            fontWeight={600}
            href={"#"}
            _hover={{
              bg: "orange.300",
            }}
          >
            <AddIcon marginRight={{ base: 2, md: 4 }} />
            Add New Trainer
          </Button>
        </InputRightAddon>
      </InputGroup>
    </Flex>
  );
};
