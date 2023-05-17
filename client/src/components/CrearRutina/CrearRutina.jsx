import { Box, ButtonGroup, Button, Heading, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import styles from "./CrearRutina.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getEjercicios, postRutina } from "../../redux/Actions";
import Form1 from "./Forms/Form";

const ThankYou = () => {
  return (
    <>
      <Heading className={styles.form3}>
        Thank you very much for helping us to continue growing!
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
      difficulty: form.difficulty ? "" : "You must select the difficulty",
      grupoMuscular:
        form.grupoMuscular.length > 0 && form.grupoMuscular.length <= 3
          ? ""
          : "You must select between 1 and 3 muscles",
      imagen: regexURL.test(form.imagen)
        ? ""
        : "You must type a valid URL for the image",
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
        title: "Missing data",
        description: "There are unfilled boxes",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      dispatch(postRutina(form));
      toast({
        title: "Routine created!",
        description: "You have created a new routine.",
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

  const isDisabled = !(
    form.difficulty &&
    form.grupoMuscular.length > 0 &&
    form.grupoMuscular.length <= 3 &&
    form.imagen
  );

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
          <Form1
            form={form}
            error={error}
            onChange={onChange}
            setError={setError}
          />
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
                isDisabled={isDisabled}
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
