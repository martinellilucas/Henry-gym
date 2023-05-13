import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getEjerciciosByName } from "../../redux/Actions";
import style from "../SearchBar/SearchBar.module.css";
//import * as actions from "../../redux/Actions"

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (name.length === 0) return alert ("Busca un ejercicio");
    dispatch(getEjerciciosByName(name));
  }
  return (
    <div className={style.contenedor}>
      <input
        className={style.input}
        type="text"
        placeholder="Por ejemplo: Hammer Curls"
        onChange={(e) => handleInputChange(e)}
      ></input>
      <button className={style.button} type="submit" onClick={(e) => handleSubmit(e)}>BUSCAR</button>
    </div>
  );
}

// const SearchBar = () => {
//   return (
//     <div>
//       <input className={style.search} placeholder=""></input>
//     </div>
//   );
// };

// export default SearchBar;
