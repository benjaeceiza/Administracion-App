import { Timestamp } from "firebase/firestore";
import { useState } from "react";


const DatosInquilinos = ({ datos }) => {

   let vigencia;
   let vencimiento
   
   let timestamp1 = (datos.vigencia.seconds*1000); 
   let timestamp2 = (datos.vencimiento.seconds*1000); 
  
    vigencia = new Intl.DateTimeFormat('es-ES', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(timestamp1);
    vencimiento = new Intl.DateTimeFormat('es-ES', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(timestamp2);
    
 





    return (
        <>
          
                <div  className="container contenedor-datos">
                    <div className="row">
                        <div className="col">
                            <label className="label-datos">Teléfono:</label>
                            <p>{datos.telefono}</p>
                            <label className="label-datos">Email:</label>
                            <p>{datos.email}</p>
                            <label className="label-datos">DNI:</label>
                            <p>{datos.dni}</p>
                            <label className="label-datos">Aumento:</label>
                            <p>{datos.aumento}</p>
                            <label className="label-datos">Vigencia:</label>
                            <p>{vigencia}</p>
                            <label className="label-datos">Vencimiento:</label>
                            <p>{vencimiento}</p>
                            <label className="label-datos">Dirección:</label>
                            <p>{datos.direccion}</p>
                        </div>
                    </div>
                </div>
       

        </>

    )

}

export default DatosInquilinos;