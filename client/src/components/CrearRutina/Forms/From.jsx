import {useEffect, useState} from 'react'

import {
    Heading,
    FormControl,
    GridItem,
    FormLabel,
    Select,
    Box
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import  {filterByMusculo , getEjercicios} from '../../../redux/Actions'



const Form1 = () => {
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

    const dispatch = useDispatch()

    const ejercicios = useSelector((state) => state.ejercicios)

    const [Form, setForm] = useState({
        level : "",
        grupoMusculares : [],
        ejercicios : []
        } 
    )

    const [error,setError] = useState({
        level : "",
        grupoMusculares : [],
        ejercicios : []
        } 
    )
    
    
    
    const setUnChecked = (boolean) => {
        return boolean;
    }


    const elegirDif = (event) => {
        const value = event.target.value;
        const target = event.target.name;

        setForm({
           ...Form,
           [target] : value
        })
    }
    
    const onChange = (event) => {
        const value = event.target.value;
        const target = event.target.name;

    // PARA AGREGAR Y SACAR MUSCULOS
        if(!Form.grupoMusculares.includes(value)){
         setForm({
                ...Form,
                grupoMusculares: [...Form.grupoMusculares, value ],
                ejercicios : [...Form.ejercicios, ...ejercicios.filter((e) => 
                    e.muscle === value
                    )]
            })
            
        } else {
           setForm({
                ...Form,
                grupoMusculares : [...Form.grupoMusculares.filter((e) => 
                    e !== value
                )],
                ejercicios : [...Form.ejercicios.filter(e => 
                    e.muscle !== value
                    )]
            })
        }
    }
   
    const onSelect = (event) => {
    const target = event.target.name;
    if(!Form.ejercicios.includes(target)){
        setForm({
            ...Form,
            ejercicios: [...Form.ejercicios, target]
        })
    } else {
      setForm({
            ...Form,
            ejercicios: [...Form.ejercicios.filter((e) => 
                e !== target
            )]
        })
    }
}
    
    useEffect(() => {
        dispatch(getEjercicios())
    },[dispatch])

    return (    
            <Box >
                <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                    Creación de rutina
                </Heading>

            <Box display='flex' flexDirection='column'>
            <Box >
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
                        Dificultad
                    </FormLabel>
                    <Select
                        id="dificultad"
                        name="level"
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        value={Form.level}
                        rounded="md"
                        onChange={elegirDif}
                    >
                        <option value={'Beginner'} name='level'>Beginner</option>
                        <option value={'Intermedate'} name='level'>Intermedate</option>
                        <option value={'Expert'} name='level'>Expert</option>
                    </Select>
                </FormControl>

                <Box display='grid'>
                {musculos.map((e) => {
                        return (
                            <label><input type="checkbox" onChange={onChange} value={e} id={e} />{e}</label>
                        )
                    })}
                </Box>
            </Box>
        </Box>
     </Box>
    );
};

export default Form1