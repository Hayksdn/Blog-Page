import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { CustomContainer } from "@/shared/layout/container";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { LoginFormData } from "@/shared/types/form";
import { useAuth } from "@/shared/hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormData) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const user = users.find((u: LoginFormData) => u.email === data.email);

    if (!user) {
      setInvalidEmail(true);
      setInvalidPassword(false);
      return;
    }

    if (user.password !== data.password) {
      setInvalidPassword(true);
      setInvalidEmail(false);
      return;
    }

    setInvalidEmail(false);
    setInvalidPassword(false);

    login(data);
    navigate("/");
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
              Login
            </Text>
            <Text maxW="600px" color="#667085">
              Access your account to continue.
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
                      borderColor={
                        errors.email || invalidEmail ? "red.400" : "gray.200"
                      }
                      onChange={(e) => {
                        field.onChange(e);
                        if (invalidEmail) setInvalidEmail(false);
                      }}
                    />
                  )}
                />

                {errors.email && (
                  <Text color="red.400" fontSize="sm">
                    {errors.email.message}
                  </Text>
                )}

                {invalidEmail && (
                  <Text color="red.400" fontSize="sm">
                    No account found with this email.
                  </Text>
                )}
              </Flex>

              <Flex flexDir="column" gap="0.3rem">
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: "Password is required" }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="Password"
                      type="password"
                      borderColor={
                        errors.password || invalidPassword
                          ? "red.400"
                          : "gray.200"
                      }
                      onChange={(e) => {
                        field.onChange(e);
                        if (invalidPassword) setInvalidPassword(false);
                      }}
                    />
                  )}
                />

                {errors.password && (
                  <Text color="red.400" fontSize="sm">
                    {errors.password.message}
                  </Text>
                )}

                {invalidPassword && (
                  <Text color="red.400" fontSize="sm">
                    Incorrect password.
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
                Log In
              </Button>
            </Flex>
          </Box>
        </Flex>
      </CustomContainer>
    </Flex>
  );
};

export default Login;
