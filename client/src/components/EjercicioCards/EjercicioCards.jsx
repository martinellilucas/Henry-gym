import { Box, SimpleGrid } from "@chakra-ui/react";
import EjercicioCard from "../EjercicioCard/EjercicioCard";
import style from "./EjercicioCards.module.css";
import { useState } from "react";

export default function EjercicioCards({ ejercicios,isOpen,ejer,setEjer,onClick}) {

  return (
    <Box
      className={style.cards}
      padding={"2%"}
      width="100%"
      justifyContent="center"
    >
      {ejercicios?.map((e) => (
        <EjercicioCard
          ejercicios={e}
          isOpen={isOpen}
          onClick={onClick}
          ejer={ejer}
          setEjer={setEjer}
        />
      ))}
    </Box>
  );
}
