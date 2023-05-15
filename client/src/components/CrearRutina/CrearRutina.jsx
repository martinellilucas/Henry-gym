import { Box, ButtonGroup, Button, Heading, Flex } from "@chakra-ui/react";
import Form1 from "./Forms/Form";
import { useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import style from "./CrearRutina.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getEjercicios, postRutina } from "../../redux/Actions";

const Form2 = () => {
  return (
    <>
      <Heading className={style.form3}>
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
    grupoMuscular: [],
    imagen: "",
    ejercicios: [],
  });

  useEffect(() => {
    dispatch(getEjercicios());
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postRutina(form));
    setForm({ difficulty: "", grupoMuscular: [], imagen: "", ejercicios: [] });
  };

  return (
    <div className={style.div2}>
      <Box
        onSubmit={handleSubmit}
        className={style.box}
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
            ejercicios={ejercicios}
            form={form}
            setForm={setForm}
            error={error}
            setError={setError}
          />
        ) : (
          <Form2 />
        )}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            {step === 1 ? (
              <Button
                type="submit"
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  toast({
                    title: "Rutina Creada!",
                    description: "Haz creado una Rutina Nueva.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  });
                  setStep(step + 1);
                }}
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </div>
  );
}
