import React from 'react'
import {Box,Image,
FormControl,Input,FormHelperText,InputGroup,InputRightElement,Text,Heading} from '@chakra-ui/react'
import {useState} from 'react'
import { IoMdEye,IoMdEyeOff } from "react-icons/io";

export const Signup = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
  return (
    <div style={{width:'100%',
    height:'77vh'
    ,marginTop:'100px',
     display:'flex',justifyContent:'center',alignItems:'center'}}>

          <Box style={{width:'28%',height:'73vh',margin:'auto',
           boxShadow:'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
           paddingBottom:'15px',
           }}>
          <Image
            src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/59a76460-3a85-4d4b-b517-faef119c50551675792734635-offer-banner-200-600x240-code-_-MYNTRA200.jpg"
            alt="error"
          />
            <Box style={{width:'80%',margin:'auto'}}>
            <Heading style={{margin:'25px 0px 20px 0px'}} size='md'>Sign Up</Heading>
            <form>
            <FormControl>
                <Input size="md" variant="flushed"
                 type="text"
                 placeholder="Enter Full Name" />
                <FormHelperText></FormHelperText>
              </FormControl>
              <FormControl>
                <Input size="md" variant="flushed"
                 type="Number"
                 placeholder="Enter Phone Number" />
                <FormHelperText></FormHelperText>
              </FormControl>
              <FormControl>
                <Input size="md" variant="flushed"
                 type="email"
                 placeholder="Enter Email" />
                <FormHelperText></FormHelperText>
              </FormControl>
              <FormControl>
                <InputGroup size="md">
                  <Input
                    size="md"
                    variant="flushed"
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                  />
                  <InputRightElement width="4.5rem">
                    <Text h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? <IoMdEye/> : <IoMdEyeOff/>}
                    </Text>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Input style={{marginTop:'25px',backgroundColor:'#ff3f6c',color:'white'}} type='submit' value='Register'/>
            </form>
            <Text style={{marginTop:'10px'}} fontSize='xs'>Already registered?<a style={{color:'#ff3f6c'}} href="/">Login</a></Text>
            </Box>
          </Box>

    </div>
  )
}
// payload.email == "" ||
// payload.password == "" ||
// payload.phone == "" ||
// payload.name
