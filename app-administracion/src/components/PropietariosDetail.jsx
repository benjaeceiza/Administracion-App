import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import arraypropietarios from "../json/propietarios.json"
import Datos from "./Datos"
import FotoNombreProp from "./FotoNombreProp"
import Inquilinos from "./Inquilinos"
import BotonEliminar from "./BotonEliminar";


const PropietariosDetail = () => {

    const { id } = useParams();
    const [propietarios, setPropietarios] = useState(arraypropietarios);

    useEffect(() => {

        setPropietarios(arraypropietarios.filter(elemento => elemento.id == id))

    }, [id])



    return (
        <>
            <h1 className="text-center my-4">Propietario</h1>
            <div className="container">
                <BotonEliminar />
                <div className="row text-center my-5 align-items-center ">
                    <div className="col">
                        <FotoNombreProp propietario={propietarios} />
                    </div>
                    <div className="col">
                        <h2>Datos</h2>
                        <Datos datos={propietarios} />
                    </div>
                </div>
                <div className="row text-center">
                    <Inquilinos />
                </div>

            </div>

        </>
    )
}

export default PropietariosDetail