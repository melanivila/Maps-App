export const LoadingPlaces = () => {
  return (
    <div className="alert alert-secondary mt-2 mb-1 d-flex flex-row justify-content-around align-items-center">
      <div className="spinner-border text-dark" role="status"></div>
      <div>
        <h6 className="mt-2">Buscando...</h6>
        <p className="mb-2">Espere por favor</p>
      </div>
    </div>
  );
};
