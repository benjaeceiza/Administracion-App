import ListadoPropietarios from "./components/ListadoPropietarios"
import Inicio from "./components/Inicio"
import Navbar from "./components/Navbar"
import {BrowserRouter,Route,Routes} from "react-router-dom"

function App() {


  return (
    <>
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/propietarios" element={<ListadoPropietarios/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
