// src/components/Footer.tsx
import { Box, Flex, Text, VStack, HStack, Icon, Image } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import React from "react";

export default function Footer() {
  return (
    <Box
      className="footerBox"
      bg="gray.50"
      w={{ base: "full", md: "start" }}
      p={8}
      as="footer"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "center", md: "center" }}
        justify="space-between"
        mx="auto"
      >
        <Box mb={{ base: 8, md: 0 }}>
          <Image src="/assets/logo.png" alt="Food Truck Logo" />
        </Box>

        <VStack
          align="flex-start"
          mb={{ base: 8, md: 0 }}
          w={{ base: "100%", md: "40%" }}
        >
          <Text fontWeight="bold">Contact Us</Text>
          <Text width={{ md: "40%" }}>
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
            Market, XYZ-343434
          </Text>
          <Text>example2020@gmail.com</Text>
          <Text>(904) 443-0343</Text>
        </VStack>

        <VStack
          align="flex-start"
          mb={{ base: 8, md: 0 }}
          w={{ base: "full", md: "20%" }}
        >
          <Text fontWeight="bold">More</Text>
          <Text>About Us</Text>
          <Text>Products</Text>
          <Text>Career</Text>
          <Text>Contact Us</Text>
        </VStack>

        <VStack
          align={{ base: "center", md: "flex-start" }}
          mb={{ base: 8, md: "20px" }}
        >
          <Text display={{ base: "none", md: "block" }} fontWeight="bold">
            Social Links
          </Text>
          <HStack
            w={{ base: "full", md: "" }}
            mx={{ base: "flex-start", md: "flex-start" }}
            my={{ base: "0", md: "start" }}
            spacing={4}
          >
            <Icon as={FaInstagram} boxSize={6} />
            <Icon as={FaTwitter} boxSize={6} />
            <Icon as={FaFacebook} boxSize={6} />
          </HStack>
          <Text
            mt={4}
            align={{ base: "center", md: "center" }}
            fontSize="sm"
            color="gray.500"
          >
            © 2022 Food Truck Example
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
}
