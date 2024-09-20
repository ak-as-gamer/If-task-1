import {
  BoxProps,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Flex,
} from "@chakra-ui/react";
import React from "react";

interface Props extends BoxProps {}
export default function Hero({}: Props) {
  return (
    <Flex
      className="Hero Flex"
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="space-between"
      bg="white"
      w="full"
    >
      <Box
        className="rightside"
        flex="0.85"
        position="relative"
        w={{ base: "100%", md: "50%" }}
        order={{ base: 0, md: 1 }}
      >
        <Image
          src="/assets/pizza.png"
          alt="Pizza"
          objectFit="cover"
          width="100%"
          pl={{ base: "0px", md: "12px" }}
          rounded={{ base: "none", sm: "3xl" }}
          zIndex="2"
        />

        <Image
          src="/assets/header_red.svg"
          alt="Red Background"
          position="absolute"
          top="-1px"
          right="0px"
          width="100%"
          height="103%"
          objectFit="cover"
          zIndex="1"
        />
      </Box>

      <Box
        className="leftside"
        w={{ base: "100%", md: "45%" }}
        order={{ base: 1, md: 0 }}
        textAlign={{ base: "center", md: "start" }}
        mt={{ base: "30px", md: 0 }}
      >
        <Box w={{ base: "65%", md: "80% " }} mx={{ base: "auto", md: "auto" }}>
          <Heading
            as="h1"
            size={{ base: "xl", md: "2xl" }}
            lineHeight="1.2"
            color="blue.800"
          >
            <Text as="span" display="block" fontWeight="bold">
              Discover the&nbsp;
            </Text>

            <Text
              as="span"
              color="red.500"
              fontWeight="bold"
              display="inline"
              whiteSpace="nowrap"
            >
              Best&nbsp;
            </Text>
            <Text
              as="span"
              fontWeight="bold"
              display="inline"
              whiteSpace="nowrap"
            >
              Food&nbsp;
            </Text>

            <Text
              as="span"
              display={{ base: "inline", md: "block" }}
              fontWeight="bold"
              whiteSpace={{ base: "wrap", md: "wrap" }}
            >
              and&nbsp;
            </Text>
            <Text
              whiteSpace={{ base: "wrap", md: "wrap" }}
              as="span"
              display={{ base: "inline", md: "wrap" }}
              fontWeight="bold"
            >
              Drinks
            </Text>
          </Heading>

          <Text
            w={{ base: "100%", md: "80%" }}
            mx={{ base: "8px" }}
            mb={6}
            mt={6}
            color="gray.600"
            textAlign={{ base: "center", md: "left" }}
          >
            Naturally made Healthcare Products for the better care & support of
            your body.
          </Text>
          <Button colorScheme="red" size="lg" rounded="full" ml={{ md: "0px" }}>
            Explore Now!
          </Button>
        </Box>
      </Box>
    </Flex>
  );
}
