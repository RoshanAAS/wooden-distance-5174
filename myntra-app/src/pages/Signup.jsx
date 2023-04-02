import React from "react";
import {
  Box,
  Image,
  FormControl,
  Input,
  FormHelperText,
  InputGroup,
  InputRightElement,
  Text,
  Heading,
} from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useReducer } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import axios from "axios";

const initState = {
  name: "",
  email: "",
  password: "",
  phone: "",
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "name": {
      return { ...state, name: payload };
    }
    case "email": {
      return { ...state, email: payload };
    }
    case "password": {
      return { ...state, password: payload };
    }
    case "phone": {
      return { ...state, phone: payload };
    }
    case "reset": {
      return initState;
    }
    default: {
      throw new Error("Invelid Action Type");
    }
  }
};

export const Signup = () => {
  const [show, setShow] = useState(false);
  const [state, dispatch] = useReducer(reducer, initState);
  const handleClick = () => setShow(!show);

  const handChange = (e) => {
    const { name, value } = e.target;

    dispatch({ type: name, payload: value });
  };
  const handalSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    dispatch({ type: "reset" });
    if (
      state.email === "" ||
      state.password === "" ||
      state.phone === "" ||
      state.name === ""
    ) {
      toast.warn(
        "Please fill out all required fields in the registration form",
        {
          position: "top-center",
          theme: "colored",
        }
      );
    } else {
      axios({
        method: "post",
        url: "https://outrageous-cyan-overcoat.cyclic.app/users/register",
        data: state,
      })
        .then((res) => {
          if (res.data.msg === "User already exist, please login") {
            toast.error("User Already Exist, Please Login", {
              position: "top-center",
              theme: "colored",
            });
          } else {
            toast.success("Sign Up successfull", {
              position: "top-center",
              theme: "colored",
            });
          }
        })
        .catch((err) => {
          toast.error("Somthing Went Wrong", {
            position: "top-center",
            theme: "colored",
          });
        });
    }
  };
  const { email, phone, password, name } = state;
  return (
    <div
      style={{
        width: "100%",
        height: "85vh",
        marginTop: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        style={{
          width: "28%",
          height: "73vh",
          margin: "auto",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          paddingBottom: "15px",
        }}
      >
        <Image
          src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/59a76460-3a85-4d4b-b517-faef119c50551675792734635-offer-banner-200-600x240-code-_-MYNTRA200.jpg"
          alt="error"
        />
        <Box style={{ width: "80%", margin: "auto" }}>
          <Heading style={{ margin: "25px 0px 20px 0px" }} size="md">
            Sign Up
          </Heading>
          <form onSubmit={handalSubmit}>
            <FormControl>
              <Input
                value={name}
                onChange={handChange}
                name="name"
                size="md"
                variant="flushed"
                type="text"
                placeholder="Enter Full Name"
              />
              <FormHelperText></FormHelperText>
            </FormControl>
            <FormControl>
              <Input
                value={phone}
                onChange={handChange}
                name="phone"
                size="md"
                variant="flushed"
                type="Number"
                placeholder="Enter Phone Number"
              />
              <FormHelperText></FormHelperText>
            </FormControl>
            <FormControl>
              <Input
                value={email}
                onChange={handChange}
                name="email"
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
                  value={password}
                  onChange={handChange}
                  name="password"
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
              value="Register"
            />
          </form>
          <Text style={{ marginTop: "10px" }} fontSize="xs">
            Already registered?
            <a style={{ color: "#ff3f6c" }} href="/">
              Login
            </a>
          </Text>
        </Box>
      </Box>

      <ToastContainer />
    </div>
  );
};
// payload.email == "" ||
// payload.password == "" ||
// payload.phone == "" ||
// payload.name
