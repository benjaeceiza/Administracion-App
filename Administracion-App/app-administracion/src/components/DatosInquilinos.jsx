
import { useState } from "react";
import imagenEditar from "../assets/boton-editar.png"
import { Link } from "react-router-dom";


const DatosInquilinos = ({ datos }) => {

    let vigencia;
    let vencimiento

    const options = {  maximumFractionDigits: 2   }   
    const montoFormateado = Intl.NumberFormat("es-ES",options).format(datos.monto); 

    vigencia = new Intl.DateTimeFormat('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(datos.vigencia.fecha.seconds * 1000);
    vencimiento = new Intl.DateTimeFormat('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(datos.vencimiento.fecha.seconds * 1000);









    return (
        <>

            <div className="container contenedor-datos">
                <div className="text-end">
                   <Link to ={"/editar/inquilino/"+datos.id}> <img  height={24} src={imagenEditar} alt="" /></Link>
                </div>
                <div className="row">
                    <div className="col">
                        <label className="label-datos">Teléfono:</label>
                        <div className="contenedor-label-parrafo">
                            <p>{datos.telefono}</p>
                        </div>
                        <label className="label-datos">Email:</label>
                        <div className="contenedor-label-parrafo">
                            <p>{datos.email}</p>

                        </div>
                        <label className="label-datos">DNI:</label>
                        <div className="contenedor-label-parrafo">
                            <p>{datos.dni}</p>

                        </div>
                        <label className="label-datos">Aumento:</label>
                        <div className="contenedor-label-parrafo">
                            <p>{datos.aumento}</p>

                        </div>
                        <label className="label-datos">Vigencia:</label>
                        <div className="contenedor-label-parrafo">
                            <p>{vigencia}</p>

                        </div>
                        <label className="label-datos">Vencimiento:</label>
                        <div className="contenedor-label-parrafo">
                            <p>{vencimiento}</p>

                        </div>
                        <label className="label-datos">Dirección:</label>
                        <div className="contenedor-label-parrafo">
                            <p>{datos.direccion}</p>

                        </div>
                        <label className="label-datos">Monto:</label>
                        <div className="contenedor-label-parrafo">
                            <p>${montoFormateado}</p>

                        </div>
                    </div>
                </div>
            </div>


        </>

    )

}

export default DatosInquilinos;