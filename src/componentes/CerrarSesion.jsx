import React from "react";
import { useAuth } from "../contextos/AuthContext";

function CerrarSesion() {
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();
  const handleLogout = () => {
    setIsLoggedIn(false);
    setAuthUser(null); // Limpia la información del usuario
  };
  return (
    <button
      className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100"
      onClick={handleLogout}
    >
      Cerrar sesion
    </button>
  );
}

export default CerrarSesion;
