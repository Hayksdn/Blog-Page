import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { CustomContainer } from "@/shared/layout/container";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import type { SignupFormData } from "@/shared/types/form";

const Signup = () => {
  const [emailTaken, setEmailTaken] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignupFormData>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate();

  const onSubmit = (data: SignupFormData) => {
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

    const emailExists = existingUsers.some(
      (user: SignupFormData) => user.email === data.email
    );
    if (emailExists) {
      setEmailTaken(true);
      return;
    }
    existingUsers.push(data);
    setEmailTaken(false);

    localStorage.setItem("users", JSON.stringify(existingUsers));

    navigate("/login");

    reset();
  };

  return (
    <Flex bg="#F9F5FF" py="4rem" h="100vh">
      <CustomContainer variant="containerXS" mx="auto">
        <Flex direction="column" align="center" gap="2.5rem" textAlign="center">
          <Flex flexDir="column" gap="1rem">
            <Text
              fontSize={{ base: "2xl", md: "3xl" }}
              color="#101828"
              fontWeight="semibold"
            >
              Create an Account
            </Text>
            <Text maxW="600px" color="#667085">
              Sign up to unlock features and get a personalized experience.
            </Text>
          </Flex>

          <Box
            as="form"
            onSubmit={handleSubmit(onSubmit)}
            bg="white"
            p="2rem"
            rounded="xl"
            shadow="md"
            w="full"
            maxW="400px"
          >
            <Flex direction="column" gap="1rem" align="stretch">
              <Flex flexDir="column" gap="0.3rem">
                <Controller
                  name="username"
                  control={control}
                  rules={{ required: "Username is required" }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="Username"
                      borderColor={errors.username ? "red.400" : "gray.200"}
                    />
                  )}
                />
                {errors.username && (
                  <Text color="red.400" fontSize="sm">
                    {errors.username.message}
                  </Text>
                )}
              </Flex>

              <Flex flexDir="column" gap="0.3rem">
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="Email"
                      type="email"
                      borderColor={errors.email ? "red.400" : "gray.200"}
                      onChange={(e) => {
                        field.onChange(e);
                        if (emailTaken) setEmailTaken(false);
                      }}
                    />
                  )}
                />
                {errors.email && (
                  <Text color="red.400" fontSize="sm">
                    {errors.email.message}
                  </Text>
                )}
                {emailTaken && (
                  <Text color="red.400" fontSize="sm">
                    This email is already registered.
                  </Text>
                )}
              </Flex>

              <Flex flexDir="column" gap="0.3rem">
                <Controller
                  name="password"
                  control={control}
                  rules={{
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="Password"
                      type="password"
                      borderColor={errors.password ? "red.400" : "gray.200"}
                    />
                  )}
                />
                {errors.password && (
                  <Text color="red.400" fontSize="sm">
                    {errors.password.message}
                  </Text>
                )}
              </Flex>

              <Button
                color="#6941C6"
                bg="#F3EBFF"
                fontSize="14px"
                rounded="xl"
                fontWeight="medium"
                type="submit"
              >
                Sign Up
              </Button>
            </Flex>
          </Box>
        </Flex>
      </CustomContainer>
    </Flex>
  );
};

export default Signup;
