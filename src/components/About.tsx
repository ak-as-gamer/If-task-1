import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <Box
      p={{ base: 4, md: 0 }}
      bg="#F0F1F7"
      w="full"
      mt={{ base: "10px", md: "100px" }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justify="space-around"
        p={{ base: 4, md: 0 }}
      >
        <Box flex="0.5" pl={{ base: 0, md: 0 }} mb={{ base: 4, md: 0 }}></Box>
        <Box
          flex="1"
          pr={{ base: 0, md: 0 }}
          mb={{ base: 4, md: 0 }}
          display={{ base: "none", sm: "none", md: "block" }}
        >
          <Image
            src="/assets/aboutImage.png"
            alt="About Us"
            objectFit="cover"
            width="80%"
            height="80%"
          />
        </Box>

        <Box
          className="About Us box"
          flex={{ base: "1" }}
          textAlign={{ base: "center", md: "start" }}
          py={{ base: 4, md: "4px" }}
        >
          <Heading
            as="h2"
            size={{ base: "xl", md: "lg" }}
            mb={{ base: 4, md: 1 }}
            color="blue.700"
          >
            About Us
          </Heading>
          <Text color="gray.600" mb={6}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </Text>
          <Button colorScheme="red" rounded="full" size="md">
            Read More
          </Button>
        </Box>
        <Box flex="1" pl={{ base: 0, md: 8 }} mb={{ base: 4, md: 0 }}></Box>
      </Flex>
    </Box>
  );
}
