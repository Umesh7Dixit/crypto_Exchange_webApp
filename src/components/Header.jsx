 

import { Button, HStack, Spacer } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  // const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const {  loginWithRedirect, isAuthenticated, logout } = useAuth0();

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

      <HStack spacing={4}>
        {/* {isAuthenticated && (
          <Text fontSize="lg">Welcome, {user.email.slice(0, 5)}</Text>
        )} */}
        {isAuthenticated ? (
          <Button fontSize="lg" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </Button>
        ) : (
          <Button fontSize="lg" onClick={() => loginWithRedirect()}>Log In</Button>
        )}
      </HStack>
    </HStack>
  );
};

export default Header;
