

import React from 'react'
import { Card,Box,Image } from '@chakra-ui/react'
export const DealCard = ({image}) => {
  return (
    <Card>
        <Box  style={{display:"flex",alignItems:'center',justifyContent:'center'}}>
            <Image width='100%'  src={image} alt='card' />
        </Box>
    </Card>
  )
}


