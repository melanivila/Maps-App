import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import { MapsApp } from "./MapsApp";

import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken =
  "pk.eyJ1IjoibWVsYW5pdmlsYSIsImEiOiJjbDhrYWc5NHQwYW1xM29wNGJ1Zm5iNGUxIn0.AuNTJuO_ynTNX0jJEN7l8Q";

if (!navigator.geolocation) {
  alert("Tu navegador no tiene opción de geolocalización");
  throw new Error("Tu navegador no tiene opción de geolocalización");
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
