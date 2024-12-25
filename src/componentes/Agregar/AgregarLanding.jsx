import React, { useState } from "react";
import { Link } from "react-router-dom";
import AgregarMarca from "./AgregarMarca";
import AgregarModelo from "./AgregarModelo";
import AgregarTipoFunda from "./AgregarTipoFunda";

function AgregarLanding() {
  const [showModalMarca, setShowModalMarca] = useState(false);
  const [showModalModelo, setShowModalModelo] = useState(false);
  const [showModalTipoFunda, setShowModalTipoFunda] = useState(false);

  const openModelo = () => {
    setShowModalModelo(true);
  };

  const closeModelo = () => {
    setShowModalModelo(false);
  };

  const openMarca = () => {
    setShowModalMarca(true);
  };

  const closeMarca = () => {
    setShowModalMarca(false);
  };

  const openTipoFunda = () => {
    setShowModalTipoFunda(true);
  };

  const closeTipoFunda = () => {
    setShowModalTipoFunda(false);
  };

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center">
        <div className="m-1 w-20 h-28 bg-gray-300" onClick={openMarca}>
          Marca
        </div>
        <div className="m-1 w-20 h-28 bg-gray-300" onClick={openModelo}>
          Modelo
        </div>
        <div className="m-1 w-20 h-28 bg-gray-300" onClick={openTipoFunda}>
          Tipos de Funda
        </div>
        <div className="m-1 w-20 h-28 bg-gray-300" onClick={openTipoFunda}>
          Posicion
        </div>
        
      </div>
      {showModalMarca && <AgregarMarca closeModal={closeMarca} />}
      {showModalModelo && <AgregarModelo closeModal={closeModelo} />}
      {showModalTipoFunda && <AgregarTipoFunda closeModal={closeTipoFunda} />}
    </>
  );
}

export default AgregarLanding;
