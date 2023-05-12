import style from "../SearchBar/SearchBar.module.css";

const SearchBar = () => {
  return (
    <div>
      <input className={style.search} placeholder="Buscar actividad"></input>
    </div>
  );
};

export default SearchBar;
