import React, { useState } from "react";
import BuscarProducto from "./VenderBuscarProducto";
import VenderTablaDetalle from "./VenderTablaDetalle";
import VenderButton from "./VenderButton";

function VenderMenu() {
  const [productos, setProductos] = useState([]);

  const limpiarListaProductos = (producto) => {
    setProductos([]);
  };
  // Función para agregar un producto a la tabla
  const agregarProductoATabla = (producto) => {
    setProductos((prevProductos) => {
      // Buscar si el producto ya existe en el array
      const productoExistente = prevProductos.find(
        (p) => p.id === producto.PK_producto
      );

      if (productoExistente) {
        // Si existe, actualizar la cantidad
        return prevProductos.map((p) =>
          p.id === producto.PK_producto
            ? {
                ...p,
                cantidad: p.cantidad + 1,
                importe: (p.cantidad + 1) * p.precio,
              }
            : p
        );
      } else {
        // Si no existe, agregar un nuevo producto
        return [
          ...prevProductos,
          {
            id: producto.PK_producto,
            cantidad: 1,
            nombre: producto.nombre_producto || "Nombre no disponible",
            stock: producto.cantidad || "Sin descripción",
            precio: producto.precio_venta || "$0",
            descuento: 0,
            garantia: producto.garantia || 0,
            importe: producto.precio_venta - 0,
          },
        ];
      }
    });
  };

  return (
    <div className="p-4 bg-gray-50 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Gestión de Productos</h1>
      <VenderButton
        productos={productos}
        limpiarListaProductos={limpiarListaProductos}
      />
      {/* Componente de Búsqueda */}
      <BuscarProducto onProductoEncontrado={agregarProductoATabla} />
      {/* Tabla Dinámica */}
      <VenderTablaDetalle filas={productos} setFilas={setProductos} />
    </div>
  );
}

export default VenderMenu;
