import React, { useState } from "react";
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
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  ButtonGroup,
  useToast,
  Divider,
} from "@chakra-ui/react";
import Plata from "../../assets/Plata.png";
import Platino from "../../assets/Platino.png";
import Oro from "../../assets/Oro.png";
import Bronce from "../../assets/broncelogo.png";

import { useDispatch, useSelector } from "react-redux";
import {
  deleteClasexCliente,
  getClasexCliente,
  getUserByEmail,
} from "../../redux/Actions";
const Profile = () => {
  const clasesxCliente = useSelector((state) => state.clasesxCliente);
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const client = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const toast = useToast();

  const showToast = () => {
    toast({
      title: "Unsubscription Successful",
      description: "Your subscription has been successfully canceled.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleUnsubscribe = (e) => {
    dispatch(deleteClasexCliente(client.id, e.target.value));
    showToast();
    onClose();
  };

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
            dispatch(getClasexCliente(client?.id));
          }}
        />

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent fontFamily={'"Titillium Web", sans-serif'}>
            <DrawerCloseButton />
            <DrawerHeader>Profile</DrawerHeader>
            <DrawerBody className={style.body}>
              <img
                className={style.innerImg}
                src={user.picture}
                alt={user.name}
              />

              <Heading fontFamily={'"Titillium Web", sans-serif'}>
                {user.name}
              </Heading>
              <Text mb={"10px"} fontFamily={'"Titillium Web", sans-serif'}>
                {user.email}
              </Text>
              <Text fontFamily={'"Titillium Web", sans-serif'}>CLASSES</Text>
              <Divider w={"60%"} border={"3px solid grey"} />
              <Text mb={"10px"}>
                {clasesxCliente.map((clase) => {
                  return (
                    <Flex
                      flexDir={"column"}
                      key={clase.id}
                      alignItems="center"
                      justifyContent="center"
                      mb={"20px"}
                    >
                      <Text value={clase.id} textAlign={"left"}>
                        {`${clase.nombre.toUpperCase()}`}: {` `}
                        {clase.dias.map((dia) => {
                          return `${dia.slice(0, 3)} `;
                        })}
                        {"  at  "}
                        {clase.horario.slice(0, 5)}HS
                      </Text>
                      <Popover>
                        {({ onClose }) => (
                          <>
                            <PopoverTrigger>
                              <Button
                                w={"fit-content"}
                                alignSelf="center"
                                colorScheme="red"
                              >
                                Unsubscribe
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent>
                              <PopoverHeader>Confirmation</PopoverHeader>
                              <PopoverBody>
                                Are you sure you want to unsubscribe from{" "}
                                {clase.nombre}?
                              </PopoverBody>
                              <PopoverFooter d="flex" justifyContent="flex-end">
                                <ButtonGroup>
                                  <Button
                                    value={clase.id}
                                    colorScheme="red"
                                    onClick={handleUnsubscribe}
                                  >
                                    Confirm
                                  </Button>
                                  <Button onClick={() => onClose()}>
                                    Cancel
                                  </Button>
                                </ButtonGroup>
                              </PopoverFooter>
                            </PopoverContent>
                          </>
                        )}
                      </Popover>
                    </Flex>
                  );
                })}
              </Text>
              <Text>Membership</Text>
              {client?.tipoDeSuscripcion === "Platinum" ? (
                <img className={style.imgMemb} src={Platino} />
              ) : (
                <></>
              )}
              {client?.tipoDeSuscripcion === "Silver" ? (
                <img className={style.imgMemb} src={Plata} />
              ) : (
                <></>
              )}
              {client?.tipoDeSuscripcion === "Gold" ? (
                <img className={style.imgMemb} src={Oro} />
              ) : (
                <></>
              )}
              {client?.tipoDeSuscripcion === "Bronze" && (
                <>
                  <span>Not a member!</span>
                  <img
                    className={style.imgMemb}
                    src={Bronce}
                    alt="not-a-member"
                  />
                </>
              )}
            </DrawerBody>

            <DrawerFooter justifyContent="space-evenly">
              {client?.isAdmin ? (
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
