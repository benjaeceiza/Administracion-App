
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Inicio from "./components/Inicio"
import ListadoPropietarios from "./components/ListadoPropietarios"
import PropietariosDetail from "./components/PropietariosDetail"
import InquilinosDetail from "./components/InquilinosDetail"


function App() {


  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/propietarios" element={<ListadoPropietarios/>}/>
      <Route path="/propietario/:id" element={<PropietariosDetail/>}/>
      <Route path="/inquilino/:id" element={<InquilinosDetail/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
