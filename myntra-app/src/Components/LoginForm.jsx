import React from 'react'
import {FormControl,
    Input,
    FormHelperText,
    InputGroup,
    InputRightElement,
    Text,} from '@chakra-ui/react'
import {useState} from "react"
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
export const LoginForm = () => {
    const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <form>
    <FormControl>
      <Input
        size="md"
        variant="flushed"
        type="email"
        placeholder="Enter Email"
      />
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
            {show ? <IoMdEye /> : <IoMdEyeOff />}
          </Text>
        </InputRightElement>
      </InputGroup>
    </FormControl>
    <Input
      style={{
        marginTop: "25px",
        backgroundColor: "#ff3f6c",
        color: "white",
      }}
      type="submit"
      value="Login"
    />
  </form>
  )
}
