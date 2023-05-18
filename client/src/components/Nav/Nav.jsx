//import SearchBar from "../SearchBar/SearchBar";
import logo from "../../assets/logo.png";
import style from "../Nav/Nav.module.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Button,
  Box,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../Profile/Profile";

const Nav = () => {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const scrollToMembresias = () => {
    const membresiasSection = document.getElementById("membresias");
    if (membresiasSection) {
      membresiasSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <Box
      className={style.nav}
      position="sticky"
      top="0"
      zIndex="999"
      transition="height 0.3s"
    >
      <img className={style.logo} src={logo} alt="logo" />

      <Breadcrumb separator=" " className={style.itemContainer}>
        <BreadcrumbItem className={style.item}>
          <BreadcrumbLink as={NavLink} to="/home">
            HOME
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem className={style.item}>
          <BreadcrumbLink>CLASSES</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem className={style.item}>
          {isAuthenticated && user ? (
            <BreadcrumbLink as={NavLink} to="/rutinas">
              ROUTINES
            </BreadcrumbLink>
          ) : (
            <></>
          )}
        </BreadcrumbItem>
        <BreadcrumbItem className={style.item}>
          {isAuthenticated && user ? (
            <BreadcrumbLink as={NavLink} to="/ejercicios">
              EXERCISES
            </BreadcrumbLink>
          ) : (
            <></>
          )}
        </BreadcrumbItem>
        <BreadcrumbItem className={style.item}>
          <BreadcrumbLink onClick={scrollToMembresias}>
            MEMBERSHIPS
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem className={style.item}>
          <BreadcrumbLink as={NavLink} to="/about">
            ABOUT
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      {!isAuthenticated && !user ? (
        <Button
          onClick={() => {
            loginWithRedirect();
          }}
          className={style.btn}
          colorScheme="blackAlpha"
          size="lg"
        >
          LOGIN
        </Button>
      ) : (
        <div className={style.profileContainer}>
          <Profile />
          <Button
            colorScheme="blackAlpha"
            onClick={() => {
              logout();
            }}
          >
            LOGOUT
          </Button>
        </div>
      )}
    </Box>
  );
};

export default Nav;
