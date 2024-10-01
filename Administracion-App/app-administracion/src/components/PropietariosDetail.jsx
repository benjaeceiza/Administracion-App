import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Datos from "./Datos";
import FotoNombreProp from "./FotoNombreProp"
import Inquilinos from "./Inquilinos"
import BotonEliminar from "./BotonEliminar";
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import Cargando from "./Cargando"
import Propiedades from "./Propiedades";
import BotonAgregarInqui from "./BotonAgregarInqui";
import BotonAgregarCasa from "./BotonAgregarCasa";




const PropietariosDetail = () => {

    const { id } = useParams();
    const [propietario, setPropietarios] = useState([]);
    const [cargador, setCargador] = useState(true);
    const [inquilinos, setInquilinos] = useState([])
    const [inquilinosAgrupado, setInquilinosAgrupado] = useState([])
    const [imagen, setImagen] = useState();





    useEffect(() => {

        const db = getFirestore();
        const docRef = doc(db, "propietarios", id);
        const docRef2 = collection(db, "inquilinos")

        getDoc(docRef).then(snapShot => {
            if (snapShot.exists()) {

                setPropietarios({ id: snapShot.id, ...snapShot.data() });
                setCargador(false)

            } else {
                console.error("error")
            }

        })


        getDocs(docRef2).then(Snapshot => {

            if (Snapshot.size > 0) {

                setInquilinos(Snapshot.docs.map(documento => ({ id: documento.id, ...documento.data() })));
            } else {
                console.error("error")
            }
        })



    }, [id])

    setTimeout(() => {
        setInquilinosAgrupado(inquilinos.filter(e => e.idprop == id));

    }, 2000)

    return (
        <>
            {cargador ? <Cargando /> :
                <div className=" contenedor-propietario-detail">
                    <BotonEliminar propietario={id} inquilinos={inquilinosAgrupado} />
                    <div className="contenedor-datos-fotonombre">
                        <div className="col my-5">
                            <div className="contenedor-boton-avatar">
                                <img className="cambiar-avatar my-3" height={20} src="/src/assets/boton-editar.png" alt="" />
                            </div>
                            <FotoNombreProp propietario={propietario} imagen={imagen} />
                        </div>
                        <div className="col my-5">
                            <Datos datos={propietario} id={id} />
                        </div>
                    </div>
                    <div className="contenedor-propiedades-inquilinos">
                        <div className="col my-5">
                            <BotonAgregarCasa idPropietario={id} />
                            <Propiedades />
                        </div>
                        <div className="col my-5">
                            <BotonAgregarInqui idPropietario={id} />
                            <Inquilinos idPropietario={id} />
                        </div>
                    </div>

                </div>}

        </>
    )
}

export default PropietariosDetail