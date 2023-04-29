import React from 'react'
import { Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,Button, useDisclosure, VStack, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { BiMenuAltLeft } from 'react-icons/bi'
// import { purple } from '@mui/material/colors'
const Header = () => {
    const{ isOpen,onOpen,onClose} = useDisclosure()


  return (


    <>
       <Button zIndex={'overlay'} onClick={onOpen} pos={"fixed"} top={'4'} left={'4'} colorScheme={'purple'} p={'0'} w={'10'} h={'10'} borderRadius={'full'}  >
         <BiMenuAltLeft size={'20'} />
       </Button>

       <Drawer  isOpen={isOpen} placement="left" onClose={onClose} >
          <DrawerOverlay/>  
          <DrawerContent>
            <DrawerCloseButton/>
            <DrawerHeader>VIDEO HUB</DrawerHeader>
            <DrawerBody>
                <VStack alignItems={'flex-start'}>

                      <Button onClick={onClose}variant={'ghost'} colorScheme='purple'>
                        <Link to={'/'}>Home</Link>
                      </Button>
                      <Button onClick={onClose}variant={'ghost'} colorScheme='purple'>
                        <Link to={'/Videos'}>Videos</Link>
                      </Button>
                      <Button onClick={onClose}variant={'ghost'} colorScheme='purple'>
                        <Link to={'/videos?category=free'}>Free Videos</Link>
                      </Button>
                      <Button onClick={onClose}variant={'ghost'} colorScheme='purple'>
                        <Link to={'/Upload'}>Upload Videos</Link>
                      </Button>

                </VStack>

                <HStack  pos={"absolute"} bottom={"10"} left={'0'} justifyContent={'space-evenly'} w={'full'} >

                    <Button onClick={onClose}  colorScheme={'purple'} >
                        <Link to={'/Login'} >Login In</Link>
                    </Button>
                    <Button  onClick={onClose}variant={'outline'} colorScheme={'purple'} >
                        <Link to={'/SignUp'} >Sign Up</Link>
                    </Button>

                </HStack>

            </DrawerBody>
          </DrawerContent>
       </Drawer>
    </>
  )
}

export default Header