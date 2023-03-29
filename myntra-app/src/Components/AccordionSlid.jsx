
import React from 'react'
import { Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Box,
    }from '@chakra-ui/react'
    import { IoIosAdd, IoIosRemove } from "react-icons/io";
    import { LinkList } from './LinkList';
export const AccordionSlid = ({item}) => {
  return (
     <>
        <Accordion allowMultiple>
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton>
                          <Box style={{fontWeight:'bold',fontSize:"10px"}} as="span" flex="1" textAlign="left">
                             {item}
                          </Box>
                          {isExpanded ? (
                            <IoIosRemove fontSize="12px" />
                          ) : (
                            <IoIosAdd fontSize="12px" />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                         < LinkList />
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </Accordion> 
     </>
  )
}
