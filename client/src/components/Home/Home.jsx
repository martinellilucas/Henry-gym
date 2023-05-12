import Cards from "../Cards/Cards";

import Carousel from "../Carousel/Caruosel.jsx";

import style from "../Home/Home.module.css";

import { Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <div className={style.home}>
      <Carousel></Carousel>
      <div className={style.titleContainer}>
        <Box id="rutinas">
          <h1>NUESTRAS RUTINAS</h1>
        </Box>
      </div>
      <Cards></Cards>
    </div>
  );
};

export default Home;
