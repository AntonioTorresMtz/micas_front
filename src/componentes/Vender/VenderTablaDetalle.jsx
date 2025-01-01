import React from "react";

const VenderTablaDetalle = ({ filas, setFilas }) => {
  const eliminarFila = (id) => {
    setFilas(filas.filter((fila) => fila.id !== id));
  };

  const restarCantidad = (id) => {
    setFilas((prevFilas) =>
      prevFilas.map((fila) =>
        fila.id === id
          ? { ...fila, cantidad: fila.cantidad > 1 ? fila.cantidad - 1 : 1 }
          : fila
      )
    );
    actualizarImporte(id);
  };

  const calcularTotal = () => {
    return filas
      .reduce((total, fila) => total + fila.importe, 0)
      .toFixed(2);
  };

  const agregarCantidad = (id) => {
    setFilas((prevFilas) =>
      prevFilas.map((fila) =>
        fila.id === id ? { ...fila, cantidad: fila.cantidad + 1 } : fila
      )
    );
    actualizarImporte(id);
  };
  const actualizarDescuento = (id, nuevoDescuento) => {
    setFilas((prevFilas) =>
      prevFilas.map((fila) =>
        fila.id === id ? { ...fila, descuento: nuevoDescuento } : fila
      )
    );
    actualizarImporte(id);
  };

  const actualizarImporte = (id) => {
    setFilas((prevFilas) =>
      prevFilas.map((fila) =>
        fila.id === id
          ? { ...fila, importe: fila.precio * fila.cantidad - fila.descuento }
          : fila
      )
    );
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-2">Tabla de Productos</h2>
      <table className="min-w-full bg-white border border-gray-300 rounded-md overflow-hidden">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-2 px-4 text-left">Cantidad</th>
            <th className="py-2 px-4 text-left">Nombre</th>
            <th className="py-2 px-4 text-left">Stock</th>
            <th className="py-2 px-4 text-left">Precio</th>
            <th className="py-2 px-4 text-left">Descuento</th>
            <th className="py-2 px-4 text-left">Garantia</th>
            <th className="py-2 px-4 text-center">Acciones</th>
            <th className="py-2 px-4 text-center">Importe</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm">
          {filas.map((fila) => (
            <tr
              key={fila.id}
              className="hover:bg-gray-100 border-b border-gray-200"
            >
              <td className="py-2 px-4">{fila.cantidad}</td>
              <td className="py-2 px-4">{fila.nombre}</td>
              <td className="py-2 px-4">{fila.stock}</td>
              <td className="py-2 px-4">{fila.precio}</td>
              <td className="py-2 px-4">
                <input
                  type="number"
                  value={fila.descuento}
                  onChange={(e) =>
                    actualizarDescuento(
                      fila.id,
                      parseFloat(e.target.value) || 0
                    )
                  }
                  className="w-20 border rounded-md p-1"
                />
              </td>
              <td className="py-2 px-4">{fila.garantia + " días"}</td>
              <td className="py-2 px-4 text-center">
                <button
                  onClick={() => eliminarFila(fila.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
                >
                  Eliminar
                </button>
                <button
                  onClick={() => restarCantidad(fila.id)}
                  className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600"
                >
                  Restar
                </button>
                <button
                  onClick={() => agregarCantidad(fila.id)}
                  className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600"
                >
                  Agregar
                </button>
              </td>
              <td className="py-2 px-4">{fila.importe}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 text-right font-bold">
        <p>Total: ${calcularTotal()}</p>
      </div>
    </div>
  );
};

export default VenderTablaDetalle;
