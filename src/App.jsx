import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./componentes/Login";
import Home from "./componentes/Home";
import Navbar from "./componentes/Navbar";
import AgregarLanding from "./componentes/Agregar/AgregarLanding";
import { AuthProvider } from "./contextos/AuthContext";
import AgregarMarca from "./componentes/Agregar/AgregarMarca";
import VenderMenu from "./componentes/Vender/VenderMenu";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/agregar" element={<AgregarLanding />}></Route>
          <Route path="/agregarMarca" element={<AgregarMarca />}></Route>
          <Route path="/venderMenu" element={<VenderMenu />}></Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
