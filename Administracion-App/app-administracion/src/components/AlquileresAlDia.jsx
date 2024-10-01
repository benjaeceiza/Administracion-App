import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react"
import Cargando from "./Cargando"
import alDia from "../assets/verificado.png"
import { Link} from "react-router-dom";


const AlquileresAlDia = () => {
    let fecha;
    let inquilinos;
    const[cargando,setCargando] = useState(true);
    const[filtros,setFiltros] = useState([]);
  

    useEffect(() => { 
        const db = getFirestore();
        const itemCollection = collection(db, "inquilinos")
        getDocs(itemCollection).then(Snapshot => {
    
            if (Snapshot.size > 0) {
    
                inquilinos = Snapshot.docs.map(documento => ({ id: documento.id, ...documento.data() }));
                setFiltros(inquilinos.filter(e => e.alquiler == true))
                setCargando(false)
               
    
            } else {
                console.error("error")
            }
        })
    
    }, []) 

  

   console.log(filtros)

    return (
        <>
         <div className="container">
            {cargando ? <Cargando/> :<div className="row">
                <div className="btn-pagado-nopagado text-end">
                   <Link to={"/alquileres/aldia"}><button className="btn btn-primary my-5">Al dia</button></Link>
                   <Link to={"/alquileres/pendientes"}><button className="btn btn-primary my-5">Pendientes</button></Link>
                </div>
                {filtros.map( e => (
                    <div key={e.id} className="col">
                        <div className="alquiler-al-dia my-5 text-center">
                            {/* <p>{fecha = new Intl.DateTimeFormat('es-ES',).format(e.fecha.fecha.seconds * 1000)}</p> */}
                            <p>{e.apellido} {e.nombre}</p>
                            <img src={alDia} alt="" />
                        </div>
                    </div>
                ))}
            </div>}
         </div>

        </>
    )
}

export default AlquileresAlDia;