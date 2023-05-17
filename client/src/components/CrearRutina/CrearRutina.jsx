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
  });

  const [hasError, setHasError] = useState(true)
  
  useEffect(() => {
    dispatch(getEjercicios());
  }, [dispatch]);

  function validate(form,error,setError,setHasError) {
    const regexURL = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
    
    console.log(`este es la dificultad ${form.difficulty}`)

    if (!form.difficulty.length || !form.grupoMuscular.length ||!form.imagen ){
      setError({
        difficulty: !form.difficulty ? "Debe seleccionar una dificultad" : "",
        grupoMuscular:
          form.grupoMuscular.length === 0
            ? "Debe seleccionar al menos 1 grupo muscular"
            : "",
        imagen: !regexURL.test(form.imagen) ? "Debe proporcionar una URL de imagen" : "",

    })} else {setHasError(false)}
  }

  const handleSubmit = async (event) => {

    await validate(form,error,setError,setHasError)

    if(hasError){
      event.preventDefault();
      toast({
        title: 'Poneme las cosas fracasado',
        description: "Faltan casillas para llenar.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      event.preventDefault();
      dispatch(postRutina(form));
        toast({
                    title: "Rutina Creada!",
                    description: "Haz creado una Rutina Nueva.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,})
      setForm({ difficulty: "", grupoMuscular: [], imagen: "", ejercicios: [] });
    }
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
                disabled 
                colorScheme="red"
                variant="solid"
                onClick={(e) => {
                  handleSubmit(e);
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
