
import { useNavigate } from "react-router-dom"
import imagenEditar from "../assets/boton-editar.png"

const Datos = ({ datos,id }) => {
 
    const navigate = useNavigate()
  
    const editar = () =>{

        navigate("/editar/"+id)
    }

    return (
        <>
            <div key={datos.id + 100} className="container contenedor-datos">
                <div className=" text-end ">
                    <img onClick={() => editar()} className="text-end" height={24} src={imagenEditar} alt="editar" />
                </div>
                <div className="row">
                    <div className="col">
                        <div className="contenedor-label-parrafo">
                            <label className="label-datos">Telefono:</label>
                            <p>{datos.telefono}</p>
                        </div>
                        <div className="contenedor-label-parrafo">
                            <label className="label-datos">Email:</label>
                            <p>{datos.email}</p>
                        </div>
                        <div className="contenedor-label-parrafo">
                            <label className="label-datos">DNI/CUIT/CUIL</label>
                            <p>{datos.cuit}</p>
                        </div>

                        <div className="contenedor-label-parrafo">
                            <label className="label-datos">Alias o CBU:</label>
                            <p>{datos.cbu}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}

export default Datos;