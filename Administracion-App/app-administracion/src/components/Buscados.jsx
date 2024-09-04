import { collection, getDoc, getDocs, getFirestore } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Cargando from "./Cargando";


const Buscados = () => {

    const { nombre } = useParams()
    const [arrayProp, setArrayProp] = useState([]);
    const [buscados, setBuscados] = useState([]);
    const [cargador, setCargador] = useState(true);

    useEffect(() => {

        const db = getFirestore();

        const itemCollection = collection(db, "propietarios");

        getDocs(itemCollection).then(Snapshot => {

            if (Snapshot.size > 0) {

                setArrayProp(Snapshot.docs.map(documento => ({ id: documento.id, ...documento.data() })));

            } else {
                console.error("error")
            }
        })

    }, [])

    setTimeout(() => {

        setBuscados(arrayProp.filter(e => e.apellido == nombre))
        setCargador(false)
    }, 1)

    if (buscados.length == 0) {
        return (
            <h1 className="text-center my-5">Ese usuariono existe</h1>
        )
    }

    return (
        <>
            {cargador ? <Cargando /> :
                <div>
                    <h1>buscar {nombre}</h1>
                    {buscados.map(e => {
                       
                     
                    })}
                </div>}
        </>

    )
}

export default Buscados;