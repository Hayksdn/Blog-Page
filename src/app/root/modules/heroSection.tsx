import { Button, Flex, Input, InputGroup, Text } from "@chakra-ui/react";
import SearchIcon from "@/shared/assets/icons/search";
interface HeroSectionProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const HeroSection = ({ searchTerm, setSearchTerm }: HeroSectionProps) => {
  return (
    <Flex
      w="full"
      flexDir="column"
      gap="1.4rem"
      align="center"
      bg="#F9F5FF"
      py="2rem"
    >
      <Button
        color="#6941C6"
        bg="#F3EBFF"
        w="fit-content"
        p="0.8rem"
        h="1.4rem"
        fontSize="14px"
        rounded="2xl"
        fontWeight="medium"
      >
        Our blog
      </Button>

      <Text
        fontSize={{ base: "28px", sm: "32px", md: "48px" }}
        color="#42307D"
        fontWeight="semibold"
        textAlign="center"
      >
        Resources and insights
      </Text>
      <Text
        color="#6941C6"
        maxW={{ base: "90%", sm: "80%", md: "600px" }}
        textAlign="center"
      >
        The latest industry news, interviews, technologies, and resources.
      </Text>
      <Flex>
        <InputGroup startElement={<SearchIcon />}>
          <Input
            w={{ base: "90%", sm: "80%", md: "320px" }}
            placeholder="Search"
            border="1px solid #D0D5DD"
            color="#667085"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputGroup>
      </Flex>
    </Flex>
  );
};

export default HeroSection;
