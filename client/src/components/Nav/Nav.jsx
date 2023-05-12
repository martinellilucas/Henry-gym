import SearchBar from "../SearchBar/SearchBar";
import logo from "../../assets/logo.png";
import style from "../Nav/Nav.module.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Button,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className={style.nav}>
      <div className={style.searchContainer}>
        <img className={style.logo} src={logo} alt="logo"></img>
        <SearchBar className={style.search}></SearchBar>
      </div>
      <Breadcrumb separator=">" className={style.itemContainer}>
        <BreadcrumbItem className={style.item}>
          <BreadcrumbLink as={NavLink} to="/home">
            INICIO
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem className={style.item}>
          <BreadcrumbLink>CLASES</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem className={style.item}>
          <BreadcrumbLink>RUTINAS</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem className={style.item}>
          <BreadcrumbLink>MEMBRESIAS</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem className={style.item}>
          <BreadcrumbLink as={NavLink} to="/about">
            CONOCENOS
          </BreadcrumbLink>
        </BreadcrumbItem>
        <Button colorScheme="whiteAlpha">INGRESAR</Button>
      </Breadcrumb>
    </div>
  );
};

export default Nav;
