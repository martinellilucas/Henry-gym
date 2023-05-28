import { Box } from "@chakra-ui/react";

import style from "./Error.module.css";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <Box className={style.container}>
      <div className={style.img}></div>
      <div className={style.descContainer}>
        <h1 className={style.descripcion}>ERROR 404 PAGE NOT FOUND </h1>
        <NavLink to={"/home"}>
          <button className={style.button}>HOME</button>
        </NavLink>
      </div>
    </Box>
  );
};

export default Error;
