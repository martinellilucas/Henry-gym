import { Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import imagen from "../../assets/Error.gif";
import s from "./Error.module.css";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <Box className={s.container}>
      <NavLink to={"/home"}>
        <Button className={s.button}>Volver al home</Button>
      </NavLink>

      <h1 className={s.descripcion}>ERROR 404</h1>
    </Box>
  );
};

export default Error;
