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
import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import LoginButton from "../LoginButton/LoginButton";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
      <LoginButton />
    </Box>
  );
};

export default Nav;
