import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import FounderBox from "../component/FounderBox";
import { Flex, Box, Center, Grid, SimpleGrid } from "@chakra-ui/react";
import { Details } from '../constant/index.js'

const Team = () => {
  return (
    <>
      <Navbar />
      <SimpleGrid  w={["100%", "100%","100%","60%"]} margin={"auto"} columns={[1, 2, 2]} spacing={6} >
        {Details.map((el) => {
          return <FounderBox  key={el.Name} {...el} />;
        })}
      </SimpleGrid>

      <Footer />
    </>
  );
};

export default Team;
