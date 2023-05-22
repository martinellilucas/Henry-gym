import Cards from "../Cards/Cards";

import Carousel from "../Carousel/Caruosel.jsx";

import style from "../Home/Home.module.css";

import { Box } from "@chakra-ui/react";

import ThreeTierPricing from "../Membresias/Membresia.jsx";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { postUser } from "../../redux/Actions";

const Home = () => {
  const { user } = useAuth0();
  const dispatch = useDispatch();

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
          <h1 id="membresias">OUR MEMBERSHIPS</h1>
        </Box>
      </div>
      <ThreeTierPricing></ThreeTierPricing>
    </div>
  );
};

export default Home;
