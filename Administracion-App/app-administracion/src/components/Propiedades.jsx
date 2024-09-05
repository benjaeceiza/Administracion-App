import { collection, deleteDoc, doc, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cargando from "./Cargando";
import tacho from "../assets/eliminar.png"


const Propiedades = () => {

    const [propiedades, setPropiedades] = useState([]);
    const [filtroPropiedades, setFiltroPropiedades] = useState([]);
    const { id } = useParams()
    const [cargador, setCargador] = useState(true);


    const eliminarPropiedad = (idPropiedad) =>{
    
            const db = getFirestore();
            const docRef = doc(db, "propiedades", idPropiedad)
    
            deleteDoc(docRef).then(
             

            )
    
           
        }
    



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


    }, [propiedades])


    setTimeout(() => {

            setFiltroPropiedades(propiedades.filter(e => e.idprop == id))
            setCargador(false)
    }, 1)



    if (filtroPropiedades.length == 0) {

        return (
            <div className="contenedor-propiedades text-center">
                <h3 className="my-3"> Sin Propiedades Cargadas</h3>
            </div>
        )
    }



    return (
        <>
            {cargador ? <Cargando /> : <div className="contenedor-propiedades text-center">
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

export default Propiedades