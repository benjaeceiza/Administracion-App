
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

     
        <h1>inquilinos</h1>
        <BotonAgregarInqui idPropietario={id.idPropietario} />
          {inquilino.map(inquilino => (
            <div key={inquilino.id} className="col mt-5">
            <Link to={"/inquilino/" + inquilino.id}><img src={imagenUsuario} alt={inquilino.nombre} /></Link>
            <p className="my-4"> {inquilino.apellido} {inquilino.nombre} </p>
          </div>))}
      
    </>
  )
}

export default inquilinos