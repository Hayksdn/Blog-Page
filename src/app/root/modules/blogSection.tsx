import { useState } from "react";
import { CustomContainer } from "@/shared/layout/container";
import { Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import { blogs } from "@/data/blogs";
import ArrowIcon from "@/shared/assets/icons/arrow";
import { NavLink } from "react-router-dom";
import type { Blog } from "@/shared/types/blog";
import ArrowDownIcon from "@/shared/assets/icons/arrowDown";

interface BlogSectionProps {
  searchTerm: string;
}

const BlogSection = ({ searchTerm }: BlogSectionProps) => {
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredBlogs: Blog[] = searchTerm
    ? blogs.filter((blog) =>
        (blog.title + blog.description + blog.author)
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    : blogs;

  const visibleBlogs = filteredBlogs.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const allLoaded = visibleCount >= filteredBlogs.length;

  return (
    <CustomContainer
      variant="container"
      mx="auto"
      display="flex"
      flexDir="column"
      gap="1rem"
      mb="1rem"
    >
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        {visibleBlogs.map((blog) => (
          <Card.Root
            key={blog.id}
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
              <Image src={blog.image} />
            </Card.Header>

            <Card.Body p="0" display="flex" flexDir="column">
              <Text color="#6941C6" fontSize="14px" fontWeight="semibold">
                {blog.category}
              </Text>
              <Flex flexDir="column" gap="12px">
                <Flex position="relative">
                  <Text
                    color="#101828"
                    fontSize="24px"
                    fontWeight="semibold"
                    maxW={{ md: "300px", base: "250px" }}
                  >
                    {blog.title}
                  </Text>
                  <NavLink
                    to={`/blog/${blog.id}`}
                    style={{ position: "absolute", top: 10, right: 0 }}
                  >
                    <ArrowIcon />
                  </NavLink>
                </Flex>

                <Text color="#667085" fontSize="16px">
                  {blog.description}
                </Text>
              </Flex>
            </Card.Body>

            <Card.Footer p="0">
              <Flex flexDir="row" gap="12px">
                <Image
                  src={blog.avatar}
                  rounded="50%"
                  w="40px"
                  h="40px"
                  bg={blog.avatarColor}
                />
                <Flex flexDir="column" fontSize="14px">
                  <Text color="#101828">{blog.author}</Text>
                  <Text color="#667085">{blog.date}</Text>
                </Flex>
              </Flex>
            </Card.Footer>
          </Card.Root>
        ))}
      </Grid>

      {!allLoaded && (
        <Flex w="full" justify="center" mt="1rem">
          <Button
            onClick={handleLoadMore}
            color="#6941C6"
            bg="#F3EBFF"
            fontSize="14px"
            rounded="xl"
            fontWeight="medium"
            gap="0.5rem"
            w="fit-content"
            p="1.5rem"
            h="1.7rem"
          >
            <ArrowDownIcon />
            Load More
          </Button>
        </Flex>
      )}
    </CustomContainer>
  );
};

export default BlogSection;
