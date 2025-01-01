import React from "react";
import catalogo from "../../servicios/catalogo";
import Swal from "sweetalert2";

function VenderButton({ productos, limpiarListaProductos }) {
  const handleCerrarVenta = async () => {
    if (productos.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "¡Atención!",
        text: "No hay productos para vender.",
      });
      return;
    }

    try {
      const response = await catalogo.postInsertarVenta(productos); // 👈 Envía el array directamente
      console.log(response);

      if (response.data.codigo === 201) {
        Swal.fire({
          icon: "success",
          title: "¡Venta exitosa!",
          text: response.data.message,
        });
        limpiarListaProductos();
      } else {
        console.log("Error al insertar el producto");
      }
    } catch (error) {
      console.error(
        "Error al insertar la venta:",
        error.response?.data || error.message
      );
      alert("Ocurrió un error. Inténtalo de nuevo.");
    }
  };

  function confirmarCerrarVenta() {
    Swal.fire({
      title: "¿Estas seguro de cerrar la venta?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si, cerrar",
      denyButtonText: `No, cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        handleCerrarVenta()
      } else if (result.isDenied) {
        Swal.fire("Venta sin cerrar aún", "", "info");
      }
    });
  }

  return (
    <button
      onClick={confirmarCerrarVenta}
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-2 text-right font-bold"
    >
      Cerrar Venta
    </button>
  );
}

export default VenderButton;
