import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'

function Footer() {
  return (
   <>
   <Flex>
   <Heading fontWeight='thin' color='gray.400' fontSize='md'>First</Heading>
   <Text color='gray.400'>1</Text>    
   <Text color='gray.400'>2</Text>  
   <Text color='gray.400'>3</Text>  
   <Text color='gray.400'>4</Text>  
   <Text color='gray.400'>5</Text> 
   <Heading  fontWeight='thin' color='gray.400' fontSize='md'>Last</Heading> 
   </Flex>
   </>
  )
}

export default Footer