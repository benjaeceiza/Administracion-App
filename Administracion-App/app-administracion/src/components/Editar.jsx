import { useContext, useEffect, useState } from "react"
import { Context } from "./contexto/Context"
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Propiedades from "./Propiedades";



const Editar = () => {

    const { setEditarTelefono, setEditarEmail, setEditarCuit, setEditarCbu } = useContext(Context);
    const [valor, setValor] = useState("");
    const [mostrarNombre, setMostrarNombre] = useState(true);
    const [mostrarApellido, setMostrarApellido] = useState(true);
    const [mostrarTelefono, setMostrarTelefono] = useState(true);
    const [mostrarEmail, setMostrarEmail] = useState(true);
    const [mostrarCuit, setMostrarCuit] = useState(true);
    const [mostrarCbu, setMostrarCbu] = useState(true);
    const [propietario, setPropietario] = useState([]);
    const { id } = useParams()
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [cuit, setCuit] = useState("")
    const [cbu, setCbu] = useState("")

    useEffect(() => {

        const db = getFirestore();
        const docRef = doc(db, "propietarios", id);

        getDoc(docRef).then(snapShot => {
            if (snapShot.exists()) {

                setPropietario({ id: snapShot.id, ...snapShot.data() });

            } else {
                console.error("error")
            }

        })

    }, [])

    const cambiar = (tipo) => {
        if (tipo == "nombre") {
            setMostrarNombre(false)
        } else {
            if (tipo == "apellido") {
                setMostrarApellido(false)
            } else {
                if (tipo == "telefono") {
                    setMostrarTelefono(false)
                } else {
                    if (tipo == "email") {
                        setMostrarEmail(false)
                    } else {
                        if (tipo == "cuit") {
                            setMostrarCuit(false)
                        } else {
                            if (tipo == "cbu") {
                                setMostrarCbu(false)
                            }
                        }
                    }
                }
            }
        }
    }

    const control = () => {
       
        if (nombre == "") {
          setNombre(propietario.nombre)
        }

        if (apellido == "") {
          setApellido(propietario.apellido)
        }
        if (telefono == "") {
            setTelefono(propietario.telefono)
        }
        if (email == "") {
            setEmail(propietario.email)
        }
        if (cuit == "") {
            setCuit(propietario.cuit)
        }
        if (cbu == "") {
            setCbu(propietario.cbu)
        }

        enviar();
    }

         

const enviar = () => {
    alert("entra")
    const db = getFirestore();
    const docRef = doc(db, "propietarios", id)
    updateDoc(docRef,{nombre:nombre,apellido:apellido,telefono:telefono,email:email,cuit:cuit,cbu:cbu})
}


return (
    <>
        <div className="container my-5">
            <div className="row text-center">
                <div className="col">
                    <div className="">
                        <div className="input-group mb-3">
                            {mostrarNombre ? <p onClick={() => cambiar("nombre")} className="form-control text-start">{propietario.nombre}</p> :
                                <input type="text" className="form-control " placeholder="Nombre" aria-label="Username" aria-describedby="basic-addon1" onInput={(e) => { setNombre(e.target.value) }} />}
                        </div>
                        <div className="input-group mb-3">
                            {mostrarApellido ? <p onClick={() => cambiar("apellido")} className="form-control text-start">{propietario.apellido}</p> :
                                <input type="text" className="form-control " placeholder="Apellido" aria-label="Username" aria-describedby="basic-addon1" onInput={(e) => { setApellido(e.target.value) }} />}
                        </div>
                        <div className="input-group mb-3">
                            {mostrarTelefono ? <p onClick={() => cambiar("telefono")} className="form-control text-start">{propietario.telefono}</p> :
                                <input type="text" className="form-control " placeholder="Telefono" aria-label="Username" aria-describedby="basic-addon1" onInput={(e) => { setTelefono(e.target.value) }} />}
                        </div>
                        <div className="input-group mb-3">
                            {mostrarEmail ? <p onClick={() => cambiar("email")} className="form-control text-start">{propietario.email}</p> :
                                <input type="text" className="form-control " placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" onInput={(e) => { setEmail(e.target.value) }} />}
                        </div>
                        <div className="input-group mb-3">
                            {mostrarCuit ? <p onClick={() => cambiar("cuit")} className="form-control text-start">{propietario.cuit}</p> :
                                <input type="text" className="form-control " placeholder="Dni/Cuit/Cuil" aria-label="Username" aria-describedby="basic-addon1" onInput={(e) => { setCuit(e.target.value) }} />}
                        </div>
                        <div className="input-group mb-3">
                            {mostrarCbu ? <p onClick={() => cambiar("cbu")} className="form-control text-start">{propietario.cbu}</p> :
                                <input type="text" className="form-control" placeholder="Alias/Cbu" aria-label="Username" aria-describedby="basic-addon1" onInput={(e) => { setCbu(e.target.value) }} />}
                        </div>
                    </div>
                    <button onClick={() => control()} className="btn btn-primary">OK</button>
                </div>
            </div>
        </div>
    </>
)
}

export default Editar