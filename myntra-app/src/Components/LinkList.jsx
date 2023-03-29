import React from "react";
import {UnorderedList,
    ListItem} from '@chakra-ui/react'
export const LinkList = () => {
  return (
    <>
      <UnorderedList style={{listStyle:"none",fontSize:'10px'}}>
        <ListItem>Topwear</ListItem>
        <ListItem>Indian & Festive Wear</ListItem>
        <ListItem>Bottomwear</ListItem>
        <ListItem>Footwear</ListItem>
      </UnorderedList>
    </>
  );
};
