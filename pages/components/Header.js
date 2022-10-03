import React from 'react'
import { Box, Flex, Heading, HStack, Link, Icon,Text, Image, Stack} from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'


function Header() {
  return (
    <>
    <Flex bg='white.200' px='200px' py='20px'  alignItems='flex-end' 
    justifyContent='space-between'>

  <Flex alignItems='flex-end' >
    <Heading color='purple.400' fontWeight='bold' mr='40px' >MyDailyLife</Heading>
    
    <HStack color='purple.400'pl='20px' >
      <Link  >BLOG</Link>
      <Link >PODCAST</Link>  
      <Link >MEETUPS</Link>
     
    </HStack>
  </Flex>
  <Link color='white' bg='purple.600' p='10px' ml='750px'>START MONITORING FOR FREE</Link>
      <Link color='purple.400' pb='2'>SIGN IN</Link>
</Flex>

<Stack>

  
<Image
      src="/walking.png"
      alt="Picture of the author"
      objectFit='cover'
      position='relative'
      height={800} 
     
    />
  <Heading  color='white' size='3xl' width='1350px' position='absolute' pt='180px' pl='200px' letterSpacing={7}>
   Modern Frontend 
   <br></br>
   
   Monitoring and
   <br></br> Product Analytics
   
  </Heading>
  
</Stack>

</>
  )
}

export default Header
