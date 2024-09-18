import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import imagen from "../assets/ajedrez (1).png"
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
            <Link key={e.id} to={"/inquilino/" + e.id} style={{textDecoration:"none"}}> <div  className="col-3 my-5 ancho opacidad tamano">
              <img src={imagen} alt={e.nombre} />
              <div className="fondo-nombre-inqui">
                <p className="my-3 nombre">{e.apellido} {e.nombre}</p>
              </div>
            </div></Link>
          ))}

        </div>
      </div>}


    </>
  )
}

export default ListadoIquilinos