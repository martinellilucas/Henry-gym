//import SearchBar from "../SearchBar/SearchBar";
import logo from "../../assets/logo.png";
import style from "../Nav/Nav.module.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Box,
} from "@chakra-ui/react";

import { NavLink, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../Profile/Profile";
import { useDispatch, useSelector } from "react-redux";
import { getUserByEmail } from "../../redux/Actions";

const Nav = () => {
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();
  const client = useSelector((state) => state.user);
  const membership = client?.tipoDeSuscripcion;
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  useEffect(() => {
    if (user) {
      dispatch(getUserByEmail(user?.email));
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
        <BreadcrumbItem
          className={pathname === "/home" ? style.linkActive : style.link}
        >
          <BreadcrumbLink
            textDecoration={"none"}
            onClick={scrollToTop}
            as={NavLink}
            to="/home"
          >
            HOME
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem
          className={pathname === "/clases" ? style.linkActive : style.link}
        >
          <BreadcrumbLink
            textDecoration={"none"}
            onClick={scrollToTop}
            as={NavLink}
            to="/clases"
          >
            CLASSES
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem
          className={pathname === "/rutinas" ? style.linkActive : style.link}
        >
          <BreadcrumbLink
            textDecoration={"none"}
            onClick={scrollToTop}
            as={NavLink}
            to="/rutinas"
          >
            ROUTINES
          </BreadcrumbLink>
        </BreadcrumbItem>

        {isAuthenticated && (
          <BreadcrumbItem
            className={
              pathname === "/ejercicios" ? style.linkActive : style.link
            }
          >
            <BreadcrumbLink
              textDecoration={"none"}
              onClick={scrollToTop}
              as={NavLink}
              to="/ejercicios"
            >
              EXERCISES
            </BreadcrumbLink>
          </BreadcrumbItem>
        )}
        {membership === "Bronze" || !isAuthenticated ? (
          <BreadcrumbItem
            className={
              pathname === "/memberships" ? style.linkActive : style.link
            }
          >
            <BreadcrumbLink
              as={NavLink}
              to="/home"
              onClick={scrollToMembresias}
              textDecoration={"none"}
            >
              MEMBERSHIPS
            </BreadcrumbLink>
          </BreadcrumbItem>
        ) : (
          <BreadcrumbItem
            className={
              pathname === "/memberships" ? style.linkActive : style.link
            }
          >
            <BreadcrumbLink
              as={NavLink}
              onClick={scrollToTop}
              textDecoration={"none"}
              to="/memberships"
            >
              MEMBERSHIPS
            </BreadcrumbLink>
          </BreadcrumbItem>
        )}
      </Breadcrumb>
      {!isAuthenticated ? (
        <Button
          marginRight="30px"
          onClick={() => {
            loginWithRedirect();
          }}
          colorScheme="blackAlpha"
        >
          <span>LOGIN</span>
        </Button>
      ) : (
        <Profile />
      )}
    </Box>
  );
};

export default Nav;
