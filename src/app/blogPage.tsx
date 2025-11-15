import { blogs } from "@/data/blogs";
import { CustomContainer } from "@/shared/layout/container";
import type { Blog } from "@/shared/types/blog";
import { Flex, Button, Image, Text } from "@chakra-ui/react";
import { NavLink, useParams } from "react-router-dom";

const BlogPage = () => {
  const { id } = useParams();
  const blog: Blog | undefined = blogs.find((blog) => blog.id === Number(id));

  if (!blog) {
    return (
      <Flex flexDir="column" gap="1rem" textAlign="center" mt="100px">
        <Text fontSize="2xl" fontWeight="bold">
          Blog not found
        </Text>
        <NavLink to="/">
          <Button
            color="#6941C6"
            bg="#F3EBFF"
            fontSize="14px"
            rounded="2xl"
            fontWeight="medium"
          >
            Go back
          </Button>
        </NavLink>
      </Flex>
    );
  }

  return (
    <CustomContainer
      variant="containerXS"
      mx="auto"
      py="2rem"
      display="flex"
      flexDir="column"
      gap="1rem"
    >
      <Flex flexDir="column">
        <Image
          src={blog.image}
          alt={blog.title}
          w="full"
          h="400px"
          objectFit="cover"
          borderRadius="md"
        />
        <Text color="#6941C6" fontSize="14px" fontWeight="semibold" mt="20px">
          {blog.category}
        </Text>

        <Text fontSize="32px" fontWeight="bold" mt="8px" color="#101828">
          {blog.title}
        </Text>

        <Flex align="center" gap="12px" mt="12px">
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

        <Text color="#667085" fontSize="16px" mt="24px" lineHeight="taller">
          {blog.description}
        </Text>

        <Text color="#475467" fontSize="16px" mt="16px" lineHeight="taller">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          ullamcorper felis at arcu fermentum, sed varius nunc aliquam. Integer
          vitae facilisis elit, sed tristique nisi. Suspendisse potenti.
          Curabitur pretium, sem ut dictum mattis, mauris eros sagittis velit,
          vel condimentum odio ex ut velit.
        </Text>
      </Flex>

      <Flex w="full" justifyContent="center">
        <NavLink to="/">
          <Button
            color="#6941C6"
            bg="#F3EBFF"
            fontSize="14px"
            rounded="2xl"
            fontWeight="medium"
          >
            Back to blogs
          </Button>
        </NavLink>
      </Flex>
    </CustomContainer>
  );
};

export default BlogPage;
