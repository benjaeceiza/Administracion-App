
import { Link, useParams } from "react-router-dom"
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import imagenUsuario from "../assets/usuario.png"
import Cargando from "./Cargando";
import BotonAgregarInqui from "./BotonAgregarInqui";
import CargandoInquilinos from "./CargandoInquilinos";


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

      } else {
        console.error("error")
      }
    })


  }, [])

  setTimeout(() => {

    setInquilino(arrayInquilinos.filter(e => e.idprop == id.idPropietario))



  }, 1)
  setTimeout(() => {

    setCargador(false)


  }, 2000)


  if (inquilino.length == 0) {
    return (
      <>
        {cargador ? <CargandoInquilinos /> : <div className="contenedor-inqui">
          <h3 className="my-3">Sin Inquilinos</h3>
        </div>}
      </>
    )
  }



  return (

    <>

      {cargador ? <CargandoInquilinos /> :
        <div className="contenedor-inqui">
          {inquilino.map(e => (
          <div className="img-nombre" key={e.id} >
            <Link to={"/inquilino/" + e.id}><img height={100} src={imagenUsuario} alt="" /></Link>
            <p>{e.apellido}</p>
          </div>
          ))}
          </div>}


    </>
  )
}

export default inquilinos