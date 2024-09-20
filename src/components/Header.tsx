import { Box, BoxProps, Container } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";

import Hero from "./Hero";

interface Props extends BoxProps {}
export default function Header({ ...props }: Props) {
  return (
    <Box {...props}>
      <Navbar></Navbar>
      <Hero></Hero>
    </Box>
  );
}
