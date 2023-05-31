import Carousel from "../Carousel/Caruosel.jsx";
import style from "../Home/Home.module.css";
import { Box } from "@chakra-ui/react";
import ThreeTierPricing from "../Membresias/Membresia.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserByEmail, postUser } from "../../redux/Actions";
import ClasesHome from "../ClasesHome/ClasesHome";
import ChatBot from "../ChatBot/ChatBot.jsx";

const Home = () => {
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const client = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      dispatch(postUser(user));
      dispatch(getUserByEmail(user?.email));
    }
  }, [dispatch, user]);

  return (
    <div className={style.home}>
      <Carousel></Carousel>
      <div className={style.titleContainer}>
        <Box>
          {client?.tipoDeSuscripcion === "Bronze" || !isAuthenticated ? (
            <h1 id="membresias">OUR MEMBERSHIPS</h1>
          ) : (
            <h1 id="membresias">SELECT YOUR CLASSES</h1>
          )}
        </Box>
      </div>

      {client?.tipoDeSuscripcion === "Bronze" || !isAuthenticated ? (
        <ThreeTierPricing></ThreeTierPricing>
      ) : (
        <ClasesHome></ClasesHome>
      )}
      <ChatBot></ChatBot>
      <a name="abajo"/>
    </div>
  );
};

export default Home;
