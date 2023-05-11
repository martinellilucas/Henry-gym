import SearchBar from "../SearchBar/SearchBar";
import logo from "../../assets/logo.png";

const Nav = () => {
  return (
    <div>
      <img src={logo} alt="logo"></img>
      <SearchBar></SearchBar>
      <ul>
        <span>Inicio</span>
        <span>Planes</span>
        <span>¿Quiénes somos?</span>
      </ul>
    </div>
  );
};

export default Nav;
