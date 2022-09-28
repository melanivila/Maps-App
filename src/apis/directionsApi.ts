import axios from "axios";

const directionsApi = axios.create({
  baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
  params: {
    alternatives: false,
    geometries: "geojson",
    overview: "simplified",
    steps: false,
    language: "es",
    access_token: process.env.REACT_APP_API_KEY,
  },
});

export default directionsApi;
