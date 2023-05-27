import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardComment from "../CardComment/CardComment";
import PostComment from "../CrearComment/PostComment";
import { getComentarios, getUserByEmail } from "../../../redux/Actions";

import styles from "./Comment.module.css";
import { useAuth0 } from "@auth0/auth0-react";

export default function Comment() {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comentarios);
  const usuario = useSelector((state) => state.usuario);
  const { user } = useAuth0();
  const handlePostComment = () => {
    dispatch(getComentarios()); // Actualiza los comentarios después de agregar uno nuevo
  };

  useEffect(() => {
    dispatch(getComentarios());
    dispatch(getUserByEmail(user?.email));
  }, [dispatch, user?.email]);

  return (
    <div>
      <div className={styles.containerReviews}>
        <h2 className={styles.title}>REVIEWS</h2>
      </div>
      <div className={styles.postBoton}>
        <PostComment usuario={usuario} onPostComment={handlePostComment} />
      </div>

      <div className={styles.container}>
        {comments?.map((comment) =>
          comment.isBanned ? (
            <></>
          ) : (
            <div key={comment.id}>
              <CardComment
                id={comment.id}
                texto={comment.texto}
                nombreClase={comment.nombreClase}
                nombreCliente={comment.nombreCliente}
                imagenCliente={comment.picture}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}
