
import arrayPropietarios from "../json/propietarios.json"
import imagenUsuario from "../assets/usuario.png"
import {Link} from "react-router-dom"
import PropietariosDetail from "./PropietariosDetail"

const Propietarios = () => {
    return (
        <>
            {arrayPropietarios.map(propietario => (
                <div key={propietario.id} className="col-3 my-5">
                  <img src={imagenUsuario} alt="" />
                  <p>{propietario.nombre} {propietario.apellido}</p>
                </div>

            ))}

        </>
    )
}

export default Propietarios;