import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "../src/components/Nav/Nav";
import Error from "../src/components/Error/Error";
import Home from "../src/components/Home/Home";
import Landing from "../src/components/Landing/Landing";
import Detail from "../src/components/Detail/Detail";
import About from "../src/components/About/About";
import SmallCentered from "../src/components/Footer/footer";
import Rutinas from "./components/Rutinas/Rutinas";
import Ejercicios from "./components/Ejercicios/Ejercicios";
import CrearRutina from "./components/CrearRutina/CrearRutina";

function App() {
  const { pathname } = useLocation();
  return (
    <div>
      {pathname !== "/" && <Nav />}
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/rutinas" element={<Rutinas />} />
        <Route path="/ejercicios" element={<Ejercicios />} />
        <Route path="/postrut" element={<CrearRutina />} />
      </Routes>
      {pathname !== "/" && <SmallCentered />}
    </div>
  );
}

export default App;
