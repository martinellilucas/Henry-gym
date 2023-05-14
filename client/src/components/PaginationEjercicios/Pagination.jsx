import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import EjercicioCards from "../EjercicioCards/EjercicioCards";
import SearchBar from "../SearchBar/SearchBar";
import { getEjercicios } from "../../redux/Actions";

export default function Pagination() {
  const allEjercicios = useSelector((state) => state.ejercicios);
  const [currentPage, setCurrentPage] = useState(1);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const count = 12;
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

  const handleClickButton = (value) => {
    setPage(value);
    setCurrentPage(value);
  };

  return (
    <Box>
      <Flex
        display="flex"
        flexDirection="column"
        align="center"
        justify="center"
      >
        <SearchBar />
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
