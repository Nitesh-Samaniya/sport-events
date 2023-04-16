import React, { useContext, useEffect } from 'react'
import { Box, Button, SimpleGrid, Text } from '@chakra-ui/react'
import { GetEventContext } from '../../App'

const Home = () => {
  const {eventList, getEventList} = useContext(GetEventContext);

  useEffect(()=>{
    getEventList();
  },[getEventList])
  
  return (
    <Box w={'90%'} m={'auto'} mt={'100px'}>
      <Text fontFamily={'cursive'} fontSize={'3xl'} mb={10} color={'red'}>Events</Text>
        <SimpleGrid columns={[1,1,1,3]} gap={10}>
          {
            eventList?.map((el)=>(
              <Box key={el._id} boxShadow='outline' p='6' rounded='md' bg='white' fontFamily={'cursive'}>

                <Box display={'flex'} justifyContent={'space-between'}> 
                  <Text color={'red'} fontSize={'xl'}>{el.venue}</Text>
                  <Text>Date: {el.date}</Text>
                </Box>

                <Box textAlign={'center'} boxShadow='xl' p='6' rounded='md' bg='white' color={'gray'}>{el.desc}</Box>

                <Text textAlign={'left'} mt={3} fontSize={'2xl'}>{el.type}</Text>
                <Text textAlign={'left'} mt={3}>Organizer Name: {el.org_name}</Text>

                <Button mt={3}>More Detail</Button>
              </Box>
            ))
          }
        </SimpleGrid>
    </Box>
  )
}

export default Home