import Cards from "../Cards/Cards";
import Carousel from "../Carrusel/carrusel";
import SmallCentered from "../Footer/footer"
import style from "../Home/Home.module.css";




const Home = () => {
  return (
    <div>
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
