import style from "../Card/Card.module.css";
import { Button, Divider } from "@chakra-ui/react";
const Card = ({ id, nivel, ejercicios, grupoMuscular, imagen }) => {
  return (
    <div className={style.cardBody}>
      {/*  <img className={style.image} src={imagen} alt="img"></img> */}
      <h1 className={style.nivel}>Dificultad: {nivel}</h1>
      <ul className={style.list}>
        Ejercicios
        {ejercicios.map((ejercicio) => {
          return (
            <li key={ejercicio} className={style.item}>
              {ejercicio}
            </li>
          );
        })}
      </ul>
      <ul className={style.list}>
        Grupo Muscular
        {grupoMuscular.map((grupo) => {
          return (
            <li key={grupo} className={style.item}>
              {grupo}
            </li>
          );
        })}
      </ul>
      <Divider />
      <Button className={style.btn} variant="solid" colorScheme="blackAlpha">
        DETALLES
      </Button>
    </div>
  );
};

export default Card;
