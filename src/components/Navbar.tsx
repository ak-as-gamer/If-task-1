import {
  Image,
  ImageProps,
  Box,
  BoxProps,
  Flex,
  Button,
} from "@chakra-ui/react";
import React from "react";
interface Props extends BoxProps {}
export default function Navbar({ ...props }: Props) {
  return (
    <Box
      {...props}
      position="absolute"
      top="0"
      left="0"
      width="100%"
      zIndex="10"
    >
      <Flex
        justifyContent={{ base: "flex-end", md: "space-between" }}
        marginTop={5}
        mx={{ base: "15px", md: "30px" }}
      >
        <Image
          src={"../assets/logo.png"}
          display={{ base: "none", sm: "none", md: "block" }}
          alt={"Logo"}
        ></Image>
        <Button
          colorScheme={"red"}
          borderWidth={"2px"}
          borderColor={"white"}
          rounded={"20px"}
          padding={{ base: "5px", sm: "10px", lg: "20px" }}
        >
          Get In Touch
        </Button>
      </Flex>
    </Box>
  );
}
