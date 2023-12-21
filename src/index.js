import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
  domain="dev-gem1bznvgbrk7iz5.us.auth0.com"
  clientId="nFo7BB6WZJziteWqKA9l0MAf4ijMvL5Q"
  authorizationParams={{
    redirect_uri: window.location.origin
    }}
    >
    <React.StrictMode>
      <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
    </React.StrictMode>
      </Auth0Provider>,
);

export const server = `https://api.coingecko.com/api/v3`;
