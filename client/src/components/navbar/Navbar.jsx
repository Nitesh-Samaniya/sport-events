import React from 'react'
import { Box } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Box 
        w={'100%'} 
        display={'flex'} 
        justifyContent={'space-between'} 
        px={8} 
        py={3} 
        fontFamily={'cursive'}
        fontSize={'2xl'}
        bg={"#010026"} 
        color={'#fff'} 
        position={'fixed'} 
        top={0} 
        zIndex={5}
    >
        <Box color={'red'} fontSize={'3xl'}>Sport Events</Box>
        <Box
            display={'flex'}
            gap={10} 
        >
            <Box>Create Event</Box>
            <Box>Account</Box>
        </Box>
    </Box>
  )
}

export default Navbar