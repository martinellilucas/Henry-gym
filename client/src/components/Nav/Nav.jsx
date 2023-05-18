import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Button,
  Box,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import style from "../Nav/Nav.module.css";
import Profile from "../Profile/Profile";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const navigate = useNavigate(); // Accede al objeto de navegación

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  const handleLogout = () => {
    logout({ returnTo: `${window.location.origin}/home` }); // Redirige a "/home" después de hacer logout
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
          <BreadcrumbLink>CLASES</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem className={style.item}>
          <BreadcrumbLink as={NavLink} to="/rutinas">
            ROUTINES
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem className={style.item}>
          <BreadcrumbLink as={NavLink} to="/ejercicios">
            EXERCISES
          </BreadcrumbLink>
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
      {!isAuthenticated ? (
        <NavLink to="/home">
          <Button
            onClick={() => loginWithRedirect()}
            className={style.btn}
            colorScheme="blackAlpha"
            size="lg"
          >
            LOGIN
          </Button>
        </NavLink>
      ) : (
        <div className={style.profileContainer}>
          <Profile />
          <Button
            colorScheme="blackAlpha"
            onClick={handleLogout} // Utiliza la función handleLogout para hacer logout
          >
            LOGOUT
          </Button>
        </div>
      )}
    </Box>
  );
};

export default Nav;
