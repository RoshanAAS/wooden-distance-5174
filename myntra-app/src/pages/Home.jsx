import React from "react";
import AutoPlay from "../Components/Carousel";
import { dealoftheday } from "../data/Allcategoryimage";
import { DealCard } from "../Components/DealCard";
import { SimpleGrid, Text } from "@chakra-ui/react";
import './Navbar.css'
export const Home = () => {
  return (
    <>
      <AutoPlay />
      <Text className='TextHeading' style={{fontWeight:'500',margin:'70px 0px 0px 35px '}} fontSize={'3xl'}>DEAL OF THE DAY</Text>
      <SimpleGrid
        style={{
          marginTop: "60px",
          justifyContent: "center",
          alignItems: "center",
        }}
        gap={0}
        columns={{ base: 1, sm: 2, md: 8 }}
        spacing="40px"
      >
        {dealoftheday?.map((item, index) => (
          <DealCard key={index + 1} {...item} />
        ))}
      </SimpleGrid>
    </>
  );
};
