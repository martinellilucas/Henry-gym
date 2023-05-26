import "@stripe/stripe-js";
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
import "react-chatbot-kit/build/main.css";
import SubscriptionSuccess from "./components/Success/success";
import SubscriptionCancel from "./components/Cancel/cancel";
import SubscriptionSuccess2 from "./components/Success/success2";
import SubscriptionSuccess3 from "./components/Success/success3";
import ThreeTierPricing from "./components/Membresias/Membresia";
import ClasesMembresia from "./components/Clases/Clases";

import SidebarWithHeader from "./components/Dashboard/DashboardAdmin";
import Perfil from "./components/PersonalP/Personalp";

function App() {
  const { pathname } = useLocation();
  const showNavbarAndFooter = !(pathname === "/dashboard" || pathname === "/");

  return (
    <Auth0ProviderWithHistory>
      <div>
        {showNavbarAndFooter && <Nav />}

        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/rutinas" element={<PaginationRutinas />} />
          <Route path="/ejercicios" element={<Pagination />} />
          <Route path="/memberships" element={<ThreeTierPricing />} />
          <Route path="/form" element={<PostRutina />} />
          <Route path="/success" element={<SubscriptionSuccess />} />
          <Route path="/cancel" element={<SubscriptionCancel />} />
          <Route path="/clases" element={<ClasesMembresia />} />
          <Route path="/success2" element={<SubscriptionSuccess2 />} />
          <Route path="/success3" element={<SubscriptionSuccess3 />} />
          <Route path="/dashboard" element={<SidebarWithHeader />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
        {showNavbarAndFooter && <SmallCentered />}
      </div>
    </Auth0ProviderWithHistory>
  );
}

export default App;
