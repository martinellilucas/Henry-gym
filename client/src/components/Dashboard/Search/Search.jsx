import style from "./Search.module.css";

const Search = ({ search, setSearch, handleSubmitClient }) => {
  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearch(value);
  };
  return (
    <div>
      <input
        className={style.input}
        type="text"
        placeholder="client email"
        value={search.email}
        onChange={handleInputChange}
      ></input>
      <button type="submit" onClick={(e) => handleSubmitClient(e)}>
        🔍
      </button>
    </div>
  );
};

export default Search;
