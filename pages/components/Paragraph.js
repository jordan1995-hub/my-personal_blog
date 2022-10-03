import React from 'react'
import { Button,Stack, Text, Divider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

function Paragraph() {
  
  return (
    <>
   
  

// This button will have no right borderRadius
<Button borderRightRadius="0">Button 1</Button>

// This button will have no left borderRadius*/
<Button borderLeftRadius="0">Button 2</Button>


<Button borderTopRadius="md">Button 2</Button>
  
  
  


    </>
  )
}

export default Paragraph