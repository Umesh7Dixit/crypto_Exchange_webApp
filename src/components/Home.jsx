import { Box, Container, Heading, Image, Stack,Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.png"

const headingOptions = {
    pos:'absolute',
    left:'50%',
    top:'50%',
    transform:'translate(-50%,-50%)',
    textTransform:'upperCase',
    p:'4',
    size:"4xl"
}


const Home = () => {
  
  const MyCarousel = ()=>(
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
        <Box w="full" h={'100vh'}>
            <Image src={img1} />
            <Heading  bgColor={"blackAlpha.600"} color={'white'} {...headingOptions}>
              Watch the Future    
            </Heading>            
        </Box>
        <Box w="full" h={'100vh'}>
            <Image src={img2} />
            <Heading  bgColor={"whiteAlpha.900"} color={'black'} {...headingOptions}>
              Future is Gaming   
            </Heading>            
        </Box>
        <Box w="full" h={'100vh'}>
            <Image src={img3} />
            <Heading  bgColor={"whiteAlpha.600"} color={'black'} {...headingOptions}>
               Gaming on Console   
            </Heading>            
        </Box>
        <Box w="full" h={'100vh'}>
            <Image src={img4} />
            <Heading  bgColor={"whiteAlpha.600"} color={'black'} {...headingOptions}>
              Night life is Cool  
            </Heading>            
        </Box>
    </Carousel>
  )

    return (
      <Box>
                   <MyCarousel/>

                   <Container maxW={'container.xl'} minH={'100vh'} p={'16'} >
                      <Heading textTransform={"uppercase"} py={'2'} w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>
                        Services
                      </Heading>
                      <Stack p={'4'} h="full" alignItems={'center'} direction={['column','row']}>
                        <Image src={img5} h={['40','400']}  filter={"hue-rotate(-130deg)"}/>
                        <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={'center'}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores reprehenderit numquam architecto. Tenetur eos soluta corporis quaerat, cumque aliquid iure dolorum harum delectus modi! Eum magnam nihil delectus consequatur in!
                            Tenetur tempore debitis ipsa totam dignissimos illo fugiat, quidem provident officia libero. Modi amet consequatur, itaque aspernatur doloremque corporis, ipsa velit magnam repellendus quam voluptate consequuntur illum dolore! Vitae, veniam!
                            Impedit consequuntur quo sit mollitia ducimus vitae magnam, tempore ullam odio, nam consequatur animi hic vel? Animi dolorem, numquam nobis illo non dolor dignissimos laudantium repellat nemo amet tenetur quae!
                            At labore, impedit aut perferendis eius dicta perspiciatis numquam sapiente, alias ipsum porro sint rerum commodi recusandae, reiciendis eos. Possimus optio quos fugit, itaque natus neque excepturi beatae similique quisquam.
                            Tempora ipsa consectetur consequatur
                           
                        </Text>
                      </Stack>
                   </Container>
      </Box>  

    )
}

export default Home