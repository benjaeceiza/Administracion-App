import { useParams } from "react-router-dom";
import FormularioInquilino from "./FormularioInquilino";

  

  const AgregarInquilino = () =>{

    const { id } = useParams();
    
    

   return(
     
    <>
       <h1 className="text-center my-5">Agregar Inquilino</h1>
       <FormularioInquilino />
    </>
   )

  }

  export default AgregarInquilino;