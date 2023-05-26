import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import EjercicioCard from "../EjercicioCard/EjercicioCard";
import style from "./EjercicioCards.module.css";
import { useState } from "react";

export default function EjercicioCards({ ejercicios, isOpen, onClick }) {


  return (
    <Box
      className={style.cards}
      padding={"2%"}
      width="100%"
      justifyContent="center"
    >
      {ejercicios?.map((ej) => (
        <Box
          position={'relative'}
        >
          <EjercicioCard
            ejercicios={ej}
            isOpen={isOpen}
            onClick={onClick}
          />

        </Box>
      ))}
    </Box>
  );
}
