import { CustomContainer } from "@/shared/layout/container";
import { Flex, Text, Image, Grid } from "@chakra-ui/react";
 
const team = [
  {
    name: "Olivia Rhye",
    role: "Lead Designer",
    avatar: "/src/shared/assets/images/avatar1.png",
  },
  {
    name: "Phoenix Baker",
    role: "Product Manager",
    avatar: "/src/shared/assets/images/avatar2.png",
  },
  {
    name: "Lana Steiner",
    role: "Software Engineer",
    avatar: "/src/shared/assets/images/avatar3.png",
  },
];

const About = () => {
  return (
    <Flex bg="#F9F5FF" py="4rem">
      <CustomContainer
        variant="containerXS"
        mx="auto"
        display="flex"
        flexDir="column"
        alignContent="center"
        textAlign={{ base: "center", md: "left" }}
        gap="2.5rem"
      >
        <Flex
          flexDir="column"
          gap="1rem"
          align={{ base: "center", md: "flex-start" }}
        >
          <Text
            fontSize={{ base: "2xl", md: "3xl" }}
            color="#101828"
            fontWeight="semibold"
          >
            About Us
          </Text>
          <Text maxW="700px" color="#667085">
            Welcome to our blog — where design, product, and engineering come
            together to inspire better digital experiences. We share insights,
            tutorials, and ideas to help creative professionals grow and build
            meaningful products.
          </Text>
        </Flex>

        <Flex
          maxW="700px"
          flexDir="column"
          gap="0.5rem"
          align={{ base: "center", md: "flex-start" }}
        >
          <Text fontSize="xl" color="#101828" fontWeight="semibold">
            Our Mission
          </Text>
          <Text color="#667085">
            We believe learning should be simple, accessible, and inspiring. Our
            goal is to bridge creativity and technology through educational
            content and practical insights.
          </Text>
        </Flex>

        <Flex flexDir="column" gap="1.5rem" w="full">
          <Text
            fontSize="xl"
            color="#101828"
            fontWeight="semibold"
            textAlign={{ base: "center", md: "left" }}
          >
            Meet the Team
          </Text>

          <Grid
            templateColumns={{
              base: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={6}
            justifyItems={{ base: "center", md: "normal" }}
          >
            {team.map((member) => (
              <Flex
                key={member.name}
                direction="column"
                align="center"
                bg="white"
                p="1.5rem"
                rounded="xl"
                shadow="md"
                w="full"
                maxW="250px"
              >
                <Image src={member.avatar} w="200px" h="200px" rounded="full" />
                <Text fontWeight="bold">{member.name}</Text>
                <Text color="gray.500">{member.role}</Text>
              </Flex>
            ))}
          </Grid>
        </Flex>

        <Text
          maxW="700px"
          color="#667085"
          textAlign={{ base: "center", md: "left" }}
        >
          We're excited to share our journey with you — and hope our content
          helps you grow, build, and get inspired.
        </Text>
      </CustomContainer>
    </Flex>
  );
};

export default About;
