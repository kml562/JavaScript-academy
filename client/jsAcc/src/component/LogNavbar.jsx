import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
   Image,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import logo from "../png/logo.png";
import { Link as LinkRouter } from "react-router-dom";
import { useState } from "react";
import { BsSearch } from 'react-icons/bs'


export default function LogNavbar() {
  const { isOpen, onToggle } = useDisclosure()
  const [searchTerm, serSearchTerm] = useState("")
  const user = JSON.parse(localStorage.getItem('user'))



  const handleSearch = async(e)=>{
    try {
      e.preventDefault();
      console.log(searchTerm)
    } catch (error) {
      alert(error.message);
      console.log(error.message)
    }
  }


  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
            <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
             
              <LinkRouter to="/"> 
                <Image  textAlign={useBreakpointValue({ base: "center", md: "left" })}  h="50px" src={logo} borderRadius={40}  />
              </LinkRouter>
              <Flex display={{ base: "none", md: "flex" }} ml={10}>
                <DesktopNav />
              </Flex>
              <Flex  display={{ base: "none", md: "flex" }} ml={10}  justify={"center"}
                align={"center"}>

              
              </Flex>
        </Flex>

       

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
         
          <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"pink.400"}
            _hover={{
              bg: "pink.300",
            }}
          >
           <LinkRouter to="/udboard" className=" ">
            {user?.name}
           </LinkRouter>

            
          </Button>

          <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"pink.400"}
            _hover={{
              bg: "pink.300",
            }}
          >
            <LinkRouter to="/create" className="">
              CREATE
            </LinkRouter>
          </Button>


          <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"green.400"}
            _hover={{
              bg: "gray.300",
            }}
          >
            <LinkRouter to="/search" className="">
              Search
            </LinkRouter>
          </Button>


         
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={6}  marginTop={""} >
      {NAV_ITEMS.map((navItem) => (
        <Flex key={navItem.label} 
         justify={"center"}
          align={"center"}
        >
          <Popover trigger={"hover"} placement={"bottom-start"}>
              <LinkRouter
                to={`${navItem.to}`}
              >
                {navItem.label}
              </LinkRouter>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Flex>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, subLabel,to }) => {
  return (
    <LinkRouter
      to={`${to}`}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
            <div>
              <Text
                transition={"all .3s ease"}
                _groupHover={{ color: "pink.400" }}
                fontWeight={500}
              >
                  {label}
              </Text>
            </div>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>


        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </LinkRouter>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}

      {MOBILE_MORE.map((item)=>(
        <MobileNavItem key={item.label} {...item} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, to }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >

        <LinkRouter to={`${to}`} className="">
            <Text
              fontWeight={600}
              color={useColorModeValue("gray.600", "gray.200")}
            >
            {label}
          </Text>
        </LinkRouter>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>
    </Stack>
  );
};

const NAV_ITEMS = [
    {
    label: "JavaScript",
    to : "/tech/javascript"
  },
  {
    label: "React",
    to: "/tech/react"
  },
  {
    label: "Nodejs",
    to: "/tech/nodejs",
  },
  {
    label: "MongoDB",
    to: "/tech/mongodb",
  },

  
];


const MOBILE_MORE =[
  {
    label : "Dashboard",
    to : "/tech/udboard"
  },
  {
    label : "Create",
    to : "/tech/create"
  },
  {
    label : "Search",
    to : "/search"
  }
]