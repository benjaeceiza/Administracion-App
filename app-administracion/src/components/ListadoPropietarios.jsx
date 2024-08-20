import Propietarios from "./Propietarios";
import BotonAgregar from "./BotonAgregar";
import { collection, getDocs, getFirestore} from "firebase/firestore";
import { useEffect, useState } from "react";


const ListadoPropietarios = () => {

    const [propietario,setPropietario] = useState([]);
   
    useEffect(() =>{
   
        const db = getFirestore();
        const itemCollection = collection(db,"propietarios");
       
    
        getDocs(itemCollection).then(Snapshot =>{
          
          if(Snapshot.size > 0){
            
            setPropietario(Snapshot.docs.map(documento => ({id:documento.id,...documento.data()})));
            // setCargando(false)
          }else{
            console.error("error")
          }
        })
    
    
      },[])
      


    return (
        <>
           <div className="container my-5">
            <BotonAgregar/>
            <div className="contenedor-propietarios text-center ">
             <Propietarios propietario={propietario}/>
            </div>
           </div>
        </>
    )
}

export default ListadoPropietarios;