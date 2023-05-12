import Cards from "../Cards/Cards";

import SmallCentered from "../Footer/footer"

import Carousel from "../Carousel/Caruosel.jsx";

import style from "../Home/Home.module.css";




const Home = () => {
  return (
    <div className={style.home}>
      <Carousel></Carousel>
      <div className={style.titleContainer}>
        <h1>NUESTRAS RUTINAS</h1>
      </div>
      <Cards></Cards>
      <SmallCentered />
    </div>
  );
};

export default Home;
