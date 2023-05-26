import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postComentario, getClases } from "../../../redux/Actions/index";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";
import styles from "./PostComment.module.css";

export default function PostComment() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [clase, setClase] = useState("");
  const [texto, setTexto] = useState("");
  const [placeholder, setPlaceholder] = useState("Agregue su comentario");

  const { isAuthenticated, user, loginWithRedirect } = useAuth0(); // Obtener la información del usuario autenticado
  const classes = useSelector((state) => state.clases);
  // const uniqueClasses = classes
  // ? [...new Set(classes.map((clase) => clase.nombre))]
  // : [];

  //console.log(classes)
  //console.log(uniqueClasses);


  const handleInputChange = (e) => {
    // Maneja el cambio en el valor del area del texto
    setTexto(e.target.value);
  };

  const handleInputFocus = () => {
    setPlaceholder("");
  };

  const handleInputBlur = () => {
    // Maneja la pérdida de enfoque del textarea
    if (texto === "") {
      // Si el valor del texto está vacío, restablece el placeholder
      setPlaceholder("Agregue su comentario");
    }
  };

  const handleOpen = () => {
    // Maneja la apertura del diálogo
    setOpen(true);
  };

  const handleClose = () => {
    // Maneja el cierre del diálogo y restablece los valores
    setOpen(false);
    setClase("");
    setTexto("");
  };

  useEffect(() => {
    // Despachar la acción getClases al montar el componente
    dispatch(getClases());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (isAuthenticated && user && user.email) {
      
      const comentario = {
        email: user?.email ??  'franco@gmail.com', 
        clase: clase?.id,
        texto: texto
      };
      dispatch(postComentario(comentario));
   
      setClase("");
      setTexto("");
      handleClose();
    // } else {
    //   loginWithRedirect();
    // }
  };

  return (
    <div>
      <button className={styles.addButton} onClick={handleOpen}>
        Add comment
      </button>
      <Dialog
        className={styles.dialogContainer}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle className={styles.dialogTitle}>Add comment</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <div className={styles.activityContainer}>
              <select
                className={styles.activitySelect}
                value={clase}
                onChange={(e) => setClase(e.target.value)}
              >
                <option value="" disabled>
                  Select a class
                </option>
                {classes &&
                  classes.map((className) => (
                    <option key={className} value={className}>
                      {className}
                    </option>
                  ))}
              </select>
            </div>

            <div className={styles.textareaContainer}>
              <textarea
                className={styles.textarea}
                value={texto}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                placeholder={placeholder}
              ></textarea>
            </div>
          </form>
        </DialogContent>
        <DialogActions className={styles.dialogActions}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handleSubmit}>
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
