import React from "react";
import { Box, Button, Container, Flex, Heading, Image, Stack, Text, VStack, Input, useColorModeValue, chakra, Icon, Divider } from "@chakra-ui/react";
import { FaUserCircle, FaEnvelope, FaLock, FaTwitter, FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");

  return (
    <Container maxW="container.xl" p={0}>
      <Flex minHeight="100vh" width="full" align="center" justifyContent="space-between" direction={{ base: "column", md: "row" }}>
        {/* Left Side - Welcome Message and Image */}
        <VStack w={{ base: "full", md: "50%" }} h="full" p={10} spacing={10} alignItems="flex-start">
          <VStack alignItems="flex-start" spacing={3}>
            <Heading size="2xl">Join the Mystical Journey</Heading>
            <Text fontSize="md" color={textColor}>
              Subscribe and get exclusive insights from our resident psychic. Discover your future, unlock mysteries, and empower your life.
            </Text>
          </VStack>
          <Box>
            <Image borderRadius="md" src="https://images.unsplash.com/photo-1505358131519-deb04e8e7ae3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwc3ljaGljfGVufDB8fHx8MTcwOTAwNTYzOXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Psychic Image" />
          </Box>
        </VStack>

        {/* Right Side - Sign Up Form */}
        <VStack w={{ base: "full", md: "50%" }} h="full" p={10} spacing={5} alignItems="flex-start" bg={bgColor}>
          <VStack alignItems="flex-start" spacing={3}>
            <Heading size="lg">Become a Member</Heading>
            <Text fontSize="sm" color={textColor}>
              Sign up to access member-only content and insights.
            </Text>
          </VStack>
          <Box w="full">
            <chakra.form w="full" rounded="md">
              <Stack spacing={4} w="full">
                <Flex alignItems="center" w="full">
                  <Icon as={FaUserCircle} mr={2} />
                  <Input placeholder="Full Name" isRequired />
                </Flex>
                <Flex alignItems="center" w="full">
                  <Icon as={FaEnvelope} mr={2} />
                  <Input placeholder="Email Address" type="email" isRequired />
                </Flex>
                <Flex alignItems="center" w="full">
                  <Icon as={FaLock} mr={2} />
                  <Input placeholder="Password" type="password" isRequired />
                </Flex>
                <Button w="full" colorScheme="purple">
                  Sign Up
                </Button>
              </Stack>
            </chakra.form>
          </Box>
          <Divider />
          <Text fontSize="sm" color={textColor}>
            Follow us on social media for updates and wisdom:
          </Text>
          <Flex w="full" justify="space-between" maxW="240px">
            <Icon as={FaTwitter} w={6} h={6} />
            <Icon as={FaInstagram} w={6} h={6} />
            <Icon as={FaYoutube} w={6} h={6} />
            <Icon as={FaFacebookF} w={6} h={6} />
          </Flex>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;
