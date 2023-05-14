import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearDetail, getEjercicios, rutinaById } from "../../redux/Actions";
import Card from "../Card/Card.jsx";
import style from "./Detail.module.css";

const Detail = () => {
  const { rutinaDetail, ejercicios } = useSelector((store) => store);
  const { id } = useParams();
  const dispatch = useDispatch();
  useState(() => {
    dispatch(rutinaById(id));
    dispatch(getEjercicios());
    return () => {
      dispatch(clearDetail());
    };
  }, [id]);

  const filtrados = ejercicios?.filter((ejercicio) =>
    rutinaDetail?.ejercicios.includes(ejercicio.name)
  );
  return (
    <div className={style.body}>
      <div className={style.container}>
        {rutinaDetail ? (
          <div className={style.card}>
            <div className={style.rutina}>
              <img className={style.img} src={rutinaDetail.imagen} alt="img" />
              <h1 className={style.title}>
                Difficulty: {rutinaDetail.difficulty}
              </h1>
              <h2 className={style.grupoMuscular}>
                Grupo Muscular: {rutinaDetail.grupoMuscular}
              </h2>
            </div>
            <div className={style.ejercicios}>
              <h1 className={style.title}>Ejercicios</h1>
              {filtrados.map((e) => {
                return (
                  <div key={e.id}>
                    <h1 className={style.title}>{e.name}</h1>

                    <h3 className={style.title}>Instructions </h3>
                    <p className={style.instructions}>{e.instructions}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Detail;
