import Card from "../Card/Card";
import style from "../Cards/Cards.module.css";
//! Mockeo provisorio de las rutinas para estilar las tarjetas
import imagen from "../../assets/musculacion.jpg";
const rutinas = [
  {
    id: 1,
    nivel: "benniger",
    ejercicios: [
      "Incline Hammer Curls",
      "Wide-grip barbell curl",
      "EZ-bar spider curl",
    ],
    grupoMuscular: ["biceps"],
    imagen: imagen,
  },
  {
    id: 3,
    nivel: "benniger",
    ejercicios: [
      "Incline Hammer Curls",
      "Wide-grip barbell curl",
      "EZ-bar spider curl",
    ],
    grupoMuscular: ["biceps"],
    imagen: imagen,
  },
  {
    id: 2,
    nivel: "benniger",
    ejercicios: [
      "Incline Hammer Curls",
      "Wide-grip barbell curl",
      "EZ-bar spider curl",
    ],
    grupoMuscular: ["biceps"],
    imagen: imagen,
  },
  {
    id: 4,
    nivel: "benniger",
    ejercicios: [
      "Incline Hammer Curls",
      "Wide-grip barbell curl",
      "EZ-bar spider curl",
    ],
    grupoMuscular: ["biceps"],
    imagen: imagen,
  },
  {
    id: 5,
    nivel: "benniger",
    ejercicios: [
      "Incline Hammer Curls",
      "Wide-grip barbell curl",
      "EZ-bar spider curl",
    ],
    grupoMuscular: ["biceps"],
    imagen: imagen,
  },
  {
    id: 6,
    nivel: "benniger",
    ejercicios: [
      "Incline Hammer Curls",
      "Wide-grip barbell curl",
      "EZ-bar spider curl",
    ],
    grupoMuscular: ["biceps"],
    imagen: imagen,
  },
  {
    id: 7,
    nivel: "benniger",
    ejercicios: [
      "Incline Hammer Curls",
      "Wide-grip barbell curl",
      "EZ-bar spider curl",
    ],
    grupoMuscular: ["biceps"],
    imagen: imagen,
  },
  {
    id: 8,
    nivel: "benniger",
    ejercicios: [
      "Incline Hammer Curls",
      "Wide-grip barbell curl",
      "EZ-bar spider curl",
    ],
    grupoMuscular: ["biceps"],
    imagen: imagen,
  },
  {
    id: 9,
    nivel: "benniger",
    ejercicios: [
      "Incline Hammer Curls",
      "Wide-grip barbell curl",
      "EZ-bar spider curl",
    ],
    grupoMuscular: ["biceps"],
    imagen: imagen,
  },
  {
    id: 10,
    nivel: "benniger",
    ejercicios: [
      "Incline Hammer Curls",
      "Wide-grip barbell curl",
      "EZ-bar spider curl",
    ],
    grupoMuscular: ["biceps"],
    imagen: imagen,
  },
];
const Cards = () => {
  return (
    <div className={style.cardsContainer}>
      {rutinas.map((rutina) => {
        return (
          <Card
            id={rutina.id}
            nivel={rutina.nivel}
            ejercicios={rutina.ejercicios}
            grupoMuscular={rutina.grupoMuscular}
            imagen={rutina.imagen}
          ></Card>
        );
      })}
    </div>
  );
};

export default Cards;
