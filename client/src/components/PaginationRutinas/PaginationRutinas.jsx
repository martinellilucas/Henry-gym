import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Box, Button, Flex, useToast } from "@chakra-ui/react";
import Cards from "../Cards/Cards";
import { getRutinas } from "../../redux/Actions";
import style from "./PaginationRutinas.module.css";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import { useAuth0 } from "@auth0/auth0-react";
import rutinasBG from "../../assets/rutinasBG.png";

export default function Pagination() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const [ejer,setEjer] = useState([])
  const allRutinas = useSelector((state) => state.rutinas);
  const [currentPage, setCurrentPage] = useState(1);
  const [page, setPage] = useState(1);
  const navigate = useNavigate()
  const toast = useToast()

  const dispatch = useDispatch();
  const count = 6;
  const pageIndex = [];

  const rutinasPages = Math.ceil(allRutinas.length / count);
  const paginate = allRutinas.slice((page - 1) * count, page * count);

  for (let i = 1; i <= rutinasPages; i++) {
    pageIndex.push(i);
  }

  const test = () => {
    const item = window.localStorage.getItem('ejercicios')
    if(item){
      setEjer(
        JSON.parse(item)
      )
    }
    console.log(ejer)
  }

  useEffect(() => {
    dispatch(getRutinas());
    test()
  }, []);

  
  const goForm = () => {
    navigate('/form')
    toast({
      title: "Please select one picture for your routine",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  }

  const goExercise = () => {
    navigate('/ejercicios')
    toast({
      title: "Please select at least two exercises",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  }
  
  const renderPaginationButtons = () => {
    const start = Math.max(currentPage - 1, 1);
    const end = Math.min(currentPage + 1, rutinasPages);

    const buttons = [];
    for (let i = start; i <= end; i++) {
      buttons.push(
        <Button
          key={i}
          colorScheme={i === currentPage ? "blackAlpha" : undefined}
          disabled={i === currentPage}
          onClick={() => handleClickButton(i)}
        >
          {i}
        </Button>
      );
    }
    return buttons;
  };

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
    <div className={style.body}>
      <div>
        <img src={rutinasBG} alt="rutinasbg" />
      </div>
      <h1 className={style.title}>WORKOUT ROUTINES</h1>
      <Box className={style.container}>
          {ejer.length ? 
          <Button colorScheme="blackAlpha" 
          onClick={() => {
            goForm()
          }}>
            Create your own
          </Button> :
          <Button colorScheme="blackAlpha"
            onClick={() => {
              goExercise()
            }}
          >
            Create your own
          </Button>  
          }
        
        {!paginate.length ? (
          <Loading />
        ) : (
          <Cards rutinas={paginate} disabled={false} />
        )}
      </Box>
      <Flex
          display="flex"
          flexDirection="column"
          align="center"
          justify="center"
        >
          {isAuthenticated ? (
            <div className={style.pagesContainer}>
              <Button
                className={style.pages}
                onClick={() => handleClickArrow("-")}
                disabled={page === 1}
              >
                &lt;
              </Button>
              {
                renderPaginationButtons()
              }
              <Button
                className={style.pages}
                onClick={() => handleClickArrow("+")}
                disabled={page === rutinasPages}
              >
                &gt;
              </Button>
            </div>
          ) : (
            <div className={style.pagesContainer}>
              <Button
                className={style.pages}
                onClick={() => loginWithRedirect()}
                disabled={page === 1}
              >
                &lt;
              </Button>
              <Button
                className={style.pages}
                onClick={() => loginWithRedirect()}
                disabled={page === rutinasPages}
              >
                &gt;
              </Button>
            </div>
          )}
        </Flex>
    </div>
  );
}
