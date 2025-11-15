import { Box, Button, Flex, Input, Text, Textarea } from "@chakra-ui/react";
import { CustomContainer } from "@/shared/layout/container";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import type { ContactFormData } from "@/shared/types/form";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = () => {
    setSubmitted(true);
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
              Contact Us
            </Text>
            <Text maxW="600px" color="#667085">
              We'd love to hear from you! Whether you have feedback, ideas, or
              just want to say hello — reach out anytime.
            </Text>
          </Flex>

          {submitted ? (
            <Text color="green.500" fontWeight="semibold" fontSize="lg">
              Thank you for reaching out! We'll get back to you soon.
            </Text>
          ) : (
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
                    name="name"
                    control={control}
                    rules={{ required: "Name is required" }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="Your name"
                        borderColor={errors.name ? "red.400" : "gray.200"}
                      />
                    )}
                  />
                  {errors.name && (
                    <Text color="red.400" fontSize="sm">
                      {errors.name.message}
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
                        message: "Invalid email address",
                      },
                    }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="Your email"
                        type="email"
                        borderColor={errors.email ? "red.400" : "gray.200"}
                      />
                    )}
                  />
                  {errors.email && (
                    <Text color="red.400" fontSize="sm">
                      {errors.email.message}
                    </Text>
                  )}
                </Flex>

                <Flex flexDir="column" gap="0.3rem">
                  <Controller
                    name="message"
                    control={control}
                    rules={{ required: "Message is required" }}
                    render={({ field }) => (
                      <Textarea
                        {...field}
                        placeholder="Your message"
                        borderColor={errors.message ? "red.400" : "gray.200"}
                      />
                    )}
                  />
                  {errors.message && (
                    <Text color="red.400" fontSize="sm">
                      {errors.message.message}
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
                  Send Message
                </Button>
              </Flex>
            </Box>
          )}
        </Flex>
      </CustomContainer>
    </Flex>
  );
};

export default Contact;
