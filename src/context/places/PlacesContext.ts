import { createContext } from "react";
import { Feature } from "../../interfaces/interfaces";

export interface PlacesContextProps {
  isLoading: boolean;
  userLocation?: [number, number];
  searchPlacesByTerm: (query: string) => Promise<Feature[]>;
  isLoadingPlaces: boolean;
  places: Feature[];
}

export const PlacesContext = createContext<PlacesContextProps>(
  {} as PlacesContextProps
);
