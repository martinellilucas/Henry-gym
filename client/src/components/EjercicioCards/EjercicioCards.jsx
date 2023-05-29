import { Box } from "@chakra-ui/react";
import EjercicioCard from "../EjercicioCard/EjercicioCard";
import style from "./EjercicioCards.module.css";

export default function EjercicioCards({ ejercicios, isOpen, onClick, ejer }) {


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
            ejer={ejer}
            ejercicios={ej}
            isOpen={isOpen}
            onClick={onClick}
          />

        </Box>
      ))}
    </Box>
  );
}
