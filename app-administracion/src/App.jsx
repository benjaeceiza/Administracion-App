
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Inicio from "./components/Inicio"
import ListadoPropietarios from "./components/ListadoPropietarios"
import PropietariosDetail from "./components/PropietariosDetail"
import InquilinosDetail from "./components/InquilinosDetail"
import AgregarProp from "./components/AgregarProp"


function App() {


  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/propietarios" element={<ListadoPropietarios/>}/>
      <Route path="/propietario/:id" element={<PropietariosDetail/>}/>
      <Route path="/inquilino/:id/:idInquilino" element={<InquilinosDetail/>}/>
      <Route path="/agregar/:id" element={<AgregarProp/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
