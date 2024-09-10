
import { useState } from "react";
import imagenEditar from "../assets/boton-editar.png"
import Editar from "./Editar";
import { useContext } from "react";
import { Context } from "./contexto/Context";


const Datos = ({ datos }) => {

    const { editarTelefono, setEditarTelefono, editarEmail, setEditarEmail,
        editarCuit, setEditarCuit, editarCbu, setEditarCbu
    } = useContext(Context);


    return (
        <>
            <div key={datos.id + 100} className="container contenedor-datos">
                <div className="row">
                    <div className="col">
                        <label className="label-datos">Telefono:</label>
                        {editarTelefono ? <Editar tipo="Telefono" idProp={datos.id}></Editar> : <div className="contenedor-label-parrafo">
                            <p>{datos.telefono}</p>
                            <img onClick={() => setEditarTelefono(true)} height={24} src={imagenEditar} alt="editar" />
                        </div>}

                        <label className="label-datos">Email:</label>
                        {editarEmail ? <Editar tipo="Email" idProp={datos.id}></Editar> : <div className="contenedor-label-parrafo">
                            <p>{datos.email}</p>
                            <img onClick={() => setEditarEmail(true)} height={24} src={imagenEditar} alt="editar" />
                        </div>}

                        <label className="label-datos">DNI/CUIT/CUIL</label>
                        {editarCuit ? <Editar tipo="DNI/CUIT/CUIL" idProp={datos.id}></Editar> : <div className="contenedor-label-parrafo">
                            <p>{datos.cuit}</p>
                            <img onClick={() => setEditarCuit(true)} height={24} src={imagenEditar} alt="editar" />
                        </div>}

                        <label className="label-datos">Alias o CBU:</label>
                        {editarCbu ? <Editar tipo="Alias/CBU" idProp={datos.id}></Editar> : <div className="contenedor-label-parrafo">
                            <p>{datos.cbu}</p>
                            <img onClick={() => setEditarCbu(true)} height={24} src={imagenEditar} alt="editar" />
                        </div>}
                    </div>
                </div>
            </div>
        </>

    )

}

export default Datos;