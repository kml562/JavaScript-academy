import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
} from '@chakra-ui/react';
import  React from 'react';
import { Link } from 'react-router-dom'



const ListHeader = ({ children }) => {

  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  const token = localStorage.getItem('token'); // get token from local storage

  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
          <Stack align={'center'}>
            <ListHeader>Product</ListHeader>

            <Link to={'/project'}>Overview</Link>
           
            <a href="https://www.youtube.com/channel/UC3PSbYmfM5S5eYICJth5CFA" target="_blank" rel="noopener noreferrer">Tutorials</a>


          </Stack>
          <Stack align={'center'}>
            <ListHeader>Company</ListHeader>

            {!token && (
              <Link to={'/signup'}>Admin Login</Link>
            )}

            <Link to={'/team'}>About Us</Link>
            <a href="mailto:piyuindia4@gmail.com">Contact Us</a>
            <Link to={'/team'}>Partners</Link>
          </Stack>
          
          <Stack align={'center'}>
            <ListHeader>Follow Us</ListHeader>
            <a href="https://www.youtube.com/channel/UC3PSbYmfM5S5eYICJth5CFA" target="_blank" rel="noopener noreferrer">Youtube</a>
            <a href="https://twitter.com/Priyansh_____" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.instagram.com/urdevdose/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.linkedin.com/in/kamal-bisht-552a17193/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}>
    
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          © 2023 JS Academy. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}