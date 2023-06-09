import React from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react";

import { Link as LinkRouter } from "react-router-dom";
import logo from "../png/logo.png";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as LinkRoute, useLocation, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        // border={"1px solid red"}
        // w="100vw"
        // m="auto"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <LinkRouter to="/welcome"> 
              <Image h="50px" w="50px" src={logo} borderRadius={40}  />
            </LinkRouter>

            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <LinkRoute
              px={2}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
              to="/dashboard"
            >
                Dashboard
              </LinkRoute>
              <LinkRoute
            px={2}
            to="/project"
            py={1}
            rounded={"md"}
            _hover={{
              textDecoration: "none",
              bg: useColorModeValue("gray.200", "gray.700"),
            }}
          
          >
                   Project
              </LinkRoute>
            <LinkRoute
              px={2}
              py={1}
              to="/team"
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
              href={"#"}
            >
              {"Team"}
          </LinkRoute>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem >
                  <LinkRouter to={"/login"}> Login</LinkRouter>
                </MenuItem>
                <MenuItem>
                <LinkRouter to={"/signup"}>  Sign Up</LinkRouter>
                 </MenuItem>
                <MenuDivider />
                <MenuItem>Google</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              

        <LinkRoute
          px={2}
          py={1}
          rounded={"md"}
          _hover={{
            textDecoration: "none",
            bg: useColorModeValue("gray.200", "gray.700"),
          }}
          to={"/dashboard"}
          >
          {"Dashboard"}
          </LinkRoute>
            <LinkRoute
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("gray.200", "gray.700"),
        }}
        to={"/project"}
        >
        {"Project"}
                  </LinkRoute>
          <LinkRoute
px={2}
py={1}
rounded={"md"}
_hover={{
  textDecoration: "none",
  bg: useColorModeValue("gray.200", "gray.700"),
}}
to={"/team"}
>
{"Team"}
</LinkRoute>
              
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
