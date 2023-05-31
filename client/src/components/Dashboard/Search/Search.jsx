import style from "./Search.module.css";

const Search = ({ search, setSearch, handleSubmit }) => {
  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearch(value);
  };
  return (
    <div>
      <input
        className={style.input}
        type="text"
        placeholder="search"
        value={search.email}
        onChange={handleInputChange}
      ></input>
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        🔍
      </button>
    </div>
  );
};

export default Search;
