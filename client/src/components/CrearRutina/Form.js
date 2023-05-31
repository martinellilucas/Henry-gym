import React, { useEffect, useState } from 'react';
import {
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Text,
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
    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}
    >
        <FormControl justifyContent={'center'}>
          <FormLabel htmlFor="image" fontWeight={'normal'} mt="2%" justifyContent={'center'} >
          <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} >
          <Heading 
            textAlign={'center'}
            fontSize={{ base: '24px', md: '40px', lg: '56px' }} >Select one picture for your routine</Heading>
            <Input
              margin={'4%'}
              border={'0px'}
              type='file'
              id='imagen'
              accept="image/*"
              onChange={(e) => { onClick(e) }}
            />
          </Box>
          </FormLabel>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='ejercicios' fontWeight={'normal'} mt='2%'>
          </FormLabel>
        </FormControl>
      <Flex
        id='ejercicios'
        justifyContent={'center'}
        flexDir={'column'}
      >
        {form.ejercicios.length ?
          <PostCards
            ejercicios={form.ejercicios}
            form={form}
            setForm={setForm}
          /> : 
          <Box 
            display={'flex'}
            
          >
            <Text
              textAlign={'center'}
              fontSize={{ base: '24px', md: '40px', lg: '56px' }}
            >Your exercises would go here, but you deleted them all, go and choose some</Text>

          </Box>}
      </Flex>

    </Box>
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
    if(!form.ejercicios.length){  
      const item = window.localStorage.getItem('ejercicios')
      if(item){
        setForm({...form,
          ejercicios : JSON.parse(item)})
      }
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

  if(form.imagen){
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
      navigate('/rutinas')
    } else {
      navigate('/ejercicios')
      toast({
        title: 'Please select at least two exercises',
        status : 'error',
        duration: 3000,
        isClosable : true
      })
    }
   } else {
    toast({
      title:"Select one image for your routine",
      status: "error",
      duration: 3000,
      isClosable: true,
    })
   }
  }
  

  

  return (
    <Box
      w={{base: '100%', md: '100%', lg:'100%'}}
      paddingTop={'6%'}
      paddingBottom={'5.90%'}
    >
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
         <Form1
          form={form}
          setForm={setForm}
          />
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
          </Flex>
        </ButtonGroup>
      </Box>
    </Box>
    );
  }
