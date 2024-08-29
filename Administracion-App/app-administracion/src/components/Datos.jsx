
import imagenEditar from "../assets/boton-editar.png"

const Datos = ({ datos }) => {



    return (
        <>
            <div key={datos.id + 100} className="container contenedor-datos">
                <div className="row">
                    <div className="col">
                        <label className="label-datos">Telefono:</label>
                        <div className="contenedor-label-parrafo">
                            <p>{datos.telefono}</p>
                            <img height={24} src={imagenEditar} alt="" />
                        </div>
                        <label className="label-datos">Email:</label>
                        <div className="contenedor-label-parrafo">
                            <p>{datos.email}</p>
                            <img height={24} src={imagenEditar} alt="" />
                        </div>
                        <label className="label-datos">DNI/CUIT/CUIL</label>
                        <div className="contenedor-label-parrafo">
                            <p>{datos.cuit}</p>
                            <img height={24} src={imagenEditar} alt="" />
                        </div>
                        <label className="label-datos">Alias o CBU:</label>
                        <div className="contenedor-label-parrafo">
                            <p>{datos.cbu}</p>
                            <img height={24} src={imagenEditar} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}

export default Datos;