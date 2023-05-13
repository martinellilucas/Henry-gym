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
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Ejercicios = () => {
  const ejercicios = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  return (
    <div>
      <h1>EJERCICIOS</h1>
      {ejercicios.map((e) => {
        return (
          <Card>
            <CardHeader>
              <Heading size="md">{e.name}</Heading>
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
                  <Text pt="2" fontSize="sm">
                    {e.instructions}
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
};

export default Ejercicios;
