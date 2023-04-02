import React from 'react'
import {Text,Image,Box,Button, Stack} from '@chakra-ui/react'
export const MensCard = ({brand,discount,image,price,categories,rating}) => {
  return (
   
     <Box style={{boxShadow:'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
         padding:'0px 0px 5px 0px'}}>
        <Image src={image[0]} alt='Image'/>
        <Stack spacing={0} style={{width:'80%',margin:'auto'}}>
      <Text style={{fontWeight:'bold'}}>{brand}</Text>
      <Text fontSize='sm'>{categories}</Text>
       <Text fontSize='sm'> Rs. {price}</Text>
       <Button style={{display:'block',margin:'auto'}}>Add to Cart</Button>
       </Stack>
     </Box>
    
  )
}
