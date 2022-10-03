import { Box, Flex, Heading, Image, HStack, Text, Stack, Divider  } from '@chakra-ui/react'

import React from 'react'
import { extendTheme } from '@chakra-ui/react'
import Head from 'next/head'


function Body() {
  

  return (
    <>
 
 
 <Heading fontSize='3xl' mt='50px' ml='340px'>Featured Posts
 <Divider orientation='horizontal'  mt='10px'/></Heading>
    <Flex   direction='row' >  
    <HStack ml='280px' mt='50px'  border='1px' borderColor='gray.200' h='255px' p='0px'>
       <Image
      src="/aroow.avif"
      alt="logo line"
      objectFit='cover'
      position='relative'
      height={255} 
      width={220}
     
      
    
    />
     
    <Box align='flex-column' 
      mt='100px'>
    <Heading ml='50px' fontSize='2xl' mt='45px' width='350px' mb='5px' fontWeight='bold' color='gray.900'>Rethinking error tracking and product analytics</Heading> 

    <Text ml='50px' width='350px' fontSize='sm' fontWeight='ligth' color='gray.500' >
      
    The current approach to delivering great digital experiences isn't working. It's time for a new solution.
    </Text>
   

    <Flex >

    <Image
      src="/ipman.jpg"
      alt="Picture of the author"
      objectFit='cover'
      position='relative'
      height={50} 
      width={50}
      borderRadius='full'
      mt='20px'
      ml='50px'/>
    
       
      <div  >

   
    <Heading pl='30px' mt='25px' fontSize='md'  fontWeight='Normal' color='gray.900'>Jackie Chan</Heading>
    <Text  pl='30px' width='300px' fontSize='sm' fontWeight='ligth' color='gray.500'>Sep 10, 2022  6 min read</Text>
    </div>
    </Flex>
    </Box>
    </HStack>








    <HStack ml='180px' mt='50px' border='1px' borderColor='gray.200' h='255px' p='0px'>
       <Image
      src="/books.avif"
      alt="books of techonology"
      objectFit='cover'
      position='relative'
      height={255} 
      width={220}
     
      
    
    />
     
    <Box align='flex-column' 
      mt='100px'>
    <Heading ml='50px' fontSize='2xl' mt='45px' width='350px' mb='5px' fontWeight='bold' color='gray.900'>How to create a multilevel dropdown menu in React</Heading> 

    <Text ml='50px' width='350px' fontSize='sm' fontWeight='ligth' color='gray.500' >
      
    Learn how to implement the dropdown menu feature in a React project to make navigation bars dynamic and organized.
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

   
    <Heading pl='30px' mt='25px' fontSize='md'  fontWeight='Normal' color='gray.900'>Paul Walker</Heading>
    <Text  pl='30px' width='300px' fontSize='sm' fontWeight='ligth' color='gray.500'>Dec 03, 2022  48 min read</Text>
    </div>
    </Flex>
    </Box>
    </HStack>













    
    </Flex>

  
  
    
      
    </>
  )
}

export default Body