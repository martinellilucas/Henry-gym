import {
  Box,
  ButtonGroup,
  Button,
  FormControl,
  GridItem,
  FormLabel,
  Select,
  Heading,
  Flex,
} from "@chakra-ui/react";
import style from "./Forms/Form.module.css";
import { useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import styles from "./CrearRutina.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getEjercicios, postRutina } from "../../redux/Actions";

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

const ThankYou = () => {
  return (
    <>
      <Heading className={styles.form3}>
        Muchas gracias por cooperar a que sigamos creciendo!
      </Heading>
      <NavLink to={"/home"}>
        <Button>Go Home</Button>
      </NavLink>
    </>
  );
};

export default function PostRutina() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const dispatch = useDispatch();
  const ejercicios = useSelector((state) => state.ejercicios);

  const [form, setForm] = useState({
    difficulty: "",
    grupoMuscular: [],
    imagen: "",
    ejercicios: [],
  });

  const [error, setError] = useState({
    difficulty: "",
    grupoMuscular: "",
    imagen: "",
  });

  useEffect(() => {
    dispatch(getEjercicios());
  }, [dispatch]);

  useEffect(() => {
    validate(form);
  }, [form]);

  function validate(form) {
    const regexURL = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
    setError((prevError) => ({
      ...prevError,
      difficulty: form.difficulty ? "" : "Debe seleccionar una dificultad",
      grupoMuscular:
        form.grupoMuscular.length > 0 && form.grupoMuscular.length <= 3
          ? ""
          : "Debe seleccionar entre 1 y 3 grupos musculares",
      imagen: regexURL.test(form.imagen)
        ? ""
        : "Debe proporcionar una URL de imagen",
    }));
  }

  const onChange = (event) => {
    const value = event.target.value;
    const target = event.target.name;

    if (target === "grupoMuscular") {
      if (!form.grupoMuscular.includes(value)) {
        setForm((prevForm) => ({
          ...prevForm,
          grupoMuscular: [...prevForm.grupoMuscular, value],
          ejercicios: [
            ...prevForm.ejercicios,
            ejercicios.find((e) => e.muscle === value),
          ],
        }));
      } else {
        setForm((prevForm) => ({
          ...prevForm,
          grupoMuscular: prevForm.grupoMuscular.filter((e) => e !== value),
          ejercicios: prevForm.ejercicios.filter((e) => e.muscle !== value),
        }));
      }
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        [target]: value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (error.difficulty || error.grupoMuscular || error.imagen) {
      toast({
        title: "Poneme las cosas fracasado",
        description: "Faltan casillas para llenar.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      dispatch(postRutina(form));
      toast({
        title: "Rutina Creada!",
        description: "Haz creado una Rutina Nueva.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setForm({
        difficulty: "",
        grupoMuscular: [],
        imagen: "",
        ejercicios: [],
      });
      setStep(2);
    }
  };

  return (
    <div className={styles.div2}>
      <Box
        onSubmit={handleSubmit}
        className={styles.box}
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
      >
        {step === 1 ? (
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
                    <option value={"beginner"}>Beginner</option>
                    <option value={"intermediate"}>Intermediate</option>
                    <option value={"expert"}>Expert</option>
                  </Select>
                </FormControl>
                {error.difficulty && (
                  <span className={style.msgError}>{error.difficulty}</span>
                )}
                <Box className={style.checkbox}>
                  {musculos.map((e) => (
                    <div className={style.checkOption} key={e}>
                      <label className={style.labelOption} htmlFor={e}>
                        {e.toUpperCase()}
                      </label>
                      <input
                        type="checkbox"
                        onChange={onChange}
                        name="grupoMuscular"
                        value={e}
                        id={e}
                      />
                    </div>
                  ))}
                </Box>
                {error.grupoMuscular && (
                  <span className={style.msgError}>{error.grupoMuscular}</span>
                )}
                <div>
                  <input
                    className={style.imagen}
                    name="imagen"
                    value={form.imagen}
                    onChange={onChange}
                    type="url"
                    placeholder="Ingrese la URL de una imagen"
                  />
                </div>
                {error.imagen && (
                  <span className={style.msgError}>{error.imagen}</span>
                )}
              </Box>
            </Box>
          </Box>
        ) : (
          <ThankYou />
        )}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            {step === 1 && (
              <Button
                type="submit"
                w="7rem"
                colorScheme="red"
                variant="solid"
                isDisabled={
                  !form.difficulty ||
                  form.grupoMuscular.length === 0 ||
                  form.grupoMuscular.length > 3 ||
                  !form.imagen
                }
              >
                Submit
              </Button>
            )}
          </Flex>
        </ButtonGroup>
      </Box>
    </div>
  );
}
