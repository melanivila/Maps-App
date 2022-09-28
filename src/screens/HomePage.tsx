import { BtnMyLocation, MapView, ReactLogo, SearchBar } from "../components";

export const HomePage = () => {
  return (
    <div>
      <MapView />
      <SearchBar />
      <BtnMyLocation />
      <ReactLogo />
    </div>
  );
};
