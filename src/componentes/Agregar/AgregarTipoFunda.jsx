import React, { useState } from "react";
import catalogo from "../../servicios/catalogo";
import Swal from "sweetalert2";

function AgregarTipoFunda({ closeModal }) {
  const [tipoFunda, setTipoFunda] = useState("");
  const [data, setData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const datos = {
      nombre_tipo_funda: tipoFunda,
    };
    try {
      const response = await catalogo.postInsertarTipoFunda(datos);
      setData(response.data);

      if (response.data.codigo === 201) {
        Swal.fire({
          title: "Tipo de Funda creado",
          text: "Se ha agregado un nuevo tipo de funda!",
          icon: "success",
        });
        setTipoFunda("");
      } else {
        console.log("Error al insertar");
      }
    } catch (error) {
      console.log(data);
      console.error("Error en la autenticación:", error);
      alert("Ocurrió un error. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="modal_formulario flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <p className="modal_cerrar" onClick={closeModal}>
          X
        </p>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Agregar Tipo de Funda</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="tipoFunda">
              Tipo de funda:
            </label>
            <input
              id="tipoFunda"
              type="text"
              value={tipoFunda}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              onChange={(e) => setTipoFunda(e.target.value)}
              required
            />
          </div>
          <button
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            type="submit"
          >
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
}

export default AgregarTipoFunda;
