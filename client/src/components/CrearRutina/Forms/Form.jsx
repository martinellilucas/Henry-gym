import style from "./Form.module.css";

import {
  Heading,
  FormControl,
  GridItem,
  FormLabel,
  Select,
  Box,
} from "@chakra-ui/react";

const Form1 = ({ form, setForm, error, setError, ejercicios }) => {
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

  const validation = (target) => {
    const regexURL = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
    if (target === "difficulty") {
      if (!form.difficulty.length) {
        setError({ ...error, difficulty: "Debe seleccionar una dificultad" });
      } else {
        setError({ ...error, difficulty: "" });
      }
    }
    if (target === "grupoMuscular") {
      if (form.grupoMuscular.length >= 3) {
        setError({
          ...error,
          grupoMuscular:
            "Puede seleccionar hasta un maximo de 3 grupos musculares",
        });
      }
      if (!form.grupoMuscular.length) {
        setError({
          ...error,
          grupoMuscular: "Debe seleccionar al menos 1 grupo muscular",
        });
      } else {
        setError({ ...error, grupoMuscular: "" });
      }
    }
    if (target === "imagen") {
      if (!regexURL.test(form.imagen)) {
        setError({
          ...error,
          imagen:
            "Invalid URL, try an ULR like: https://github.com/martinellilucas",
        });
      } else {
        setError({ ...error, imagen: "" });
      }
    }
  };

  const onChange = (event) => {
    const value = event.target.value;
    const target = event.target.name;

    // PARA AGREGAR Y SACAR MUSCULOS
    if (target === "grupoMuscular") {
      if (!form.grupoMuscular.includes(value)) {
        setForm({
          ...form,
          grupoMuscular: [...form.grupoMuscular, value],
          ejercicios: [
            ...form.ejercicios,
            ejercicios.find((e) => e.muscle === value),
          ],
        });
        validation(target);
      } else {
        setForm({
          ...form,
          grupoMuscular: [...form.grupoMuscular.filter((e) => e !== value)],
          ejercicios: [...form.ejercicios.filter((e) => e.muscle !== value)],
        });
        validation(target);
      }
    } else {
      setForm({
        ...form,
        [target]: value,
      });
    }
    validation(target);
  };

  return (
    <Box className={style.form}>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Creación de rutina
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
              Dificultad
            </FormLabel>
            <Select
              id="dificultad"
              name="difficulty"
              placeholder="Elegir uno"
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              value={form.difficulty}
              rounded="md"
              onChange={onChange}
            >
              <option value={"Beginner"} name="difficulty">
                Beginner
              </option>
              <option value={"Intermedate"} name="difficulty">
                Intermedate
              </option>
              <option value={"Expert"} name="difficulty">
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
            <label className={style.label} htmlFor="imagen">
              Imagen
            </label>
            <input
              className={style.imagen}
              name="imagen"
              value={form.imagen}
              onChange={onChange}
              type="text"
              placeholder="Ingrese la url de una imagen"
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
