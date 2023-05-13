import {
  Card,
  CardHeader,
  CardBody,
  Box,
  Heading,
  Text,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import style from "./EjercicioCard.module.css";

export function EjercicioCard(e) {
  return (
    <div key={e.id}>
      <Card className={style.card} bg="blackAlpha.500">
        <CardHeader>
          <Heading size="xl">{e.name}</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Dificultad
              </Heading>
              <Text pt="2" fontSize="sm">
                {e.difficulty}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Grupo Muscular
              </Heading>
              <Text pt="2" fontSize="sm">
                {e.muscle}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Instrucciones
              </Heading>
              <textarea className={style.textarea}>{e.instructions}</textarea>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
}

export default EjercicioCard;
