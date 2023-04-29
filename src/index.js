import { ColorModeScript , ChakraProvider,theme } from "@chakra-ui/react";

import React , { StrictMode } from "react";
import { createRoot } from 'react-dom/client'
import App from "./App";

import ColorModeSwitcher from "./ColorModeSwitcher";


const root = createRoot(document.getElementById('root'))

root.render(
    <StrictMode>
       <ColorModeScript/>
       <ChakraProvider theme={theme}>
        <ColorModeSwitcher/>
        <App/>
       </ChakraProvider>
    </StrictMode>
);