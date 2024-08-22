
import { Link } from "react-router-dom"
import { collection, getDocs, getFirestore} from "firebase/firestore";
import { useEffect, useState } from "react";
import imagenUsuario from "../assets/usuario.png"


   const inquilinos = (id) => {

    const [inquilino,setInquilino] = useState([])
   
  

    useEffect(() =>{
   
      const db = getFirestore();
      const itemCollection = collection(db,"propietarios",id.idPropietario,"inquilinos");

     
     
  
      getDocs(itemCollection).then(Snapshot =>{
        
        if(Snapshot.size > 0){
          
          setInquilino(Snapshot.docs.map(documento => ({id:documento.id,...documento.data()})));
          // setCargando(false)
        }else{
          console.error("error")
        }
      })
  
  
    },[])

   
    

    return(

         <>
          <h1>inquilinos</h1>
          
          {inquilino.map(inquilino => (
            <div key={inquilino.id} className="col mt-5">
                <Link to = {"/inquilino/" + id.idPropietario + "/" + inquilino.id}><img src={imagenUsuario} alt={inquilino.nombre} /></Link>
                <p className="my-4">{inquilino.nombre} {inquilino.apellido}</p>
            </div>
          ))}
         </>
    )
   }

   export default inquilinos