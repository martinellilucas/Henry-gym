import React from "react";
import styles from "./comment.module.css";
//import ReactStars from "react-rating-stars-component";

export default function CommentCard({ id, texto, ClaseID  }) {
  return (
    <div className={styles.commentCard}>
      <h2 className={styles.name}>{id}</h2>
      <h4 className={styles.classname}>{ClaseID}</h4>
      <div className={styles.comment}>
        <div className={styles.content}>
          <p>{texto}</p>
        </div>
      </div>
    </div>
  );
}


  {/* <div className={styles.stars}>
  <ReactStars
    count={5} // Número total de estrellas
    value={rating}// Valor de la calificación
    edit={false} // Deshabilitar la edición de la calificación
    size={24} // Tamaño de las estrellas
    color1="#dddddd" // Color de las estrellas inactivas
    color2="#ffc107" // Color de las estrellas activas
  />

  </div> */}