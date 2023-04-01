import React from "react";
import AutoPlay from "../Components/Carousel";
import { dealoftheday } from "../data/Allcategoryimage";
import { brands } from "../data/Allcategoryimage";
import { DealCard } from "../Components/DealCard";
import { trends } from "../data/Allcategoryimage";
import { categories } from "../data/Allcategoryimage";
import { SimpleGrid, Text ,Box} from "@chakra-ui/react";
import { myntraLux } from "../data/Allcategoryimage";
import { occection } from "../data/Allcategoryimage";
import PauseOnHover from "../Components/CategoriesSlid";
import { ColorOFsession } from "../data/Allcategoryimage";
import { TOPINFLUENCERS } from "../data/Allcategoryimage";
import { tranding } from "../data/Allcategoryimage";
import './Navbar.css'
export const Home = () => {
  return (
    <>
      <Box styele={{marginTop:'20px'}} className='categori-slid'>
      <PauseOnHover />
      </Box>
      <Box className="auto-play">
      <AutoPlay />
      </Box>
      <Text className='TextHeading' style={{fontWeight:'500'}} fontSize={'2xl'}>DEAL OF THE DAY</Text>
      <SimpleGrid
        style={{
          marginTop: "60px",
          justifyContent: "center",
          alignItems: "center",
        }}
        gap={0}
        columns={{ base: 4, sm: 2, md: 8 }}
        spacing="40px"
      >
        {dealoftheday?.map((item, index) => (
          <DealCard key={index + 1} {...item} />
        ))}
      </SimpleGrid>
      <Text className='TextHeading' style={{fontWeight:'500'}} fontSize={'2xl'}>
        BEST OF MYNTRA EXCLUSIVE BRANDS
      </Text>
      <SimpleGrid
        style={{
          marginTop: "50px",
        }}
        gap={2}
        columns={{ base: 2, sm: 2, md: 8 }}
        spacing="40px"
      >
        {brands?.map((item, index) => (
          <DealCard key={index + 1} {...item} />
        ))}
      </SimpleGrid>

      <Text className='TextHeading' style={{fontWeight:'500',}} fontSize={'2xl'}>
        TOP PICKS
      </Text>
      <SimpleGrid
        style={{
          marginTop: "50px",
        }}
        gap={0}
        columns={{ base: 2, sm: 2, md: 8 }}
        spacing="40px"
      >
        {trends?.map((item, index) => (
          <DealCard key={index + 1} {...item} />
        ))}
      </SimpleGrid>
      <Text className='TextHeading-ONE' style={{fontWeight:'500',}} fontSize={'2xl'}>
       CATEGORIES TO BAG
      </Text>
       <Box className="categories-hidden">
       <SimpleGrid
        style={{
          marginTop: "50px",
        }}
        gap={0}
        columns={{ base: 2, sm: 2, md: 8 }}
        spacing="40px"
      >
        {categories?.map((item, index) => (
          <DealCard key={index + 1} {...item} />
        ))}
      </SimpleGrid>

       </Box>
       <Text className='TextHeading' style={{fontWeight:'500',}} fontSize={'2xl'}>
        MYNTRA LUXE
      </Text>
       <SimpleGrid
        style={{
          marginTop: "50px",
        }}
        gap={0}
        columns={{ base: 2, sm: 2, md: 8 }}
        spacing="40px"
      >
        {myntraLux?.map((item, index) => (
          <DealCard key={index + 1} {...item} />
        ))}
      </SimpleGrid>

      <Text className='TextHeading' style={{fontWeight:'500',}} fontSize={'2xl'}>
        NEWNESS FOR EVERY OCCASION
      </Text>
      <SimpleGrid
        style={{
          marginTop: "50px",
        }}
        gap={0}
        columns={{ base: 2, sm: 2, md: 8 }}
        spacing="40px"
      >
        {occection?.map((item, index) => (
          <DealCard key={index + 1} {...item} />
        ))}
      </SimpleGrid>

      <Text className='TextHeading' style={{fontWeight:'500',}} fontSize={'2xl'}>
        COLOURS OF THE SEASON
      </Text>
      <SimpleGrid
        style={{
          marginTop: "50px",
        }}
        gap={0}
        columns={{ base: 2, sm: 2, md:4 }}
        spacing="40px"
      >
        {ColorOFsession?.map((item, index) => (
          <DealCard key={index + 1} {...item} />
        ))}
      </SimpleGrid>

      <Text className='TextHeading' style={{fontWeight:'500',}} fontSize={'2xl'}>
      TOP INFLUENCERS EXCLUSIVE STYLES
      </Text>
      <SimpleGrid
        style={{
          marginTop: "50px",
        }}
        gap={0}
        columns={{ base: 2, sm: 2, md:6 }}
        spacing="40px"
      >
        {TOPINFLUENCERS?.map((item, index) => (
          <DealCard key={index + 1} {...item} />
        ))}
      </SimpleGrid>


      <Text className='TextHeading' style={{fontWeight:'500',}} fontSize={'2xl'}>
      TRENDING OUTFITS BY INFLUENCERS
      </Text>
      <SimpleGrid
        style={{
          marginTop: "50px",
        }}
        gap={0}
        columns={{ base: 2, sm: 2, md:8 }}
        spacing="40px"
      >
        {tranding?.map((item, index) => (
          <DealCard key={index + 1} {...item} />
        ))}
      </SimpleGrid>
 
    </>
  );
};
