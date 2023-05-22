import Cards from "../Cards/Cards";

import Carousel from "../Carousel/Caruosel.jsx";

import style from "../Home/Home.module.css";

import { Box } from "@chakra-ui/react";

import ThreeTierPricing from "../Membresias/Membresia.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { postUser } from "../../redux/Actions";
import ClasesHome from "../ClasesHome/ClasesHome";

const Home = () => {
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const membership = useSelector((state) => state.membership);
  useEffect(() => {
    if (user) {
      dispatch(postUser(user));
    }
  });

  return (
    <div className={style.home}>
      <Carousel></Carousel>
      <div className={style.titleContainer}>
        <Box>
          {membership === "Bronze" || !isAuthenticated ? (
            <h1 id="membresias">OUR MEMBERSHIPS</h1>
          ) : (
            <h1 id="membresias">SELECT YOUR CLASSES</h1>
          )}
        </Box>
      </div>
      {membership === "Bronze" || !isAuthenticated ? (
        <ThreeTierPricing></ThreeTierPricing>
      ) : (
        <ClasesHome></ClasesHome>
      )}
    </div>
  );
};

export default Home;
