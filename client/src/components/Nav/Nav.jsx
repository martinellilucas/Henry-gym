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

import { NavLink } from "react-router-dom";
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
    if (window.location.pathname !== "/home") {
      window.location.href = "/home";
    } else {
      const membresiasSection = document.getElementById("membresias");
      if (membresiasSection) {
        membresiasSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
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
          <BreadcrumbLink onClick={scrollToTop} as={NavLink} to="/home">
            HOME
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem className={style.item}>
          <BreadcrumbLink onClick={scrollToTop} as={NavLink} to="/clases">
            CLASSES
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem className={style.item}>
          <BreadcrumbLink onClick={scrollToTop} as={NavLink} to="/rutinas">
            ROUTINES
          </BreadcrumbLink>
        </BreadcrumbItem>

        {isAuthenticated && (
          <BreadcrumbItem className={style.item}>
            <BreadcrumbLink onClick={scrollToTop} as={NavLink} to="/ejercicios">
              EXERCISES
            </BreadcrumbLink>
          </BreadcrumbItem>
        )}
        {membership === "Bronze" || !isAuthenticated ? (
          <BreadcrumbItem className={style.item}>
            <BreadcrumbLink onClick={scrollToMembresias}>
              MEMBERSHIPS
            </BreadcrumbLink>
          </BreadcrumbItem>
        ) : (
          <BreadcrumbItem className={style.item}>
            <NavLink onClick={scrollToTop} to="/memberships">
              <BreadcrumbLink>MEMBERSHIPS</BreadcrumbLink>
            </NavLink>
          </BreadcrumbItem>
        )}
        <BreadcrumbItem className={style.item}>
          <BreadcrumbLink onClick={scrollToTop} as={NavLink} to="/about">
            ABOUT
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      {!isAuthenticated ? (
        <Button
          onClick={() => {
            loginWithRedirect();
          }}
          colorScheme="blackAlpha"
          py={1}
          px={5}
        >
          <span className={style.button}>LOGIN</span>
        </Button>
      ) : (
        <div className={style.profileContainer}>
          <Profile />
        </div>
      )}
    </Box>
  );
};

export default Nav;
