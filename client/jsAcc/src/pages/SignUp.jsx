import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Navbar from "../component/Navbar";
import { Link as LinkRoute, useLocation, useNavigate } from 'react-router-dom'
import axios from "axios";
import { Spinner } from '@chakra-ui/react'


export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false)
  
  const [formData, setFormData] = useState({
    name : "",
    email: '',
    password: '',
  });

  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData ({
      ...formData,
      [name]: value,
    })
  };

  const {VITE_URL} = import.meta.env;


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true)
      const res = await axios.post( `${VITE_URL}/user/signup`, formData);
      console.log(res.data);

      if(res.data.token){
        localStorage.setItem('token', res.data.token); // store token in local storage
        localStorage.setItem('user', JSON.stringify(res.data.user)); // store user data in local storage
        navigate('/')
      }
      setLoading(false)
    } catch (error) {
      alert("Please Enter Corrrect Email or password")
      setLoading(false)
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Navbar />
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <form onSubmit={handleSubmit}>
              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <FormControl id="name" isRequired>
                      <FormLabel>Full Name</FormLabel>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        name="name"
                      />
                    </FormControl>
                  </Box>
                
                </HStack>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleChange}
                      name="password"
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    type="submit"
                    // isLoading={isLoading}
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                  {loading ? (
                    <Spinner />
                  ) : (
                   <> Sign up</>
                  )}
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={"center"}>
                    Already a user?{" "}
                    <LinkRoute to="/login" color={"blue.400"}>
                      Login
                    </LinkRoute>
                  </Text>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
