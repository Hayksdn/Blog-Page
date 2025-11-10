import { CustomContainer } from "@/shared/layout/container";
import { Flex, Grid, Image, Text } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import { articles } from "@/data/mockData";
import ArrowIcon from "@/shared/assets/icons/arrow";
import { NavLink } from "react-router-dom";
import type { Article } from "@/shared/types/article";

interface BlogSectionProps {
  searchTerm: string;
}

const BlogSection = ({ searchTerm }: BlogSectionProps) => {
  const filteredArticles: Article[] = searchTerm
    ? articles.filter((article) =>
        (article.title + article.description)
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    : articles;

  return (
    <CustomContainer variant="container" mx="auto">
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        {filteredArticles.map((article) => (
          <Card.Root
            key={article.id}
            border="none"
            opacity={1}
            p="24px 24px 32px 24px"
            boxShadow="0px 4px 6px -2px #10182808, 0px 12px 16px -4px #10182814"
            display="flex"
            flexDirection="column"
            rounded="none"
            gap="32px"
          >
            <Card.Header p={0}>
              <Image src={article.image} />
            </Card.Header>
            <Card.Body p="0" display="flex" flexDir="column">
              <Text color="#6941C6" fontSize="14px" fontWeight="semibold">
                {article.category}
              </Text>
              <Flex flexDir="column" gap="12px">
                <Flex position="relative">
                  <Text
                    color="#101828"
                    fontSize="24px"
                    fontWeight="semibold"
                    maxW="300px"
                  >
                    {article.title}
                  </Text>
                  <NavLink
                    to="/"
                    style={{ position: "absolute", top: 10, right: 0 }}
                  >
                    <ArrowIcon />
                  </NavLink>
                </Flex>

                <Text color="#667085" fontSize="16px">
                  {article.description}
                </Text>
              </Flex>
            </Card.Body>
            <Card.Footer p="0">
              <Flex flexDir="row" gap="12px">
                <Image
                  src={article.avatar}
                  rounded="50%"
                  w="40px"
                  h="40px"
                  bg={article.avatarColor}
                />
                <Flex flexDir="column" fontSize="14px">
                  <Text color="#101828">{article.author}</Text>
                  <Text color="#667085">{article.date}</Text>
                </Flex>
              </Flex>
            </Card.Footer>
          </Card.Root>
        ))}
      </Grid>
    </CustomContainer>
  );
};

export default BlogSection;
