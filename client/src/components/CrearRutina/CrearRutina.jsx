import React, { useState } from 'react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  FormHelperText,
} from '@chakra-ui/react';

import { useToast } from '@chakra-ui/react';
import style from './CrearRutina.module.css';

const Form1 = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Crear Rutina
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            Nombre de la rutina
          </FormLabel>
          <Input id="first-name" placeholder="Nombre rutina" />
        </FormControl>

        <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="musculos"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
          Dificultad del Ejercicio
        </FormLabel>
        <Select
          id="musculos"
          name="musculos"
          autoComplete="musculos"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size='md'
          w="full"
          rounded="3px">
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Expert</option>
        </Select>
      </FormControl>


      </Flex>
      <FormControl >
        <FormLabel fontWeight={'normal'}>
          Indicaciones a realizar en la rutina
        </FormLabel>
        <textarea className={style.textoInd} type="text" maxLength="1000" />
        <FormHelperText>Porfavor, sea claro al explicar la rutina.</FormHelperText>
      </FormControl>


    </>
  );
};

const Form2 = () => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Creación de rutina
      </Heading>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="musculos"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
          Grupo muscular
        </FormLabel>
        <Select
          id="musculos"
          name="musculos"
          autoComplete="musculos"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md">
          <option>Abdominals</option>
          <option>Abductors</option>
          <option>Biceps</option>
          <option>Calves</option>
          <option>Chest</option>
          <option>Biceps</option>
          <option>Forearms</option>
          <option>Glutes</option>
          <option>Hamstrings</option>
          <option>Lats</option>
          <option>Lower back</option>
          <option>Middle back</option>
          <option>Neck</option>
          <option>Quadriceps</option>
          <option>shoulders</option>
          <option>Traps</option>
          <option>Triceps</option>
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="street_address"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Ejercicio Número 1
        </FormLabel>
        <Input
          type="text"
          name="street_address"
          id="street_address"
          autoComplete="street-address"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Ejercicio Número 2
        </FormLabel>
        <Input
          type="text"
          name="city"
          id="city"
          autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="state"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Ejercicio Número 3
        </FormLabel>
        <Input
          type="text"
          name="state"
          id="state"
          autoComplete="state"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="postal_code"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Ejercicio Número 4
        </FormLabel>
        <Input
          type="text"
          name="postal_code"
          id="postal_code"
          autoComplete="postal-code"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>
    </>
  );
};

const Form3 = () => {
  return (
    <>
      <Heading className={style.form3}>
        Muchas gracias por cooperar a que sigamos creciendo!
      </Heading>
      
    </>
  );
};

export default function Multistep() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  return (
    <div className={style.div2}>
      <Box
      className={style.box}
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated></Progress>
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  toast({
                    title: 'Rutina Creada!',
                    description: "Haz creado una Rutina Nueva.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  });
                }}>
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
      </div>
  );
}