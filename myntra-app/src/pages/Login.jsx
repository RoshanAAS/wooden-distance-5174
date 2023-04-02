import {
  useDisclosure,
  Button,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Image,
  Modal,
  ModalFooter,
  Text,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { LoginForm } from "../Components/LoginForm";
function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button colorScheme="black" variant="link" onClick={onOpen}>
        Profile
      </Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent style={{ width: "400px" }}>
          <Image
            src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/59a76460-3a85-4d4b-b517-faef119c50551675792734635-offer-banner-200-600x240-code-_-MYNTRA200.jpg"
            alt="error"
          />

          <ModalCloseButton />
          <ModalBody>
            <Heading style={{ margin: "25px 0px 20px 0px" }} size="md">
              Login
            </Heading>
            <LoginForm onclose={onClose}/>
          </ModalBody>

          <ModalFooter>
            <Text fontSize="md">
              Not registered yet?
              <Link onClick={onClose} style={{ color: "#ff3f6c" }} to="/signup">
                Create an Account
              </Link>
            </Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default Login;
