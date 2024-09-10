

import logo from "../assets/logo.jpg"
import { NavLink, useNavigate } from "react-router-dom"
import menu from "../assets/menu.png"
import lupa from "../assets/lupa.png"
import { useState } from "react"
import { Navigate } from "react-router-dom"


const Navbar = () => {

    const [buscado, setBuscado] = useState("");
    const navigate = useNavigate()

    const buscar = () => {

        navigate("/buscar/" + buscado)
    }

    return (

        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                <div className="container-fluid  largo  bg-success ">

                    <NavLink to={"/"}><img className="logo" src={logo} alt="Logo" /></NavLink>
                    <button className="navbar-toggler border-white border-0 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className=""><img src={menu} alt="Boton Menu" /></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="d-flex my-3" role="search">
                        <input className="form-control me-2" type="search" placeholder="Buscar Persona" aria-label="Search" onInput={(e) => { setBuscado(e.target.value) }} />
                        <button onClick={() => buscar()} className="btn btn-outline-success border border-white" type="submit" ><img height={25} src={lupa} alt="Buscar" /></button>
                    </div>
                        <ul className="navbar-nav text-end">
                            <li className="nav-item">
                                <NavLink to={"/propietarios"} className="nav-link text-white" href="#">Propietarios</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/inquilinos"} className="nav-link text-white" href="#">Inquilinos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"#"} className="nav-link text-white" href="#">Alquileres</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"#"} className="nav-link text-white" href="#">Reclamos</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to={"#"} className="nav-link text-white" href="#">Notas</NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;