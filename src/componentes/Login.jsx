import React, { useState, useEffect } from "react";
import catalogo from "../servicios/catalogo";
import { useAuth } from "../contextos/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [data, setData] = useState(null);
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const datos = {
      nombre_usuario: usuario,
      password: contrasena,
    };
    try {
      const response = await catalogo.postValidarUsuario(datos);
      setData(response.data);

      if (response.data.codigo === 200) {
        actualizarEstado();
        navigate("/");
      } else {
        console.log("Email o contraseña inválidos");
      }
    } catch (error) {
      console.log(data);
      console.error("Error en la autenticación:", error);
      alert("Ocurrió un error. Inténtalo de nuevo.");
    }
  };

  function actualizarEstado() {
    setIsLoggedIn(true);
    console.log(isLoggedIn);
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Iniciar Sesion
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="usuario">
              Usuario:
            </label>
            <input
              id="usuario"
              type="text"
              value={usuario}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              onChange={(e) => setUsuario(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="contrasena">
              Contraseña:
            </label>
            <input
              id="contrasena"
              type="password" // Corrección del tipo de input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              required
            />
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors" type="submit">Iniciar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
