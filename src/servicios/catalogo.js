import { cliente } from "./api";

export default {
  getObtenerMarcas() {
    return cliente.get(`/marcas`);
  },
  postValidarUsuario(data) {
    return cliente.post(`/validarUsuario`, data);
  },
  postInsertarMarca(data) {
    return cliente.post(`/marcas/crearMarca`, data);
  },
  postInsertarModelo(data) {
    return cliente.post(`modelos/crearModelo`, data);
  },
  postInsertarTipoFunda(data) {
    return cliente.post(`fundasTipos/crearTipoFunda`, data);
  },
  postObtenerProductos(data){
    return cliente.post(`productos/BuscarClave`, data);
  },
  postInsertarVenta(data){
    return cliente.post(`ventas/insertarDetalleVenta`, data);
  }
};
