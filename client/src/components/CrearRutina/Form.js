import React, { useEffect, useState } from 'react';
import {
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
} from '@chakra-ui/react';

import { useToast } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { postRutina } from '../../redux/Actions';
import PostCards from './PostCards/PostCards';
import { useNavigate } from 'react-router-dom';

const Form1 = ({setForm,form}) => {
  const onClick = (e) => {
   const value = e.target.files[0]
    setForm({
      ...form,
      imagen :value});
  }
  return (
    <>
        <FormControl >
          <FormLabel htmlFor="image" fontWeight={'normal'} mt="2%" >
            Add a image to your routine
            <Input
              type='file'
               id='imagen'
              accept="image/*"
              onChange={(e) => { onClick(e) }}
            />
          </FormLabel>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='ejercicios' fontWeight={'normal'} mt='2%'>
            Aca van los ejercicios selecionados
          </FormLabel>
        </FormControl>
      <Flex
        id='ejercicios'
        justifyContent={'space-between'}
      >
        {form.ejercicios ?
          <PostCards
            ejercicios={form.ejercicios}
            form={form}
            setForm={setForm}
          /> : <></>}
      </Flex>

    </>
  );
};

const Form3 = () => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Social Handles
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Website
          </FormLabel>
          <InputGroup size="sm">
            <InputLeftAddon
              bg="gray.50"
              _dark={{
                bg: 'gray.800',
              }}
              color="gray.500"
              rounded="md">
              http://
            </InputLeftAddon>
            <Input
              type="tel"
              placeholder="www.example.com"
              focusBorderColor="brand.400"
              rounded="md"
            />
          </InputGroup>
        </FormControl>

        <FormControl id="email" mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            About
          </FormLabel>
          <Textarea
            placeholder="you@example.com"
            rows={3}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: 'sm',
            }}
          />
          <FormHelperText>
            Brief description for your profile. URLs are hyperlinked.
          </FormHelperText>
        </FormControl>
      </SimpleGrid>
    </>
  );
};

export default function Multistep() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    ejercicios : [],
    imagen : ''
  })
  const navigate = useNavigate()

  const test = () => {
    const item = window.localStorage.getItem('ejercicios')
    if(form){  
      setForm({...form,
        ejercicios : JSON.parse(item)})
    }
  }

 useEffect(()=> {
  test()
 },[])

 
 const formdata = new FormData()



 const onSubmit = (e)=> {
  e.preventDefault()

  console.log(form.imagen)

  formdata.append('ejercicios',JSON.stringify(form.ejercicios))
  formdata.append('imagen',form.imagen)
  console.log([...formdata]);
  if(form.imagen){
    dispatch(postRutina(formdata))
      toast({
        title: "Your routine has been created",
        description:'You routine will be apear in the routine seccion',
        status: "success",
        duration: 3000,
        isClosable: true,
      })
    window.localStorage.setItem('ejercicios',[])
    setForm({
      ejercicios : [],
      imagen : ""
    })
  } else {
    toast({
      title: 'Please select a image',
      status : 'error',
      duration: 3000,
      isClosable : true
    })

  }
  if(form.ejercicios.length >= 2){
    dispatch(postRutina(formdata))
      toast({
        title: "Your routine has been created",
        description:'You routine will be apear in the routine seccion',
        status: "success",
        duration: 3000,
        isClosable: true,
      })
    window.localStorage.setItem('ejercicios',[])
    setForm({
      ejercicios : [],
      imagen : ""
    })
  } else {
    navigate('/ejercicios')
    toast({
      title: 'Please select at least two exercises',
      status : 'error',
      duration: 3000,
      isClosable : true
    })
  }
 }
  

  return (
    <>
      <Box
        
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        id='form'
        as='form'
        encType='multiform/form-data'
        >

        {step === 1 ?
         <Form1
          form={form}
          setForm={setForm}
          /> : <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  window.history.back();
                }}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
            </Flex>
            {step === 1 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                type='submit'
                onClick={(e) => {
                  onSubmit(e)
                }}
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}