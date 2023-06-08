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
      
      <Divider marginTop="5" />
   
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2">Our Purpose</Heading>
        <div className="about_jsa">
        <div   className="home_dash_about">
        At the JavaScript Academy, we strive to provide high-quality and comprehensive notes on all aspects of JavaScript programming. Our notes cover a wide range of topics, from the basics of syntax and data types to more advanced concepts like functional programming and asynchronous programming.
        </div>
        <div className="home_dash_about">
        Our notes are designed to be easy to read and understand, with clear explanations and examples. We provide plenty of code snippets and demos to help illustrate key concepts and show you how to apply them in real-world scenarios.
        </div>
        <div className="home_dash_about">
        In addition to our notes, we also offer plenty of hands-on exercises  to help you reinforce your learning and test your knowledge. We believe that active learning is the best way to become proficient in JavaScript programming, so we encourage you to practice what you learn by building your own projects.
        </div>
        </div>
      </VStack>
    </Container>
  </>
 
  );
};

export default Article;
