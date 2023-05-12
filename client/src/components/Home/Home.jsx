import Cards from "../Cards/Cards";

import Carousel from "../Carousel/Caruosel.jsx";

import style from "../Home/Home.module.css";

import { Box } from "@chakra-ui/react";

import ThreeTierPricing from "../Membresias/Membresia.jsx";

const Home = () => {
  return (
    <div className={style.home}>
      <Carousel></Carousel>
      <div className={style.titleContainer}>
        <Box id="rutinas">
          <h1>NUESTRAS MEMBRESIAS</h1>
        </Box>
      </div>
      <ThreeTierPricing></ThreeTierPricing>
    </div>
  );
};

export default Home;
