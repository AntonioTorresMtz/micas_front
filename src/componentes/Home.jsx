import React from "react";
import { useAuth } from "../contextos/AuthContext";
import { Navigate } from "react-router-dom";

function Home() {
  const { isLoggedIn, authUser } = useAuth(); // Desestructura los valores que necesitas

  return (
    <div>
      {isLoggedIn ? (
        <p>Bienvenido!</p> // Suponiendo que authUser tiene una propiedad `name`
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
}

export default Home;
