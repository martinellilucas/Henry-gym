import style from "./About.module.css";
import Vic from "../../assets/personaltrainer.jpg";
import Robert from "../../assets/personaltrainer2.jpg";
import Lucas from "../../assets/personaltrainer3.jpg";
import MapsCompoponent from "../Map/Map"

const About = () => {
  return (
    <div>
      
    <div className={style.container}>
      <h1 className={style.title}>About Us</h1>
      <hr></hr>
      <div className={style.txtContainer}>
        <p className={style.text}>
          We are an organization dedicated to helping people improve their
          health and well-being through physical exercise. Our primary goal is
          to provide a safe and comfortable space for our members to exercise
          and achieve their fitness goals. In addition to the facilities, we
          also offer personalized training services, group classes, nutrition
          and counseling to help our members achieve their goals. We believe
          that exercise is essential to maintaining a healthy and balanced life,
          and our team is made up of health and fitness experts who are
          committed to helping our members reach their full potential.
        </p>
      </div>
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
    <a name="abajo"/>
    <MapsCompoponent/>
    </div>

  );
};

export default About;
