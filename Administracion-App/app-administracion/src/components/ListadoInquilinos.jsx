import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import imagen from "../assets/usuario.png"
import Cargando from "./Cargando"

const ListadoIquilinos = () => {

  const [inquilinos, setInquilinos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const array = [{

    id: "ze9LetekoDJxfZFzGu2R"
  }
  ]

  useEffect(() => {


    const db = getFirestore();
    array.map(e => {


      const itemCollection = collection(db, "inquilinos");

      getDocs(itemCollection).then(Snapshot => {

        if (Snapshot.size > 0) {

          setInquilinos(Snapshot.docs.map(documento => ({ id: documento.id, ...documento.data() })));
          setCargando(false)
        } else {
          console.error("error")
        }
      })
    })



  }, [])



  return (
    <>
      {cargando ? <Cargando /> : <div className="container my-5">
        <h1 className="my-5 text-center">Listado de Inquilinos</h1>
        <div className="contenedor-propietarios text-center ">
          {inquilinos.map(e => (
            <div key={e.id} className="col-3 my-5 ancho opacidad">
              <Link to={"/inquilino/" + e.id}><img src={imagen} alt={e.nombre} /></Link>
              <div className="fondo-nombre-inqui">
                <p className="my-3 nombre">{e.apellido} {e.nombre}</p>
              </div>

            </div>
          ))}

        </div>
      </div>}


    </>
  )
}

export default ListadoIquilinos