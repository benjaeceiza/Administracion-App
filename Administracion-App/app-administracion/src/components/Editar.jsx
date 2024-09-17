import { useEffect, useState } from "react"
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Editar = () => {

    const [propietario, setPropietario] = useState([]);
    const { id } = useParams()
    const navigate = useNavigate();
    let nombre = "";
    let apellido = "";
    let telefono = "";
    let email = "";
    let cbu = "";
    let cuit = "";



    const notifySucces = () => toast.success("Propietario Editado!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",

    })



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




    const control = () => {


        if (nombre == "") {

            nombre = propietario.nombre
        }

        if (apellido == "") {

            apellido = propietario.apellido
        }


        if (telefono == "") {
            telefono = propietario.telefono
        }
        if (email == "") {
            email = propietario.email
        }
        if (cuit == "") {
            cuit = propietario.cuit
        }
        if (cbu == "") {
            cbu = propietario.cbu

        }

        crear()





    }



    const crear = () => {

        const prop = {
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            email: email,
            cuit: cuit,
            cbu: cbu
        }



        const db = getFirestore();
        const docRef = doc(db, "propietarios", id)
        updateDoc(docRef, prop).then(
            notifySucces()
        )
        setTimeout(() => {
          navigate("/propietario/"+propietario.id)
        }, 1500)


    }




    return (
        <>
            <ToastContainer />
            <div className="container my-5">
                <div className="row text-center">
                    <div className="col">
                        <form className="">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control input-editar" placeholder={propietario.nombre} aria-label="Username" aria-describedby="basic-addon1" onInput={(e) => { nombre = (e.target.value) }} />
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control " placeholder={propietario.apellido} aria-label="Username" aria-describedby="basic-addon1" onInput={(e) => { apellido = (e.target.value) }} />
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control " placeholder={propietario.telefono} aria-label="Username" aria-describedby="basic-addon1" onInput={(e) => { telefono = (e.target.value) }} />
                            </div>
                            <div className="input-group mb-3">

                                <input type="text" className="form-control " placeholder={propietario.email} aria-label="Username" aria-describedby="basic-addon1" onInput={(e) => { email = (e.target.value) }} />
                            </div>
                            <div className="input-group mb-3">

                                <input type="text" className="form-control " placeholder={propietario.cuit} aria-label="Username" aria-describedby="basic-addon1" onInput={(e) => { cuit = (e.target.value) }} />
                            </div>
                            <div className="input-group mb-3">

                                <input type="text" className="form-control" placeholder={propietario.cbu} aria-label="Username" aria-describedby="basic-addon1" onInput={(e) => { cbu = (e.target.value) }} />
                            </div>
                        </form>
                        <button onClick={() => control()} className="btn btn-primary">OK</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Editar