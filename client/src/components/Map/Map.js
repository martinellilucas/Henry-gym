import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import style from "./map.module.css";
import PlaceIcon from "@material-ui/icons/Place";

const containerStyle = {
  width: "90%",
  height: "300px",
  margin: "10px",
};

const center = {
  lat: 40.7674685,
  lng: -73.9880533,
};

function MapsComponent() {
  return (
    <section className={style.aboutSection}>
      <div className={style.encontranos}>
        <h1 className={style.title}>WE ARE LOCATED IN...</h1>
      </div>

      <div className={style.containerMapa}>
        <div className={style.containerUbic}>
          <PlaceIcon className={style.icon} />
          <p className={style.ubic}>423 W 55th St, New York, United States</p>
        </div>
        <LoadScript googleMapsApiKey="AIzaSyBFVuEUKeICgqZtnUndF-pfGy3_g96zmwY">
          <GoogleMap
            className={style.google}
            mapContainerStyle={containerStyle}
            center={center}
            zoom={18}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </section>
  );
}

export default React.memo(MapsComponent);
