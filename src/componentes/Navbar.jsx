import React from "react";
import CerrarSesion from "../componentes/CerrarSesion";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <a href="#">MyLogo</a>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/venderMenu" className="text-white hover:text-gray-200">
            Vender
          </Link>
          <Link to="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link to="/login" className="text-white hover:text-gray-200">
            Login
          </Link>
          <Link to="/agregar" className="text-white hover:text-gray-200">
            Agregar
          </Link>
        </div>
        <div>
          <CerrarSesion />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
