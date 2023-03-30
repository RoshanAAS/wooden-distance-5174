import React from "react";
// import { NavLink } from 'react-router-dom';
import { Input, InputGroup, InputLeftElement, Text ,Box,Image} from "@chakra-ui/react";
import "../pages/Navbar.css";

import {
  HiOutlineShoppingBag,
  HiOutlineUser,
  HiOutlineMagnifyingGlass,
} from "react-icons/hi2";
import { IoIosHeartEmpty } from "react-icons/io";
import MiniNavbar from "../Components/MiniNavbar";
import { extendTheme } from '@chakra-ui/react'

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
}
const theme = extendTheme({ breakpoints })






export const Navbar = () => {
  
  return (
    <>
       <MiniNavbar/>
      <Box w={theme} className="nav-container">
        <div className="logo">
          <Image
            width="55px"
            src="https://s.yimg.com/fz/api/res/1.2/Mg8BU.qyWq14hqkxr86nfw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/88485e2c-b94e-3589-b5cc-f911bca0be47/t_500x300"
            alt="logo"
          />
        </div>

        <Box w={theme} className="menu-container">
          <ul>
            <li>
              <Text color="#434757" fontSize="sm" as="b">
                MEN
              </Text>
            </li>
            <li>
              <Text color="#434757" fontSize="sm" as="b">
                WOMEN
              </Text>
            </li>
            <li>
              <Text color="#434757" fontSize="sm" as="b">
                KIDS
              </Text>
            </li>
            <li>
              <Text color="#434757" fontSize="sm" as="b">
                HOME&LIVING
              </Text>
            </li>
            <li>
              <Text color="#434757" fontSize="sm" as="b">
                BEAUTY
              </Text>
            </li>
            <li>
              <Text color="#434757" fontSize="sm" as="b">
                STUDIO
              </Text>
            </li>
          </ul>
        </Box>

        {/* serch part of nav */}

        <Box w={theme} className="search-bar-icons">
          <div>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                fontSize="1.2em"
                children={<HiOutlineMagnifyingGlass />}
              />
              <Input
                variant="filled"
                width={theme}
                type="text"
                placeholder="Search Product,Brands and more"
              />
            </InputGroup>
          </div>
          <div >
            <HiOutlineUser className="icon-profile-bag-wishlist" />
            <Text color="#434757" fontSize="sm" as="b">
              Profile
            </Text>
          </div>
          <div >
            <IoIosHeartEmpty className="icon-profile-bag-wishlist" />
            <Text color="#434757" fontSize="sm" as="b">
              Wishlist
            </Text>
          </div>
          <div >
            <HiOutlineShoppingBag style={{marginLeft:'5px'}} />
            <Text color="#434757" fontSize="sm" as="b">
              Bag
            </Text>
          </div>
        </Box>

        
      </Box>
    </>
  );
};
export default Navbar;
