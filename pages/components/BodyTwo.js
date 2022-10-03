import React from 'react'
import { Box, Flex, Heading, Image, HStack, Text, Stack,  } from '@chakra-ui/react'

function BodyTwo() {
  return (
    
     <>
  
    <Flex   direction='row' >  
    <HStack ml='280px' mt='50px'  border='1px' borderColor='gray.200' h='255px' p='0px'>
       <Image
      src="/css.jfif"
      alt="logo of css"
      objectFit='cover'
      position='relative'
      height={255} 
      width={220}
     
      
    
    />
     
    <Box align='flex-column' 
      mt='100px'>
    <Heading ml='50px' fontSize='2xl' mt='45px' width='350px' mb='5px' fontWeight='bold' color='gray.900'>
Build your own type-safe version of Tailwind CSS with Sprinkles</Heading> 

    <Text ml='50px' width='350px' fontSize='sm' fontWeight='ligth' color='gray.500' >
      
    Explore how to use pnpm to manage a full-stack, multipackage JavaScript monorepo.
    </Text>
   

    <Flex >

    <Image
      src="/woman2.jpg"
      alt="Picture of the author"
      objectFit='cover'
      position='relative'
      height={50} 
      width={50}
      borderRadius='full'
      mt='20px'
      ml='50px'/>
    
       
      <div  >

   
    <Heading pl='30px' mt='25px' fontSize='md'  fontWeight='Normal' color='gray.900'>Ashley Davis</Heading>
    <Text  pl='30px' width='300px' fontSize='sm' fontWeight='ligth' color='gray.500'>Jul 20, 2022  12 min read</Text>
    </div>
    </Flex>
    </Box>
    </HStack>








    <HStack ml='180px' mt='50px' border='1px' borderColor='gray.200' h='255px' p='0px'>
       <Image
      src="/location.avif"
      alt="logo of location"
      objectFit='cover'
      position='relative'
      height={255} 
      width={220}
     
      
    
    />
     
    <Box align='flex-column' 
      mt='100px'>
    <Heading ml='50px' fontSize='2xl' mt='45px' width='350px' mb='5px' fontWeight='bold' color='gray.900'>Managing a full-stack, multipackage monorepo using pnpm</Heading> 

    <Text ml='50px' width='350px' fontSize='sm' fontWeight='ligth' color='gray.500' >
      
    The current approach to delivering great digital experiences isn't working. It's time for a new solution.
    </Text>
   

    <Flex >

    <Image
      src="/woman4.jpg"
      alt="Picture of the author"
      objectFit='cover'
      position='relative'
      height={50} 
      width={50}
      borderRadius='full'
      mt='20px'
      ml='50px'/>
    
       
      <div  >

   
    <Heading pl='30px' mt='25px' fontSize='md'  fontWeight='Normal' color='gray.900'>Alex Merced</Heading>
    <Text  pl='30px' width='300px' fontSize='sm' fontWeight='ligth' color='gray.500'>Aug 3, 2022  14 min read</Text>
    </div>
    </Flex>
    </Box>
    </HStack>













    
    </Flex>

   
    </>
  )
}

export default BodyTwo