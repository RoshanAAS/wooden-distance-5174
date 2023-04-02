import React from "react";
import {
  Box,
  Stack,
  CheckboxGroup,
  Checkbox,
  Text,
  Radio,
  RadioGroup,
  SimpleGrid,
  Button,
  HStack,
  Heading
} from "@chakra-ui/react";
import { MensCard } from "../Components/MensCard";
import { useEffect,useState } from "react";
import axios from "axios";
 
 const getData=(page,brand)=>{
  return axios.get('https://tiny-jade-rabbit-gear.cyclic.app/men',{
    params:{
        _limit:10,
        _page:page,
        q:brand
    }
  })
}

export const Mens = () => {
    const [data,setData]=useState([])
    const [page,setPage]=useState(1)
    const [totalpage,setTotalpage]=useState(null)
    const [brand,setBrand]=useState("")
    const [loading,setLoanding]=useState(false)

 const handalfetch= async(page,brand)=>{
  setLoanding(true)
     try {
     let res= await getData(page,brand)
     setTotalpage(Math.ceil(res.data.length))
        setData(res.data)
        setLoanding(false)
     } catch (error) {
     console.log(error)
     setLoanding(true)
     }
 }

 useEffect(()=>{
    handalfetch(page,brand)
 },[page,brand])

 const handalchange=(e)=>{
    if(e.target.checked)
    {
      setBrand(e.target.value)
      console.log(e.target.value)
    }
    else{
      setBrand(null)
    }

 }


  let arr= new Array(totalpage).fill(0)
  return (
    <div style={{ marginTop: "100px" }}>
      <Box
        style={{
          marginTop: "100px",
          width: "97%",
          margin: "auto",
          display:'flex',
          justifyContent:'space-between'
          
        }}
      >
        <Box  style={{
                width: "15%",
                boxShadow:"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                padding: "20px",
              }}>
          <CheckboxGroup
            colorScheme="pink"
            defaultValue={["naruto", "kakashi"]}
            style={{marginTop:'15px'}}
          >
            <Stack
              spacing={[1, 1]}
              direction={["column"]}
              style={{marginTop:'15px'}}
            >
              <Text fontSize="xs" style={{ fontWeight: "bold" }}>
                BRAND
              </Text>
              <Checkbox name='Roadster' onChange={handalchange} size="sm" value="Roadster">
                Roadster
              </Checkbox>
              <Checkbox onChange={handalchange}  size="sm" value="basics">
                Basics
              </Checkbox>
              <Checkbox onChange={handalchange}  size="sm" value="HIGHLANDER">
                HIGHLANDER
              </Checkbox>
              <Checkbox onChange={handalchange}  size="sm" value="The Indian Garage Co">
                The Indian Garage Co
              </Checkbox>
              <Checkbox onChange={handalchange}  size="sm" value="AllenSolly">
                Allen Solly
              </Checkbox>
            </Stack>
          </CheckboxGroup>

          <CheckboxGroup
            colorScheme="pink"
            defaultValue={["naruto", "kakashi"]}
          >
            <Stack
              spacing={[1, 1]}
              direction={["column"]}
              style={{marginTop:'15px'}}
            >
              <Text fontSize="xs" style={{ fontWeight: "bold" }}>
                PRICE
              </Text>
              <Checkbox size="sm" value="420to668">
                Rs. 424 to Rs. 668
              </Checkbox>
              <Checkbox size="sm" value="668to912">
                Rs. 668 to Rs. 912
              </Checkbox>
              <Checkbox size="sm" value="912to1156">
                Rs. 912 to Rs. 1156
              </Checkbox>
              <Checkbox size="sm" value="1156to1400">
                Rs. 1156 to Rs. 1400
              </Checkbox>
            </Stack>
          </CheckboxGroup>

          <CheckboxGroup
            colorScheme="pink"
            defaultValue={["naruto", "kakashi"]}
          >
            <Stack
              spacing={[1, 1]}
              direction={["column"]}
              style={{marginTop:'15px'}}
            >
              <Text fontSize="xs" style={{ fontWeight: "bold" }}>
                COLOR
              </Text>
              <Checkbox size="sm" value="sea green">
                Sea Green
              </Checkbox>
              <Checkbox size="sm" value="Blue">
                Blue
              </Checkbox>
              <Checkbox size="sm" value="olive">
                Olive
              </Checkbox>
              <Checkbox size="sm" value="grey">
                Grey
              </Checkbox>
              <Checkbox size="sm" value="navi blue">
                Navy Blue
              </Checkbox>
              <Checkbox size="sm" value="green">
                Green
              </Checkbox>
              <Checkbox size="sm" value="brown">
                Brown
              </Checkbox>
              <Checkbox size="sm" value="black">
                Black
              </Checkbox>
              <Checkbox size="sm" value="pink">
                Pink
              </Checkbox>
            </Stack>
          </CheckboxGroup>

          <RadioGroup defaultValue="2">
            <Stack
              spacing={1}
              direction="column"
              style={{marginTop:'15px'}}
            >
              <Text fontSize="xs" style={{ fontWeight: "bold" }}>
                {" "}
                DISCOUNT RANGE
              </Text>

              <Radio colorScheme="pink" value="1">
                10% and above
              </Radio>
              <Radio colorScheme="pink" value="2">
                20% and above
              </Radio>
              <Radio colorScheme="pink" value="3">
                30% and above
              </Radio>
              <Radio colorScheme="pink" value="4">
                40% and above
              </Radio>
              <Radio colorScheme="pink" value="5">
                50% and above
              </Radio>
              <Radio colorScheme="pink" value="6">
                60% and above
              </Radio>
              <Radio colorScheme="pink" value="7">
                70% and above
              </Radio>
            </Stack>
          </RadioGroup>
        </Box>
        <Box style={{width:'84%'}}>
         {loading?<Heading>Loading...</Heading> :<SimpleGrid   columns={{ base: 2, sm: 2, md:5 }} spacing={8}>
          {data?.map((item,) => (
             <MensCard {...item} />
           ))}
          </SimpleGrid>}
         
        </Box>
      </Box>
   
       <HStack style={{width:'32%',margin:'auto',marginTop:'20px'}}>

        {arr?.map((e,i)=>{
          return <Button onClick={()=> setPage(i+1)}>{i+1}</Button>
        })}
       </HStack>
        
          
    </div>
  );
};
