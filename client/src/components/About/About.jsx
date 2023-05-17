import style from "./About.module.css";
import Vic from "../../assets/personaltrainer.jpg";
import Robert from "../../assets/personaltrainer2.jpg";
import Lucas from "../../assets/personaltrainer3.jpg";

const About = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>About</h1>
      <p className={style.text}>
        Somos una organización dedicada a ayudar a las personas a mejorar su
        salud y bienestar a través del ejercicio físico. Nuestro objetivo
        principal es proporcionar un espacio seguro y cómodo para que nuestros
        miembros puedan hacer ejercicio y lograr sus objetivos de fitness.
        Además de las instalaciones, también ofrecemos servicios de
        entrenamiento personalizado, clases de grupo, nutrición y asesoramiento
        para ayudar a nuestros miembros a alcanzar sus objetivos. Creemos que el
        ejercicio es esencial para mantener una vida saludable y equilibrada, y
        nuestro equipo está compuesto por expertos en fitness y salud que están
        comprometidos en ayudar a nuestros miembros a alcanzar su máximo
        potencial.
      </p>
      <div className={style.imgContainer}>
        <div>
          <img src={Vic} alt="Personal Trainer Vic" className={style.img} />
          <h2 className={style.trainerName}>Vic</h2>
        </div>
        <div>
          <img
            src={Robert}
            alt="Personal Trainer Robert"
            className={style.img}
          />
          <h2 className={style.trainerName}>Robert</h2>
        </div>
        <div>
          <img src={Lucas} alt="Personal Trainer Lucas" className={style.img} />
          <h2 className={style.trainerName}>Lucas</h2>
        </div>
      </div>
    </div>
  );
};

export default About;
