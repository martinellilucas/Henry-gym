import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../redux/Actions";
import CommentCard from "../CardComment/comment";
import styles from "./comment.module.css"

export default function Comment() {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  return (
    <div className={styles.cardContent}>
      {comments.map((comment) => (
        <CommentCard
          id={comment.id}
          texto={comment.texto}
          ClaseID={comment.ClaseID}
        />
      ))}
    </div>
  );
}

