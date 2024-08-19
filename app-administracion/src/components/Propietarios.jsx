
import arrayPropietarios from "../json/propietarios.json"
import imagenUsuario from "../assets/usuario.png"
import {Link} from "react-router-dom"


const Propietarios = ({propietario}) => {
    return (
        <>
            {propietario.map(propietario => (
                <div key={propietario.id} className="col-3 my-5 ancho">
                  <Link to={"/propietario/"+propietario.id}><img src={imagenUsuario} alt="" /></Link>
                  <p className="my-3">{propietario.nombre} {propietario.apellido}</p>
                </div>

            ))}

        </>
    )
}

export default Propietarios;