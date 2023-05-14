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
              <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"/dashboard"}
  >
    {"Dashboard"}
              </Link>
              <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {"Project"}
              </Link>
              <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {"Team"}
  </Link>
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
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
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
              

<Link
px={2}
py={1}
rounded={"md"}
_hover={{
  textDecoration: "none",
  bg: useColorModeValue("gray.200", "gray.700"),
}}
href={"/dashboard"}
>
{"Dashboard"}
          </Link>
          <Link
px={2}
py={1}
rounded={"md"}
_hover={{
  textDecoration: "none",
  bg: useColorModeValue("gray.200", "gray.700"),
}}
href={"#"}
>
{"Project"}
          </Link>
          <Link
px={2}
py={1}
rounded={"md"}
_hover={{
  textDecoration: "none",
  bg: useColorModeValue("gray.200", "gray.700"),
}}
href={"#"}
>
{"Team"}
</Link>
              
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
