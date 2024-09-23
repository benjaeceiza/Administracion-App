import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react"
import Cargando from "./Cargando"
import pendiente from "../assets/cerrar.png"
import { Link } from "react-router-dom";




const Alquileres = () => {

    const[inquilinos,setInquilinos] = useState([]);
    const[cargando,setCargando] = useState(true);
    const[filtros,setFiltros] = useState([]);

   


    useEffect(() => { 
        const db = getFirestore();
        const itemCollection = collection(db, "inquilinos")
        getDocs(itemCollection).then(Snapshot => {
    
            if (Snapshot.size > 0) {
                setInquilinos(Snapshot.docs.map(documento => ({ id: documento.id, ...documento.data() })));
            } else {
                console.error("error")
            }
        })
    
    }, []) 

   
       
        setTimeout(() =>{
            setFiltros(inquilinos.filter(e => e.alquiler == false))
            setCargando(false)
        },1)
        
    

    return (
        <>
         <div className="container">
            {cargando ? <Cargando/> :<div className="column">
                <div className="btn-pagado-nopagado text-end">
                <Link to={"/alquileres/aldia"}><button className="btn btn-primary my-5">Al dia</button></Link>
                <Link to={"/alquileres/pendientes"}><button className="btn btn-primary my-5">Pendientes</button></Link>
                </div>
                {filtros.map( e => (
                    <div key={e.id} className="col">
                        <div className="alquiler-no-al-dia my-5">
                            <p>{e.nombre} {e.apellido}</p>
                            <img src={pendiente} alt="" />
                        </div>
                    </div>
                ))}
            </div>}
         </div>

        </>
    )
}

export default Alquileres