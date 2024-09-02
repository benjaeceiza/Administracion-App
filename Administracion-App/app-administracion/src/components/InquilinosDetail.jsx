
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import FotoNombreInqui from "./FotoNombreInqui";
import DatosInquilinos from "./DatosInquilinos";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import Cargando from "./Cargando";
import BotonEliminarInquilino from "./BotonEliminarInquilino";


const InquilinosDetail = () => {

    const { idInquilino } = useParams();
    const [inquilino, setInquilino] = useState([]);
    const [cargador, setCargador] = useState(true)




    useEffect(() => {

        const db = getFirestore();
        const docRef = doc(db, "inquilinos", idInquilino);

        getDoc(docRef).then(snapShot => {
            if (snapShot.exists()) {

                setInquilino({ id: snapShot.id, ...snapShot.data() });
                setCargador(false)

            } else {
                console.error("error")
            }

        })

    }, [idInquilino])






    return (
        <>
            {cargador ? <Cargando /> :
                <div className="container">
                    <div className="titulo-boton">
                        <h1 className="text-center my-4">Inquilino</h1>
                        <BotonEliminarInquilino idprop={inquilino.idprop} />
                    </div>
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
            }
        </>
    )

}

export default InquilinosDetail