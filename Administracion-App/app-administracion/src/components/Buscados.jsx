import { collection, getDoc, getDocs, getFirestore } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Cargando from "./Cargando";
import imagenUsuario from "../assets/usuario.png"


const Buscados = () => {

    const { nombreBuscado } = useParams()
    const [arrayProp, setArrayProp] = useState([]);
    const [arrayInqui, setArrayInqui] = useState([]);
    const [buscados, setBuscados] = useState([]);
    const [buscadosInqui, setBuscadosInqui] = useState([]);
    const [cargador, setCargador] = useState(true);
    const [existe, setExiste] = useState(false);
    const [existe2, setExiste2] = useState(false);

    useEffect(() => {

        setTimeout(() => {
            setBuscados([])
            setBuscadosInqui([])
        }, 1)

        const db = getFirestore();
        const itemCollection = collection(db, "propietarios");
        const itemCollection2 = collection(db, "inquilinos");


        getDocs(itemCollection).then(Snapshot => {

            if (Snapshot.size > 0) {

                setArrayProp(Snapshot.docs.map(documento => ({ id: documento.id, ...documento.data() })));

            } else {
                console.error("error")
            }
        })

        getDocs(itemCollection2).then(Snapshot => {

            if (Snapshot.size > 0) {

                setArrayInqui(Snapshot.docs.map(documento => ({ id: documento.id, ...documento.data() })));

            } else {
                console.error("error")
            }
        })

    }, [nombreBuscado])

    setTimeout(() => {

        if (arrayProp.some(e => (e.apellido + " " + e.nombre) == nombreBuscado)) {

            setBuscados(arrayProp.filter(e => (e.apellido + " " + e.nombre) == nombreBuscado))
            setExiste(false)
        } else {
            if (arrayProp.some(e => (e.nombre + " " + e.apellido) == nombreBuscado)) {

                setBuscados(arrayProp.filter(e => (e.nombre + " " + e.apellido) == nombreBuscado))
                setExiste(false)
            } else {
                if (arrayProp.some(e => e.apellido == nombreBuscado)) {

                    setBuscados(arrayProp.filter(e => e.apellido.toUpperCase() == nombreBuscado.toUpperCase()))
                    setExiste(false)

                } else {

                    if (arrayProp.some(e => e.nombre == nombreBuscado)) {

                        setBuscados(arrayProp.filter(e => e.nombre.toUpperCase() == nombreBuscado.toUpperCase()))
                        setExiste(false)

                    } else {
                        setExiste(true)
                    }
                }

            }
        }

        if (arrayInqui.some(e => (e.apellido + " " + e.nombre) == nombreBuscado)) {

            setBuscadosInqui(arrayInqui.filter(e => (e.apellido + " " + e.nombre) == nombreBuscado))
            setExiste2(false)
        } else {
            if (arrayInqui.some(e => (e.nombre + " " + e.apellido) == nombreBuscado)) {

                setBuscadosInqui(arrayInqui.filter(e => (e.nombre + " " + e.apellido) == nombreBuscado))
                setExiste2(false)
            } else {
                if (arrayInqui.some(e => e.apellido == nombreBuscado)) {

                    setBuscadosInqui(arrayInqui.filter(e => e.apellido.toUpperCase() == nombreBuscado.toUpperCase()))
                    setExiste2(false)

                } else {

                    if (arrayInqui.some(e => e.nombre == nombreBuscado)) {

                        setBuscadosInqui(arrayInqui.filter(e => e.nombre.toUpperCase() == nombreBuscado.toUpperCase()))
                        setExiste2(false)

                    } else {
                        setExiste2(true)

                    }
                }

            }
        }


    }, 1)

    setTimeout(() => {

        setCargador(false)
    }, 1500)

    if (existe && existe2) {

        return (
            <>
                {cargador ? <Cargando /> : <h1 className="text-center my-5">No existe usuario</h1>}
            </>

        )

    } else {
        return (
            <>
                {cargador ? <Cargando /> :
                    <div className="container">
                        <h1 className="text-center my-5">Resultados de: {nombreBuscado}</h1>
                        <div className="row">
                        <div className={existe ? "":"col my-5"}>
                                {buscados.map(e => (
                                    <div key={e.id} className="mg ancho text-center opacidad">
                                        <Link to={"/propietario/" + e.id}><img src={imagenUsuario} alt="" /></Link>
                                        <div className="nombre fondo-nombre">
                                            <p className="my-3 nombre"> {e.apellido} {e.nombre}</p>
                                        </div>
                                    </div>

                                ))}
                            </div>
                            <div className={existe2 ? "":"col my-5"}>
                                {buscadosInqui.map(e => (
                                    <div key={e.id} className="mg ancho text-center opacidad">
                                        <Link to={"/inquilino/" + e.id}><img src={imagenUsuario} alt="" /></Link>
                                        <div className="nombre fondo-nombre-inqui">
                                            <p className="my-3 nombre"> {e.apellido} {e.nombre}</p>
                                        </div>
                                    </div>

                                ))}

                            </div>
                        </div>

                    </div>}
            </>

        )
    }



}

export default Buscados;