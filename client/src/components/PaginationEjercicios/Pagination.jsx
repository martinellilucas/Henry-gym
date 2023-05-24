import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Box, Button, ButtonGroup, Flex, Text, filter } from "@chakra-ui/react";
import EjercicioCards from "../EjercicioCards/EjercicioCards";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Pagination.module.css";
import { filters, getEjercicios } from "../../redux/Actions";
import Loading from "../Loading/Loading";
import { NavLink } from "react-router-dom";
import { getEjercicioId } from "../../redux/Actions";



export default function Pagination() {
  const allEjercicios = useSelector((state) => state.filteredEjercicios);
  const ejercicioID = useSelector((state) => state.ejercicioId)
  const [currentPage, setCurrentPage] = useState(1);
  const [page, setPage] = useState(1);
  const [selectedMusculo, setSelectedMusculo] = useState("");
  const [selectedDificultad, setSelectedDificultad] = useState("");

  // ESTADOS PARA EL CREADO DE RUTINA 
  const [isOpen,setIsOpen] = useState(false)
  const [ejer,setEjer] = useState({
    ejercicios : []
  })
  
  const dispatch = useDispatch();
  const count = 9;
  const pageIndex = [];

  const ejerciciosPages = Math.ceil(allEjercicios.length / count);
  const paginate = allEjercicios.slice((page - 1) * count, page * count);

  for (let i = 1; i <= ejerciciosPages; i++) {
    pageIndex.push(i);
  }
   
  

  useEffect(() => { 
    dispatch(getEjercicios());
  }, []);

  const handleClickArrow = (operation) => {
    if (operation === "-") {
      if (page > 1) {
        setPage(page - 1);
        setCurrentPage(page - 1);
      }
    } else {
      if (page < ejerciciosPages) {
        setPage(page + 1);
        setCurrentPage(page + 1);
      }
    }
  };

  function search() {
    setPage(1);
  }

  const handleClickButton = (value) => {
    setPage(value);
    setCurrentPage(value);
  };

  function handlerFilteredMusculos(e) {
    e.preventDefault();
    setSelectedMusculo(e.target.value);
    dispatch(filters(e.target.value, selectedDificultad));
    setPage(1);
  }

  function handlerFilteredDificultad(e) {
    e.preventDefault();
    setSelectedDificultad(e.target.value);
    dispatch(filters(selectedMusculo, e.target.value));
    setPage(1);
  }

  // EJERCICIOS QUE SE SUMAN AL CARRITO

    const changeState= () => {
      setIsOpen(!isOpen)
    }

    const onClick =(e,id) => {
    dispatch(getEjercicioId(id))

    
      if(ejercicioID.id){
        if(!ejer.ejercicios)
        console.log(ejercicioID);

        


        setEjer({
          ...ejer,
           ejercicios : [...ejer.ejercicios, ejercicioID]
          }
        );
      }

      
  
    //ASEGURO QUE NO SE ME REPITAN ACA 

  }


  return (
    <Box className={style.body}>
      <Flex
        display="flex"
        flexDirection="column"
        align="center"
        justify="center"
      >

  
        <div className={style.filterContainer}>
          <div onChange={(e) => search(e)}>
            <SearchBar />
          </div>

          {isOpen? 
          <Flex
          >
          <ButtonGroup
          >
            <Button
            onClick={()=> {changeState()}}
             bg='red.500'
            >Cancelar
            </Button>
            <NavLink to={'/form'}>
            <Button
              bg='blue.200'
              disabled={true}
            >
              Siguiente
            </Button>
            </NavLink>
          </ButtonGroup>
          </Flex>
           : 
          
          <Button
            bg='blue.200'
            onClick={()=> {changeState()}}
          > Crea tu Rutina</Button>
        }
          <select
            id="selectMusculo"
            onChange={(e) => handlerFilteredMusculos(e)}
            className={style.film}
            placeholder="Select a muscle"
          >
            <option value="">All</option>
            <option value="abdominals">Abdominals</option>
            <option value="abductors">Abductors</option>
            <option value="biceps">Biceps</option>
            <option value="calves">Calves</option>
            <option value="chest">Chest</option>
            <option value="biceps">Biceps</option>
            <option value="forearms">Forearms</option>
            <option value="glutes">Glutes</option>
            <option value="hamstrings">Hamstrings</option>
            <option value="lats">Lats</option>
            <option value="lower_back">Lower back</option>
            <option value="middle_back">Middle back</option>
            <option value="neck">Neck</option>
            <option value="quadriceps">Quadriceps</option>
            <option value="shoulders">Shoulders</option>
            <option value="traps">Traps</option>
            <option value="triceps">Triceps</option>
          </select>

          

          <select
            id="selectDificultad"
            onChange={(e) => handlerFilteredDificultad(e)}
            className={style.film}
          >
            <option value="">Filter by difficulty</option>
            <option value="">All</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
        </div>
        <Flex margin="50px" align="center">
          <Button onClick={() => handleClickArrow("-")} disabled={page === 1}>
            &lt;
          </Button>

          {pageIndex.map((index) => (
            <Button
              key={index}
              value={index}
              onClick={() => handleClickButton(index)}
              colorScheme={index === currentPage ? "blackAlpha" : undefined}
            >
              {index}
            </Button>
          ))}
          <Button
            onClick={() => handleClickArrow("+")}
            disabled={page === ejerciciosPages}
          >
            &gt;
          </Button>
        </Flex>
      </Flex>
      {!paginate.length ? (
        <Loading />
      ) : (
        <EjercicioCards ejercicios={paginate} isOpen={isOpen} setEjer={setEjer} ejer={ejer} onClick={onClick}/>
      )}
    </Box>
  );
}
