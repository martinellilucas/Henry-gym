import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Cards from "../Cards/Cards";
import { getRutinas } from "../../redux/Actions";
import style from "./PaginationRutinas.module.css";

export default function Pagination() {
  const allRutinas = useSelector((state) => state.rutinas);
  const [currentPage, setCurrentPage] = useState(1);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const count = 6;
  const pageIndex = [];

  const rutinasPages = Math.ceil(allRutinas.length / count);
  const paginate = allRutinas.slice((page - 1) * count, page * count);

  for (let i = 1; i <= rutinasPages; i++) {
    pageIndex.push(i);
  }

  useEffect(() => {
    dispatch(getRutinas());
  }, []);

  const handleClickArrow = (operation) => {
    if (operation === "-") {
      if (page > 1) {
        setPage(page - 1);
        setCurrentPage(page - 1);
      }
    } else {
      if (page < rutinasPages) {
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
    <div className={style.container}>
      <Box>
        <Flex
          display="flex"
          flexDirection="column"
          align="center"
          justify="center"
        >
          <Flex margin="50px" align="center">
            <Button onClick={() => handleClickArrow("-")} disabled={page === 1}>
              &lt;
            </Button>
            {pageIndex.map((index) => (
              <Button
                key={index}
                value={index}
                onClick={() => handleClickButton(index)}
                colorScheme={index === currentPage ? "red" : undefined}
              >
                {index}
              </Button>
            ))}
            <Button
              onClick={() => handleClickArrow("+")}
              disabled={page === rutinasPages}
            >
              &gt;
            </Button>
          </Flex>
        </Flex>
        <Cards rutinas={paginate} disabled={false} />
      </Box>
    </div>
  );
}
