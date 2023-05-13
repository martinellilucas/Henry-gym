import { Box, SimpleGrid } from "@chakra-ui/react";
import EjercicioCard from "../EjercicioCard/EjercicioCard";

export default function EjercicioCards({ ejercicios }) {
  return (
    <Box padding={"2%"} width="100%" marginY="120px" justifyContent="center">
      <SimpleGrid columns={2} spacing={8} justifyContent="center">
        {ejercicios?.map((e) => (
          <EjercicioCard
            key={e.id}
            name={e.name}
            difficulty={e.difficulty}
            muscle={e.muscle}
            instructions={e.instructions}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
