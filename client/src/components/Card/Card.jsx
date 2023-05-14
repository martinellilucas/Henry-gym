import style from "../Card/Card.module.css";
import { Button, Divider } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
const Card = ({ id, difficulty, ejercicios, grupoMuscular, imagen }) => {
  return (
    <div className={style.cardBody}>
      <img className={style.image} src={imagen} alt="img"></img>
      <h1 className={style.text}>Dificultad: {difficulty}</h1>
      <h1 className={style.text}>Ejercicios</h1>
      <ul className={style.list}>
        {ejercicios?.map((ejercicio) => {
          return (
            <li key={ejercicio} className={style.item}>
              {ejercicio}
            </li>
          );
        })}
      </ul>
      <h1 className={style.text}>Grupo Muscular</h1>
      <ul className={style.list}>
        {grupoMuscular?.map((grupo) => {
          return (
            <li key={grupo} className={style.item}>
              {grupo}
            </li>
          );
        })}
      </ul>
      <Divider />
      <NavLink to={`/detail/${id}`}>
        <Button className={style.btn} variant="solid" colorScheme="blackAlpha">
          DETALLES
        </Button>
      </NavLink>
    </div>
  );
};

export default Card;
