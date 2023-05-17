import { Box, SimpleGrid } from "@chakra-ui/react";
import EjercicioCard from "../EjercicioCard/EjercicioCard";
import style from "./EjercicioCards.module.css";

export default function EjercicioCards({ ejercicios }) {
  return (
    <Box
      className={style.cards}
      padding={"2%"}
      width="100%"
      justifyContent="center"
    >
      {ejercicios?.map((e) => (
        <EjercicioCard
          key={e.id}
          name={e.name}
          difficulty={e.difficulty}
          muscle={e.muscle}
          instructions={e.instructions}
        />
      ))}
    </Box>
  );
}
