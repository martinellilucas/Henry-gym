import { Image } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react';
import imagen from '../../assets/Error.gif'
import s from './Error.module.css'
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <Box className={s.container} >
      <Image src={imagen} className={s.error} />
      <Box className={s.imageCont}>
        <Box className={s.descripcion}>
          <h1 >
            ERROR 404
          </h1>
        </Box>
        <Box className={s.button}>
          <NavLink to={'/home'}>
            <Button >
              Volver al home
           </Button>
          </NavLink>
          
        </Box>
      </Box>
    </Box>
  );
};

export default Error;
