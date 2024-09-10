import Propietarios from "./Propietarios";
import BotonAgregar from "./BotonAgregar";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import Cargando from "./Cargando";


const ListadoPropietarios = () => {

  const [propietario, setPropietario] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {

    const db = getFirestore();
    const itemCollection = collection(db, "propietarios");


    getDocs(itemCollection).then(Snapshot => {

      if (Snapshot.size > 0) {

        setPropietario(Snapshot.docs.map(documento => ({ id: documento.id, ...documento.data() })));
        setCargando(false)
      } else {
        console.error("error")
      }
    })


  }, [])



  return (
    <>{cargando ? <Cargando /> :
      <div className="container my-5">
        <div className="titulo-boton">
        <h1 className="text-center">Listado de Propietarios</h1>
        <BotonAgregar />
        </div>
        <div className="contenedor-propietarios text-center">
          <Propietarios propietario={propietario} />
        </div>
      </div>
    }
    </>
  )
}

export default ListadoPropietarios;