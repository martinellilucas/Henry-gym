import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./Profile.module.css";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";

const Profile = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  if (isLoading) {
    return <div>LOADING...</div>;
  }
  return (
    isAuthenticated && (
      <>
        <Button ref={btnRef} onClick={onOpen}>
          <img className={style.img} src={user.picture} alt={user.name} />
        </Button>

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Profile</DrawerHeader>
            <DrawerBody>
              <img className={style.img} src={user.picture} alt={user.name} />
              <Heading>{user.name}</Heading>
              <Heading>{user.email}</Heading>
              <Heading>My membership</Heading>
            </DrawerBody>

            <DrawerFooter>
              <Button
                colorScheme="blackAlpha"
                onClick={() => {
                  logout();
                }}
              >
                LOGOUT
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  );
};

export default Profile;
