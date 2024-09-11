import { collection, deleteDoc, doc, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import tacho from "../assets/eliminar.png"
import CargandoInquilinos from "./CargandoInquilinos";


const Propiedades = () => {

    const [propiedades, setPropiedades] = useState([]);
    const [filtroPropiedades, setFiltroPropiedades] = useState([]);
    const { id } = useParams()
    const [cargador, setCargador] = useState(true);
    

    useEffect(() => {

        const db = getFirestore();
        const itemCollection = collection(db, "propiedades");


        getDocs(itemCollection).then(Snapshot => {

            if (Snapshot.size >= 0) {

                setPropiedades(Snapshot.docs.map(documento => ({ id: documento.id, ...documento.data() })));
                
            } else {
                console.error("error")
            }

           
        })
        
        
        
    }, [])
    

    const eliminarPropiedad = (idPropiedad) => {
        const db = getFirestore();
        const docRef = doc(db, "propiedades", idPropiedad);
        
        deleteDoc(docRef).then(
           
        )
        
    }


  
    
    setTimeout(() => {
      
        setFiltroPropiedades(propiedades.filter(e => e.idprop == id))
    }, 1)
    


    setTimeout(() => {
    
        setCargador(false)
    }, 1000)



    if (filtroPropiedades.length == 0) {

        return (
            <>
                {cargador ? <CargandoInquilinos /> : <div className="contenedor-propiedades text-center">
                    <h5 className="my-3"> SIN PROPIEDADES CARGADAS</h5>
                </div>}
            </>
        )
    } else {

        return (
            <>
                {cargador ? <CargandoInquilinos /> : <div className="contenedor-propiedades text-center">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Dirrección</th>
                                <th scope="col">N° Finca</th>
                                <th scope="col">N° Niz</th>
                                <th scope="col">N° Cta Gas</th>
                            </tr>
                        </thead>
                        <tbody>

                            {filtroPropiedades.map(e => (
                                <tr key={e.id}>
                                    <td>{e.direccion}</td>
                                    <td>{e.finca}</td>
                                    <td>{e.nix}</td>
                                    <td>{e.gas}</td>
                                    <td onClick={() => eliminarPropiedad(e.id)}><img height={20} src={tacho} alt="Eliminar" /></td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>}
            </>
        )
    }




}

export default Propiedades