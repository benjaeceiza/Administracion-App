
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Inicio from "./components/Inicio"
import ListadoPropietarios from "./components/ListadoPropietarios"
import PropietariosDetail from "./components/PropietariosDetail"
import InquilinosDetail from "./components/InquilinosDetail"
import ListadoIquilinos from "./components/ListadoInquilinos"
import AgregarInquilino from "./components/AgregarInquilino"
import AgregarPropietario from "./components/AgregarPropietario"
import FormularioCasa from "./components/FormularioCasa"
import Buscados from "./components/Buscados"




function App() {


  return (
    <>
    
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/propietarios" element={<ListadoPropietarios/>}/>
      <Route path="/inquilinos" element={<ListadoIquilinos/>}/>
      <Route path="/propietario/:id" element={<PropietariosDetail/>}/>
      <Route path="/inquilino/:idInquilino" element={<InquilinosDetail/>}/>
      <Route path="/agregar/inquilino/:idInquilino" element={<AgregarInquilino/>}/>
      <Route path="/agregar/propietario" element={<AgregarPropietario/>}/>
      <Route path="/agregar/propiedad/:idPropietario" element={<FormularioCasa/>}/>
      <Route path="/buscar/:nombre" element={<Buscados/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
