
import { Link, useParams } from "react-router-dom"
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import imagenUsuario from "../assets/usuario.png"
import Cargando from "./Cargando";
import BotonAgregarInqui from "./BotonAgregarInqui";


const inquilinos = (id) => {


  const [inquilino, setInquilino] = useState([])
  const [arrayInquilinos, setArrayInquilinos] = useState([]);
  const [cargador, setCargador] = useState(true);

  useEffect(() => {

    const db = getFirestore();
    const itemCollection = collection(db, "inquilinos");




    getDocs(itemCollection).then(Snapshot => {

      if (Snapshot.size > 0) {

        setArrayInquilinos(Snapshot.docs.map(documento => ({ id: documento.id, ...documento.data() })));
        setCargador(false)
      } else {
        console.error("error")
      }
    })


  }, [])

  setTimeout(() => {

    setInquilino(arrayInquilinos.filter(e => e.idprop == id.idPropietario))

  }, 1000)





  return (

    <>

      {/* <div className="titulo-boton">
        <h1>inquilinos</h1>
        <BotonAgregarInqui idPropietario={id.idPropietario} />
      </div>
      {inquilino.map(inquilino => (
        <div key={inquilino.id} className="mg ancho">
          <Link to={"/inquilino/" + inquilino.id}><img src={imagenUsuario} alt={inquilino.nombre} /></Link>
          <div className=" nombre fondo-nombre">
          <p className=" my-3 nombre"> {inquilino.apellido} {inquilino.nombre} </p>
          </div>
        </div>))} */}

        <div className="contenedor-inqui">
          {
            inquilino.map(e => (
              <div className="img-nombre"> 
                <Link to={"/inquilino/" + e.id}><img height={100} src={imagenUsuario} alt="" /></Link>
                <p>{e.apellido} {e.nombre}</p>
              </div>
            ))
          }

        </div>

    </>
  )
}

export default inquilinos