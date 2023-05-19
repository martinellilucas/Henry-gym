import "@stripe/stripe-js"
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "../src/components/Nav/Nav";
import Error from "../src/components/Error/Error";
import Home from "../src/components/Home/Home";
import Landing from "../src/components/Landing/Landing";
import Detail from "../src/components/Detail/Detail";
import About from "../src/components/About/About";
import SmallCentered from "../src/components/Footer/footer";
import Pagination from "./components/PaginationEjercicios/Pagination";
import PaginationRutinas from "./components/PaginationRutinas/PaginationRutinas";
import PostRutina from "./components/CrearRutina/CrearRutina";
import Auth0ProviderWithHistory from "./auth0provider";

import SubscriptionSuccess from "./components/Success/success";
import SubscriptionCancel from "./components/Cancel/cancel";

import ClasesMembresia from "./components/Clases/Clases";


function App() {
  const { pathname } = useLocation();
  return (
    <Auth0ProviderWithHistory>
      <div>
        {pathname !== "/" && <Nav />}
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/rutinas" element={<PaginationRutinas />} />
          <Route path="/ejercicios" element={<Pagination />} />
          <Route path="/form" element={<PostRutina />} />
          <Route path="/success" element={<SubscriptionSuccess />} />
          <Route path="/cancel" element={<SubscriptionCancel />} />
          <Route path="/clases" element={<ClasesMembresia />} />

        </Routes>
        {pathname !== "/" && <SmallCentered />}
      </div>
    </Auth0ProviderWithHistory>
  );
}

export default App;
