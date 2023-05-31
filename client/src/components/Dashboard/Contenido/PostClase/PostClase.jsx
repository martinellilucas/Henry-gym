import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import styles from "./PostClase.module.css";
import { Button, Checkbox, useToast } from "@chakra-ui/react";
import { postClase } from "../../../../redux/Actions";

export default function PostClase({ onPostComment, usuario }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [clase, setClase] = useState({ nombre: "", dias: [], horario: "" });
  const [errors, setErrors] = useState({ nombre: "", dias: "", horario: "" });

  const toast = useToast();

  const validation = () => {
    let newErrors = {};
    if (clase.nombre.length <= 0) {
      newErrors.nombre = "The name of the class cannot be empty";
    } else {
      newErrors.nombre = "";
    }
    if (!clase.dias.length) {
      newErrors.dias = "You must select at least 1 day";
    } else {
      newErrors.dias = "";
    }
    if (clase.horario.length <= 4) {
      newErrors.horario = "You must establish the start time of the class";
    } else {
      newErrors.horario = "";
    }

    return newErrors;
  };

  const handleInputChange = (e) => {
    // Maneja el cambio en el valor del area del texto
    const target = e.target.name;
    const value = e.target.value;
    if (target === "horario") {
      setClase({ ...clase, horario: `${value}:00` });
    }
    if (target === "nombre") {
      setClase({ ...clase, [target]: value });
    }
    if (target === "dias") {
      if (!clase.dias.includes(value)) {
        setClase({ ...clase, dias: [...clase.dias, value] });
      } else {
        setClase({
          ...clase,
          dias: [...clase.dias.filter((dia) => dia !== value)],
        });
      }
    }
    setErrors(validation());
  };

  const handleOpen = () => {
    // Maneja la apertura del diálogo
    setOpen(true);
  };

  const handleClose = () => {
    // Maneja el cierre del diálogo y restablece los valores
    setOpen(false);
    setClase({ nombre: "", dias: [], horario: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postClase(clase)).then(() => {
      handleClose();
    });
    setErrors({ nombre: "", dias: "", horario: "" });
    setClase({ nombre: "", dias: [], horario: "" });

    toast({
      title: "Thank you",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <div className={styles.body}>
      <Button onClick={handleOpen}>ADD NEW CLASS</Button>
      <Dialog
        className={styles.dialogContainer}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle className={styles.dialogTitle}>ADD NEW CLASS</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
              <label htmlFor="nombre">Name</label>
              <input
                name="nombre"
                value={clase.nombre}
                placeholder="Insert the name"
                onChange={handleInputChange}
              ></input>
            </div>
            {errors.nombre && (
              <p className={styles.clasesErrors}>{errors.nombre}</p>
            )}

            <div className={styles.checkBox}>
              <Checkbox
                onChange={handleInputChange}
                checked={clase.dias.includes("Mondays")}
                value="Mondays"
                name="dias"
              >
                Mondays
              </Checkbox>
              <Checkbox
                onChange={handleInputChange}
                checked={clase.dias.includes("Tuesdays")}
                value="Tuesdays"
                name="dias"
              >
                Tuesdays
              </Checkbox>
              <Checkbox
                onChange={handleInputChange}
                checked={clase.dias.includes("Wednesdays")}
                value="Wednesdays"
                name="dias"
              >
                Wednesdays
              </Checkbox>
              <Checkbox
                onChange={handleInputChange}
                checked={clase.dias.includes("Thursdays")}
                value="Thursdays"
                name="dias"
              >
                Thursdays
              </Checkbox>
              <Checkbox
                onChange={handleInputChange}
                checked={clase.dias.includes("Fridays")}
                value="Fridays"
                name="dias"
              >
                Fridays
              </Checkbox>
              <Checkbox
                onChange={handleInputChange}
                checked={clase.dias.includes("Saturdays")}
                value="Saturdays"
                name="dias"
              >
                Saturdays
              </Checkbox>

              {errors.dias && (
                <p className={styles.clasesErrors}>{errors.dias}</p>
              )}
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="horario">Time</label>
              <input
                type="time"
                name="horario"
                onChange={handleInputChange}
              ></input>
            </div>
            {errors.horario && (
              <p className={styles.clasesErrors}>{errors.horario}</p>
            )}
          </form>
        </DialogContent>
        <DialogActions className={styles.dialogActions}>
          <Button colorScheme="red" onClick={handleClose}>
            Cancel
          </Button>
          {!errors.nombre &&
          !errors.horario &&
          !errors.dias &&
          clase.nombre &&
          clase.dias.length &&
          clase.horario.length > 4 ? (
            <Button colorScheme="green" type="submit" onClick={handleSubmit}>
              CREATE
            </Button>
          ) : (
            <Button colorScheme="green" isDisabled>
              CREATE
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
