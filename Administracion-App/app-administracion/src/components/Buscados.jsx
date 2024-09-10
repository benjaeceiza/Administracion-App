import { collection, getDoc, getDocs, getFirestore } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Cargando from "./Cargando";
import imagenUsuario from "../assets/usuario.png"


const Buscados = () => {

    const { nombreBuscado } = useParams()
    const [arrayProp, setArrayProp] = useState([]);
    const [buscados, setBuscados] = useState([]);
    const [cargador, setCargador] = useState(true);
    const [existe,setExiste ] = useState(false);

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

                    }else{
                        setExiste(true)
                    } 
                }

            }
        }

       
    }, 1)

      setTimeout(() =>{
        
        setCargador(false)
      },1500)
   
      if(existe){

        return(
            <>
              {cargador?<Cargando/>:<h1 className="text-center my-5">No existe usuario</h1>}
            </>

        )

      }else{
        return (
            <>
                {cargador ? <Cargando /> :
                    <div>
                        <h1 className="text-center my-5">Resultados de: {nombreBuscado}</h1>
                        {buscados.map(e => (
                            <div key={e.id} className="mg ancho text-center">
                                <Link to={"/propietario/" + e.id}><img src={imagenUsuario} alt="" /></Link>
                                <div className="nombre fondo-nombre">
                                    <p className="my-3 nombre"> {e.apellido} {e.nombre}</p>
                                </div>
                            </div>
    
                        ))}
                    </div>}
            </>
    
        )
      }


  
}

export default Buscados;