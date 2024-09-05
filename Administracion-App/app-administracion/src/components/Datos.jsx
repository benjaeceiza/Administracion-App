
import { useState } from "react";
import imagenEditar from "../assets/boton-editar.png"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Datos = ({ datos }) => {
 
 let datoNuevo;    
    const editarTelefono = () =>{
    
        const datoEditar = Swal.fire({
          title: "Enter your IP address",
          input: "text",
          inputLabel: "Your IP address",
          inputValue:"",
          showCancelButton: true,
          inputValidator: ({inputValue}) => {
            if (!datoNuevo) {
              return "You need to write something!";
            }
          }
        });
        if (datoNuevo) {
          Swal.fire(`Your IP address is ${datoNuevo}`);
        }
        
        console.log(datoEditar)
    }

    return (
        <>
            <div key={datos.id + 100} className="container contenedor-datos">
                <div className="row">
                    <div className="col">
                        <label className="label-datos">Telefono:</label>
                        <div className="contenedor-label-parrafo">
                            <p>{datos.telefono}</p>
                            <img onClick={() => editarTelefono()} height={24} src={imagenEditar} alt="editar"/>
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