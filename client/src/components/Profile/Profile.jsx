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
  BreadcrumbSeparator,
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
        <img
          className={style.img}
          src={user.picture}
          alt={user.name}
          onClick={onOpen}
        />

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
            <DrawerBody className={style.body}>
              <img
                className={style.innerImg}
                src={user.picture}
                alt={user.name}
              />
              <BreadcrumbSeparator />
              <Heading className={style.title}>{user.name}</Heading>
              <Heading className={style.text}>{user.email}</Heading>
              <Heading className={style.text}>Membership</Heading>
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
