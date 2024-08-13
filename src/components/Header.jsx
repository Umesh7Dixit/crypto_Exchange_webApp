 

import { Button, HStack, Spacer } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <HStack p={4} bgColor={'blue.500'} alignItems="center">
      <Spacer />

      <HStack spacing={8}>
        <Button variant={'unstyled'} p={3} fontSize="2xl">
          <Link to='/'>Home</Link>
        </Button>
        <Button variant={'unstyled'} p={3} fontSize="2xl">
          <Link to='/exchanges'>Exchanges</Link>
        </Button>
        <Button variant={'unstyled'} p={3} fontSize="2xl">
          <Link to='/coins'>Coins</Link>
        </Button>
      </HStack>

      <Spacer />

 

    </HStack>
  );
};

export default Header;
