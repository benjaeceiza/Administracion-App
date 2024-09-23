
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import FotoNombreInqui from "./FotoNombreInqui";
import DatosInquilinos from "./DatosInquilinos";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import Cargando from "./Cargando";
import BotonEliminarInquilino from "./BotonEliminarInquilino";
import Aldia from "./Aldia";
import Pendiente from "./Pendiente";


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
                <div className="contenedor-propietarios-detail">
                        <BotonEliminarInquilino idprop={inquilino.idprop} />
                    <div className="contenedor-datos-fotonombre alinear">
                        <div className="col my-5">
                            <FotoNombreInqui inquilino={inquilino} />
                        </div>
                        <div className="col my-5">
                            <DatosInquilinos datos={inquilino} />
                        </div>
                    </div>
                    <div className="contenedor-propiedades-inquilinos">
                        {inquilino.alquiler ? <Aldia inquilino={inquilino}/> : <Pendiente inquilino={inquilino}/>}
                        <div className="col my-5">
                             <div className="pagos">
                                 <h3 className="text-center my-4">Recibos De inqulino</h3>
                             </div> 
                        </div>
                    </div>
                </div>
            }
        </>
    )

}

export default InquilinosDetail