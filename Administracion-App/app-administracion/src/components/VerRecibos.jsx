import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Cargando from "./Cargando"
import Recibo from "./Recibo"

const VerRecibos = () => {

    const [recibos, setRecibos] = useState([])
    const [cargando, setCargando] = useState([])

    useEffect(() => {

        const db = getFirestore();
        const itemCollection = collection(db, "recibos")

        getDocs(itemCollection).then(Snapshot => {

            if (Snapshot.size > 0) {

                setRecibos(Snapshot.docs.map(documento => ({ id: documento.id, ...documento.data() })));
                setCargando(false)
            } else {
                console.error("error")
            }
        })

    }, [])

    return (
        <>
            {cargando ? <Cargando /> : <div className="container">
                <div className="text-end">
                    <Link to={"/recibos"}><button className="btn btn-primary my-3">Hacer Recibo</button></Link>
                    <Link to={"/recibos/verrecibos"}><button className="btn btn-primary my-3">Ver Recibos</button></Link>
                </div>
                <div className="column">
                    <Recibo recibos={recibos}/>
                </div>
            </div>}
        </>
    )
}

export default VerRecibos