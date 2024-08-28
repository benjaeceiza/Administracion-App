

import imagenUsuario from "../assets/usuario.png"
import { Link } from "react-router-dom"


const Propietarios = ({ propietario }) => {
    return (
        <>
            {propietario.map(propietario => (
                <div key={propietario.id} className="col-3 my-5 ancho">
                    <Link to={"/propietario/" + propietario.id}><img src={imagenUsuario} alt="" /></Link>
                    <div className="nombre fondo-nombre">
                        <p className="my-3 nombre"> {propietario.apellido} {propietario.nombre}</p>
                    </div>
                </div>

            ))}

        </>
    )
}

export default Propietarios;