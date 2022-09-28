import { useContext, useRef, useLayoutEffect } from "react";
import { MapContext, PlacesContext } from "../context";
import { Loading } from "./";
import { Map } from "mapbox-gl";

export const MapView = () => {
  const { setMap } = useContext(MapContext);
  const { isLoading, userLocation } = useContext(PlacesContext);
  const mapDiv = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!isLoading) {
      const map = new Map({
        container: mapDiv.current!, // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: userLocation, // starting position [lng, lat]
        zoom: 14, // starting zoom
      });
      setMap(map);
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div ref={mapDiv} className="map-div">
      {userLocation?.join(",")}
    </div>
  );
};
