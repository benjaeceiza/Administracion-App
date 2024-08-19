
import { useParams } from "react-router-dom"
import inquilinos from "../json/inquilinos.json"
import { useEffect, useState } from "react";
import BotonEliminar from "./BotonEliminar";
import FotoNombreProp from "./FotoNombreProp";
import DatosInquilinos from "./DatosInquilinos";



 const InquilinosDetail = () =>{

    const {id} = useParams();
    const [inquilino,setInquilino] = useState([]);

    useEffect(() =>{
     
   
        setInquilino(inquilinos.filter(elemento => elemento.id == id))
      

    },[id])
          
  
    
    return(
        <>
          <h1 className="text-center my-4">Inquilino</h1>
            <div className="container">
                <BotonEliminar />
                <div className="row text-center my-5 align-items-center ">
                    <div className="col">
                        <FotoNombreProp propietario={inquilino} />
                    </div>
                    <div className="col">
                        <h2>Datos</h2>
                        <DatosInquilinos datos={inquilino} />
                    </div>
                </div>
               

            </div>
        </>
    )

 }

 export default InquilinosDetail