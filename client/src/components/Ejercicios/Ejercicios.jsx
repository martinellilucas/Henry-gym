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
import { useDispatch, useSelector } from "react-redux";
import style from "./Ejercicios.module.css";
import { getEjercicios } from "../../redux/Actions";
import SearchBar from "../SearchBar/SearchBar";

const Ejercicios = () => {
  const { ejercicios } = useSelector((store) => store);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEjercicios());
  }, []);

  return (
    <div>
      <h1 className={style.title}>EJERCICIOS</h1>
      <div> 
        <SearchBar />
      </div>
      <div className={style.cards}>
        {ejercicios.length ? (
          ejercicios.map((e) => {
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
                        <textarea className={style.textarea}>
                          {e.instructions}
                        </textarea>
                      </Box>
                    </Stack>
                  </CardBody>
                </Card>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Ejercicios;
