

import logo from "../assets/logo.jpg"
import { NavLink } from "react-router-dom"

const Navbar = () => {
 
    

    return (

        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink to={"/"} className="navbar-brand" href="#"><img className="logo" src={logo} alt="Logo"/></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <NavLink to={"/propietarios"} className="nav-link text-white" href="#">Propietarios/Inq</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" href="#">Reclamos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  className="nav-link text-white" href="#">Alquiler</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" href="#">Notas</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar;