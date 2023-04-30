import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
      <HStack p={4} bgColor={'blackAlpha.900'} >
         <Button variant={'unstyled'} p={3}>
           <Link to='/'  >Home</Link>
         </Button>
         <Button variant={'unstyled'} p={3}>
           <Link to='/exchanges'  >Exchanges</Link>
         </Button>
         <Button variant={'unstyled'} p={3}>
           <Link to='/coins'  >Coins</Link>
         </Button>
      </HStack>    
  );
};

export default Header;
