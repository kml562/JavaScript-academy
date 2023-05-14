import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Spinner,
} from '@chakra-ui/react';
import axios from 'axios';
import Navbar from '../component/Navbar';
import { useState } from 'react';
import { Link as LinkRoute, useLocation, useNavigate } from 'react-router-dom'


const formData = {
  email: '',
  password: '',
};

export default function Login() {
  const [form, setForm] = useState(formData);
  const [loading, setLoading] = useState(false)
  const location = useLocation();
  const navigate = useNavigate();

  const {VITE_URL} = import.meta.env;

  

  const handleSubmit = async(e) => {
    e.preventDefault();
    const {email, password} = form
    setLoading(true)
    try {
        const res = await axios.post(
          `${VITE_URL}/user/login`,
          { email, password }
        );
        console.log(res.data); 

        
      if(res.data.token){
        localStorage.setItem('token', res.data.token); // store token in local storage
        localStorage.setItem('user', JSON.stringify(res.data.user)); // store user data in local storage
        navigate('/')
      }
        setLoading(false)


      } catch (error) {
      console.log(error)
    }

  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value })
  };

  return (
    <>
      <Navbar />
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool{' '}
              <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            as="form"
            onSubmit={handleSubmit}
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleInputChange}
                />
              </FormControl>
              <Stack spacing={10}>
                <Text fontSize={'lg'} color={'gray.600'}>
                Don't Have Account - 
                <LinkRoute to="/signup" color={'blue.400'}> Sign Up</LinkRoute>
              </Text>
                <Button
                  type="submit"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  {loading ? (
                    <Spinner />
                  ) : (
                   <> Sign In</>
                  )}
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
