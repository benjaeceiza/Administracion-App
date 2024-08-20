
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import BotonEliminar from "./BotonEliminar";
import FotoNombreInqui from "./FotoNombreInqui";
import DatosInquilinos from "./DatosInquilinos";
import {  getFirestore, collection, getDocs } from "firebase/firestore";



 const InquilinosDetail = () =>{

    const {id} = useParams();
    const [inquilino,setInquilino] = useState([]);
    console.log(id)

    useEffect(() =>{
        
        const db = getFirestore();
        const ItemCollection = collection(db,"propietarios",id,"inquilinos");
 
        getDocs(ItemCollection).then(Snapshot =>{
        
            if(Snapshot.size > 0){
              
              setInquilino(Snapshot.docs.map(documento => ({id:documento.id,...documento.data()})));
              // setCargando(false)
            }else{
              console.error("error")
            }
          })
        
     },[id])

       
    
    return(
        <>
          <h1 className="text-center my-4">Inquilino</h1>
            <div className="container">
                <BotonEliminar />
                <div className="row text-center my-5 align-items-center ">
                    <div className="col">
                        <FotoNombreInqui inquilino={inquilino} />
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