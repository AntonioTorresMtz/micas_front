import React, { useState, useEffect } from "react";
import catalogo from "../../servicios/catalogo";
import Swal from "sweetalert2";

function AgregarModelo({ closeModal }) {
  const [modelo, setModelo] = useState("");
  const [marca, setMarca] = useState(0);
  const [pulgadas, setPulgadas] = useState("");
  const [data, setData] = useState(null);
  const [listaMarcas, setListaMarcas] = useState([]);

  useEffect(() => {
    const obtenerMarcas = async () => {
      try {
        const response = await catalogo.getObtenerMarcas(); // Asegúrate de invocar la función
        setListaMarcas(response.data.data);
        console.log("Marcas obtenidas:", response.data); // Verifica los datos recibidos
      } catch (error) {
        console.error("Error al cargar los datos", error);
      }
    };
    obtenerMarcas(); // Llamar la función
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const datos = {
      nombre_modelo: modelo,
      FK_marca: marca,
      pulgadas: pulgadas === "" ? null : pulgadas,
    };

    try {
      const response = await catalogo.postInsertarModelo(datos);
      setData(response.data);

      if (response.data.codigo === 201) {
        Swal.fire({
          title: "Modelo creado",
          text: "Se ha agregado un nuevo modelo!",
          icon: "success",
        });
        setMarca("");
      } else {
        console.log("Error al insertar");
      }
    } catch (error) {
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
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Agregar Modelo
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="modelo">
              Modelo:
            </label>
            <input
              id="modelo"
              type="text"
              value={modelo}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              onChange={(e) => setModelo(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="marca">
              Marca:
            </label>
            <select
              id="marca"
              name="marca"
              className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={marca} // Mantiene el valor seleccionado
              onChange={(e) => setMarca(e.target.value)} // Actualiza el estado de marca
            >
              <option value="">Selecciona...</option>
              {listaMarcas.map((marca) => (
                <option key={marca.PK_marca} value={marca.PK_marca}>
                  {marca.nombre_marca}{" "}
                  {/* Asegúrate de que estos campos existan en tu objeto */}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="pulgadas">
              Pulgadas:
            </label>
            <input
              id="pulgadas"
              type="number"
              value={pulgadas}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              onChange={(e) => setPulgadas(e.target.value)}
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

export default AgregarModelo;
