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
              difficulty={rutina.difficulty}
              ejercicios={rutina.ejercicios}
              imagen={rutina.imagen}
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
