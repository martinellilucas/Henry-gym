import { useEffect } from "react";
import Cards from "../Cards/Cards";
import style from "../Rutinas/Rutinas.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getRutinas } from "../../redux/Actions";

const Rutinas = () => {
  const rutinas = useSelector((state) => state.rutinas);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRutinas());
  }, []);

  return (
    <div className={style.container}>
      <Cards rutinas={rutinas}></Cards>
    </div>
  );
};

export default Rutinas;
