import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Datos from "./Datos"
import FotoNombreProp from "./FotoNombreProp"
import Inquilinos from "./Inquilinos"
import BotonEliminar from "./BotonEliminar";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Cargando from "./Cargando"
import BotonAgregarInqui from "./BotonAgregarInqui";


const PropietariosDetail = () => {

    const { id } = useParams();
    const [propietario, setPropietarios] = useState([]);
    const [cargador,setCargador] = useState(true)


    useEffect(() =>{
        
        const db = getFirestore();
        const docRef = doc(db,"propietarios",id);
 
        getDoc(docRef).then(snapShot =>{
          if(snapShot.exists()){
           
             setPropietarios({id:snapShot.id,...snapShot.data()});
             setCargador(false)
 
          }else{
             console.error("error")
          }
 
        })
        
     },[id])
        
        

    return (
        <>
            {cargador ? <Cargando/> : 
            <div className="container">
                <h1 className="text-center my-4">Propietario</h1>
                <BotonEliminar />
                <div className="row text-center my-5 align-items-center ">
                    <div className="col">
                        <FotoNombreProp propietario={propietario} />
                    </div>
                    <div className="col">
                        <h2>Datos</h2>
                        <Datos datos={propietario} />
                    </div>
                </div>
                <div className="row text-center">
                    
                    <Inquilinos idPropietario={id} />
                </div>

            </div>}

        </>
    )
}

export default PropietariosDetail