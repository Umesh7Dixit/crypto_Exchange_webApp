import { Button, HStack,Spacer } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { user,loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
      <HStack p={4} bgColor={'blue.500'} >
         <Button variant={'unstyled'} p={3}>
           <Link to='/'  >Home</Link>
         </Button>
         <Button variant={'unstyled'} p={3}>
           <Link to='/exchanges'  >Exchanges</Link>
         </Button>
         <Button variant={'unstyled'} p={3}>
           <Link to='/coins'  >Coins</Link>
         </Button>

         <Spacer />

         <div >
          
         <div  class="flex space-x-4">
         {
               isAuthenticated && (
                <div>
                  {/* <img src={user.picture} alt={user.name} /> */}
                  {/* <h2>{user.name}</h2> */}
                  <p>Welcome {user.email}</p>
                </div> )
          }
        
         </div>

            {
              isAuthenticated? 
                ( <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>  Log Out    </button>)
                 : (    <button onClick={() => loginWithRedirect()}>Log In</button>  )
            }



         {/* <Button variant={'unstyled'} p={3}>
           <Link to='/login'  >Login</Link>
         </Button> */}
         {/* <Button variant={'unstyled'} p={3}>
           <Link to='/signup'  >Signup</Link>
         </Button> */}

       
         </div>
      </HStack>    
  );
};

export default Header;
