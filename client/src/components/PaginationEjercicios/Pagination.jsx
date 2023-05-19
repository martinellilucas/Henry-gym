import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Box, Button, Flex, Text, filter } from "@chakra-ui/react";
import EjercicioCards from "../EjercicioCards/EjercicioCards";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Pagination.module.css";
import { getEjercicios } from "../../redux/Actions";
import { filterByMusculo } from "../../redux/Actions";
import { filterByDificultad } from "../../redux/Actions";

export default function Pagination() {
  const allEjercicios = useSelector((state) => state.ejercicios);
  const [currentPage, setCurrentPage] = useState(1);
  const [page, setPage] = useState(1);

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
    dispatch(filterByMusculo(e.target.value));
    setPage(1);
    document.getElementById("selectDificultad").selectedIndex = 0;
  }

  function handlerFilteredDificultad(e) {
    e.preventDefault();
    dispatch(filterByDificultad(e.target.value));
    setPage(1);
    document.getElementById("selectMusculo").selectedIndex = 0;
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
          <select
            id="selectMusculo"
            onChange={(e) => handlerFilteredMusculos(e)}
            className={style.film}
          >
            <option value="">Filter by muscle</option>
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
      <EjercicioCards ejercicios={paginate} />
    </Box>
  );
}
