
import { useState } from "react";
import imagenEditar from "../assets/boton-editar.png"


const DatosInquilinos = ({ datos }) => {

    let vigencia;
    let vencimiento
    

    
    vigencia = new Intl.DateTimeFormat('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(datos.vigencia.fecha.seconds * 1000);
    vencimiento = new Intl.DateTimeFormat('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(datos.vencimiento.fecha.seconds * 1000);

 



  



    return (
        <>

            <div className="container contenedor-datos">
                <div className="row">
                    <div className="col">
                        <label className="label-datos">Teléfono:</label>
                        <div className="contenedor-label-parrafo">
                            <p>{datos.telefono}</p>
                            <img onClick={()=> alert("editar")} height={24} src={imagenEditar} alt="" />
                        </div>
                        <label className="label-datos">Email:</label>
                        <div className="contenedor-label-parrafo">
                            <p>{datos.email}</p>
                            <img height={24} src={imagenEditar} alt="" />
                        </div>
                        <label className="label-datos">DNI:</label>
                        <div className="contenedor-label-parrafo">
                            <p>{datos.dni}</p>
                            <img height={24} src={imagenEditar} alt="" />
                        </div>
                        <label className="label-datos">Aumento:</label>
                        <div className="contenedor-label-parrafo">
                            <p>{datos.aumento}</p>
                            <img height={24} src={imagenEditar} alt="" />
                        </div>
                        <label className="label-datos">Vigencia:</label>
                        <div className="contenedor-label-parrafo">
                            <p>{vigencia}</p>
                            <img height={24} src={imagenEditar} alt="" />
                        </div>
                        <label className="label-datos">Vencimiento:</label>
                        <div className="contenedor-label-parrafo">
                            <p>{vencimiento}</p>
                            <img height={24} src={imagenEditar} alt="" />
                        </div>
                        <label className="label-datos">Dirección:</label>
                        <div className="contenedor-label-parrafo">
                            <p>{datos.direccion}</p>
                            <img height={24} src={imagenEditar} alt="" />
                        </div>
                    </div>
                </div>
            </div>


        </>

    )

}

export default DatosInquilinos;