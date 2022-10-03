import React from 'react'
import { Box, Flex, Heading, Image, HStack, Text, Stack,  } from '@chakra-ui/react'

function BodyThree() {
  return (
    <>
  
    <Flex  direction='row' >  
    <HStack ml='280px' mt='50px' mb='50px'  border='1px' borderColor='gray.200' h='255px' p='0px'>
       <Image
      src="/js.jfif"
      alt="logo of js"
      objectFit='cover'
      position='relative'
      height={255} 
      width={220}
     
      
    
    />
     
    <Box align='flex-column' 
      mt='100px'>
    <Heading ml='50px' fontSize='2xl' mt='45px' width='350px' mb='5px' fontWeight='bold' color='gray.900'>
    Build a task tracker with SolidJS and TypeScript</Heading> 

    <Text ml='50px' width='350px' fontSize='sm' fontWeight='ligth' color='gray.500' >
      
    Follow this step-by-step tutorial to build a web app using SolidJS.
    </Text>
   

    <Flex >

    <Image
      src="/glasses.jfif"
      alt="Picture of the author"
      objectFit='cover'
      position='relative'
      height={50} 
      width={50}
      borderRadius='full'
      mt='20px'
      ml='50px'/>
    
       
      <div  >

   
    <Heading pl='30px' mt='25px' fontSize='md'  fontWeight='Normal' color='gray.900'>Ebenezer Don</Heading>
    <Text  pl='30px' width='300px' fontSize='sm' fontWeight='ligth' color='gray.500'>Jun 29, 2022  10 min read</Text>
    </div>
    </Flex>
    </Box>
    </HStack>








    <HStack ml='180px' mt='50px' border='1px' borderColor='gray.200' h='255px' p='0px'>
       <Image
      src="/neutron.avif"
      alt="logo of neutron"
      objectFit='cover'
      position='relative'
      height={255} 
      width={220}
     
      
    
    />
     
    <Box align='flex-column' 
      mt='100px'>
    <Heading ml='50px' fontSize='2xl' mt='45px' width='350px' mb='5px' fontWeight='bold' color='gray.900'>How to animate SVG with CSS: Tutorial with examples</Heading> 

    <Text ml='50px' width='350px' fontSize='sm' fontWeight='ligth' color='gray.500' >
      
    In comparison to bulky gifs and videos, animations added to websites using SVGs and CSS have a faster load...
    </Text>
   

    <Flex >

    <Image
      src="/mustace.jpg"
      alt="Picture of the author"
      objectFit='cover'
      position='relative'
      height={50} 
      width={50}
      borderRadius='full'
      mt='20px'
      ml='50px'/>
    
       
      <div  >

   
    <Heading pl='30px' mt='25px' fontSize='md'  fontWeight='Normal' color='gray.900'>Hope Armstrong</Heading>
    <Text  pl='30px' width='300px' fontSize='sm' fontWeight='ligth' color='gray.500'>Aug 3, 2022  24 min read</Text>
    </div>
    </Flex>
    </Box>
    </HStack>













    
    </Flex>

   
    </>
  )
}

export default BodyThree