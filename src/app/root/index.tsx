import HeroSection from "./modules/heroSection";
import BlogSection from "./modules/blogSection";
import { useState } from "react";
import { Button, Flex } from "@chakra-ui/react";
import ArrowDownIcon from "@/shared/assets/icons/arrowDown";
const Root = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <HeroSection searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <BlogSection searchTerm={searchTerm} />
      <Flex w="full" justify="center">
        <Button
          color="#6941C6"
          bg="#F3EBFF"
          w="fit-content"
          p="1.5rem"
          h="1.7rem"
          fontSize="14px"
          rounded="xl"
          fontWeight="medium"
        >
          <ArrowDownIcon />
          Load More
        </Button>
      </Flex>
    </>
  );
};

export default Root;
