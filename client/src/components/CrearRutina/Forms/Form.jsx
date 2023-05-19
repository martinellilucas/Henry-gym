import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Select,
} from "@chakra-ui/react";
import style from "./Form.module.css";

const musculos = [
  "abdominals",
  "abductors",
  "adductors",
  "biceps",
  "calves",
  "chest",
  "forearms",
  "glutes",
  "hamstrings",
  "lats",
  "lower_back",
  "middle_back",
  "neck",
  "quadriceps",
  "traps",
  "triceps",
];
const Form1 = ({ form, error, onChange, setError }) => {
  return (
    <Box className={style.form}>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Create your own routine
      </Heading>
      <Box display="flex" flexDirection="column">
        <Box>
          <FormControl as={GridItem} colSpan={6}>
            <FormLabel
              htmlFor="difficulty"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: "gray.50",
              }}
              mt="2%"
            >
              Difficulty
            </FormLabel>
            <Select
              id="dificultad"
              name="difficulty"
              placeholder="Select one"
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              value={form.difficulty}
              rounded="md"
              onChange={(e) => {
                onChange(e, error, setError);
              }}
            >
              <option value={"beginner"} name="difficulty">
                Beginner
              </option>
              <option value={"intermediate"} name="difficulty">
                Intermediate
              </option>
              <option value={"expert"} name="difficulty">
                Expert
              </option>
            </Select>
          </FormControl>
          {error.difficulty ? (
            <span className={style.msgError}>{error.difficulty}</span>
          ) : (
            <></>
          )}
          <Box className={style.checkbox}>
            {musculos.map((e) => {
              return (
                <div className={style.checkOption}>
                  <label className={style.labelOption} htmlFor={e}>
                    {e.toUpperCase()}
                  </label>
                  <input
                    type="checkbox"
                    onChange={onChange}
                    name="grupoMuscular"
                    value={e}
                    id={e}
                  ></input>
                </div>
              );
            })}
          </Box>
          {error.grupoMuscular ? (
            <span className={style.msgError}>{error.grupoMuscular}</span>
          ) : (
            <></>
          )}
          <div>
            <input
              className={style.imagen}
              name="imagen"
              value={form.imagen}
              onChange={onChange}
              type="text"
              placeholder="Type an URL for the image"
            ></input>
          </div>
          {error.imagen ? (
            <span className={style.msgError}>{error.imagen}</span>
          ) : (
            <></>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Form1;
