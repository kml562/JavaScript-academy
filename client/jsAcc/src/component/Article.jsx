import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  useColorModeValue,
  Container,
  VStack,
} from "@chakra-ui/react";

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src={props.url}
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const Article = () => {
  return (<>
       <Container maxW={"7xl"} p="12">
      <Heading as="h1">Stories by  Co-Founder</Heading>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                borderRadius="lg"
                src={
                  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(orange.600 1px, transparent 1px)",
                "radial(orange.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <BlogTags tags={["Engineering", "Product"]} />
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
            Hey There
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
        Welcome to the JavaScript Academy! Our website is designed to help you learn and improve your JavaScript skills. We offer a structured approach to learning that will guide you through the fundamentals of JavaScript and beyond.
          </Text>
          <BlogAuthor url="https://avatars.githubusercontent.com/u/111355794?v=4" name="Kamal Co-Founder"
           date={new Date("2023-05-14T19:01:27Z")} />
          {/* <BlogAuthor url="https://avatars.githubusercontent.com/u/96904296?v=4"
              name="Priyansh Sharma"
            date={new Date("2023-05-15T19:01:27Z")}
            /> */}
        </Box>
      </Box>
      {/* <Heading as="h2" marginTop="5">
        Latest articles
      </Heading> */}
      <Divider marginTop="5" />
      {/* <Wrap spacing="30px" marginTop="5">
        <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                <Image
                  transform="scale(1.0)"
                  src={
                    "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                />
              </Link>
            </Box>
            <BlogTags tags={["Engineering", "Product"]} marginTop="3" />
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                Some blog title
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
            At the JavaScript Academy, we believe that learning should be an active process. That's why we encourage you to practice what you learn by building your own projects. We provide plenty of resources and guidance to help you get started, whether you're building a simple calculator or a full-fledged web application.
            </Text>
            <BlogAuthor url="https://avatars.githubusercontent.com/u/96904296?v=4"
              name="Priyansh Co-Founder"
              date={new Date("2023-05-15")}
            />
          </Box>
        </WrapItem>
      </Wrap> */}
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2">What we write about</Heading>
        <Text as="p" fontSize="lg" className="home_dash_about">
        At the JavaScript Academy, we strive to provide high-quality and comprehensive notes on all aspects of JavaScript programming. Our notes cover a wide range of topics, from the basics of syntax and data types to more advanced concepts like functional programming and asynchronous programming.
        </Text>
        <Text as="p" fontSize="lg">
        Our notes are designed to be easy to read and understand, with clear explanations and examples. We provide plenty of code snippets and demos to help illustrate key concepts and show you how to apply them in real-world scenarios.


        </Text>
        <Text as="p" fontSize="lg">
        In addition to our notes, we also offer plenty of hands-on exercises  to help you reinforce your learning and test your knowledge. We believe that active learning is the best way to become proficient in JavaScript programming, so we encourage you to practice what you learn by building your own projects.
        </Text>
      </VStack>
    </Container>
  </>
 
  );
};

export default Article;
