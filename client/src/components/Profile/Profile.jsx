import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./Profile.module.css";
import { NavLink } from "react-router-dom";
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
  Text,
} from "@chakra-ui/react";
import Plata from "../../assets/Plata.png";
import Platino from "../../assets/Platino.png";
import Oro from "../../assets/Oro.png";
import { useDispatch, useSelector } from "react-redux";
import { getUserByEmail } from "../../redux/Actions";
const Profile = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const client = useSelector((state) => state.user);
  const dispatch = useDispatch();

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
          onClick={() => {
            onOpen();
            dispatch(getUserByEmail(user?.email));
          }}
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

              <Heading className={style.title}>{user.name}</Heading>
              <Text className={style.text}>{user.email}</Text>
              <Text className={style.text}>Membership</Text>
              {client.tipoDeSuscripcion === "Platinum" ? (
                <img className={style.imgMemb} src={Platino} />
              ) : (
                <></>
              )}
              {client.tipoDeSuscripcion === "Silver" ? (
                <img className={style.imgMemb} src={Plata} />
              ) : (
                <></>
              )}
              {client.tipoDeSuscripcion === "Gold" ? (
                <img className={style.imgMemb} src={Oro} />
              ) : (
                <></>
              )}
              {client.tipoDeSuscripcion === "Bronze" && (
                <span>Not a member!</span>
              )}
            </DrawerBody>

            <DrawerFooter>
              {client.isAdmin ? (
                <NavLink to="/dashboard">
                  <Button colorScheme="blackAlpha">DASHBOARD</Button>
                </NavLink>
              ) : (
                <></>
              )}
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
