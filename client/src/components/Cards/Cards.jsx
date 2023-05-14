import Card from "../Card/Card";
import style from "../Cards/Cards.module.css";

const Cards = ({ rutinas }) => {
  return (
    <div className={style.cardsContainer}>
      {rutinas.length ? (
        rutinas.map((rutina) => {
          return (
            <Card
              key={rutina.id}
              id={rutina.id}
              nivel={rutina.nivel}
              ejercicios={rutina.ejercicios}
              grupoMuscular={rutina.grupoMuscular}
            ></Card>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default Cards;
