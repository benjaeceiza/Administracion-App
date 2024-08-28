import { Link, useParams } from "react-router-dom";


const BotonAgregarInqui = (id) =>{


    return(
        <>
         <div className="contenedor-botones my-5 text-end">
     
             <Link to ={"/agregar/inquilino/" + id.idPropietario} ><button className="btn btn-primary">Agregar</button></Link>
          
         </div>
        </>
     
       )

}

export default BotonAgregarInqui;