import Link from "next/link";
import React from "react";
import { Flex, Text, Button, Icon, Spacer } from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";
const Navbar = () => {
  return (
    <Flex p="1rem" alignItems={"center"} bg="brand.100" color={"white.100"}>
      <Flex w="10%" justifyContent={"space-around"}>
        <Link href={"/"}>
          <Text>Home</Text>
        </Link>
        <Link href={"/people"}>
          <Text>People</Text>
        </Link>
      </Flex>
      <Spacer />
      <Button>
        <Icon as={SunIcon} color="blackAlpha.700" />
      </Button>
    </Flex>
  );
};

export default Navbar;
