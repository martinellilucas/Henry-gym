import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Box, Button, ButtonGroup, Flex, Text, filter } from "@chakra-ui/react";
import EjercicioCards from "../EjercicioCards/EjercicioCards";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Pagination.module.css";
import { filters, getEjercicios } from "../../redux/Actions";
import Loading from "../Loading/Loading";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import ejerciciosBG from "../../assets/ejerciciosBG.png";
import { useToast } from "@chakra-ui/react";

export default function Pagination() {
  const allEjercicios = useSelector((state) => state.filteredEjercicios);
  const toast = useToast();
  const [currentPage, setCurrentPage] = useState(1);
  const [page, setPage] = useState(1);
  const [selectedMusculo, setSelectedMusculo] = useState("");
  const [selectedDificultad, setSelectedDificultad] = useState("");
  const navigate = useNavigate();

  // ESTADOS PARA EL CREADO DE RUTINA
  const [isOpen, setIsOpen] = useState(false);
  const [ejer, setEjer] = useState([]);

  const dispatch = useDispatch();
  const count = 6;
  const pageIndex = [];

  const ejerciciosPages = Math.ceil(allEjercicios.length / count);
  const paginate = allEjercicios.slice((page - 1) * count, page * count);

  for (let i = 1; i <= ejerciciosPages; i++) {
    pageIndex.push(i);
  }

  const test = () => {
    const item = window.localStorage.getItem("ejercicios");
    if (item) {
      setEjer(JSON.parse(item));
    }
  };

  useEffect(() => {
    dispatch(getEjercicios());
    test();
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

  const changeState = () => {
    setIsOpen(!isOpen);
  };

  const onClick = (ejercicios) => {
    const boolean = ejer.find((item) => item.id === ejercicios.id);
    if (boolean) {
      setEjer([...ejer.filter((item) => item.id !== ejercicios.id)]);
    } else {
      setEjer([...ejer, ejercicios]);
    }
  };

  const onCancel = () => {
    setEjer([]);
    setIsOpen(!isOpen);
    window.localStorage.setItem("ejercicios", []);
  };

  const onDenied = () => {
    toast({
      title: "Please select at least two exercises for the next step",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  };

  const onSubmit = () => {
    window.localStorage.setItem("ejercicios", JSON.stringify(ejer));
    setEjer([]);
    setIsOpen(!isOpen);
    toast({
      title: "Thank you",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    navigate("/form");
  };

  return (
    <Box className={style.body}>
      <div>
        <img className={style.img} src={ejerciciosBG} alt="ejerbg"></img>
      </div>
      <h1 className={style.title}>BODYBUILDING EXERCISES</h1>

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

          {isOpen ? (
            <Flex>
              <ButtonGroup>
                <Button
                  className={style.button}
                  onClick={() => {
                    onCancel();
                  }}
                  bg="red.500"
                >
                  Cancelar
                </Button>

                {ejer.length >= 2 ? (
                  <Button
                    onClick={() => {
                      onSubmit();
                    }}
                    bg={"blue.300"}
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    bg={"gray.300"}
                    onClick={() => {
                      onDenied();
                    }}
                  >
                    Select two exercises
                  </Button>
                )}
              </ButtonGroup>
            </Flex>
          ) : (
            <Button
              className={style.button}
              bg="blue.200"
              onClick={() => {
                changeState();
              }}
            >
              {" "}
              Crea tu Rutina
            </Button>
          )}
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
      </Flex>
      {!paginate.length ? (
        <Loading />
      ) : (
        <EjercicioCards
          ejercicios={paginate}
          isOpen={isOpen}
          setEjer={setEjer}
          ejer={ejer}
          onClick={onClick}
        />
      )}
      <Box display={"flex"} justifyContent={"center"}>
        <div className={style.pagesContainer}>
          <Button
            className={style.button}
            onClick={() => handleClickArrow("-")}
            disabled={page === 1}
          >
            &lt;
          </Button>
          {pageIndex.map((index) => (
            <Button
              size={"sm"}
              className={style.button}
              key={index}
              value={index}
              onClick={() => handleClickButton(index)}
              colorScheme={index === currentPage ? "blackAlpha" : undefined}
            >
              {index}
            </Button>
          ))}
          <Button
            className={style.button}
            onClick={() => handleClickArrow("+")}
            disabled={page === ejerciciosPages}
          >
            &gt;
          </Button>
        </div>
      </Box>
    </Box>
  );
}
