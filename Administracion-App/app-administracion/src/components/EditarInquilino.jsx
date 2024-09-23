import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import DatePicker, { registerLocale } from "react-datepicker";
import { es } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cargando from "./Cargando";


const EditarInquilino = () => {

    const { idInquilino } = useParams()
    const [inquilino, setInquilino] = useState([])
    const [cargador, setCargador] = useState(true)
    const [vigencia, setVigencia] = useState({ fecha: "" });
    const [vencimiento, setVencimineto] = useState({ fecha: "" });
    const navigate = useNavigate()

    let valorVencimiento = { fecha: "" }
    let valorVigencia = { fecha: "" }
    let nombre = "";
    let apellido = "";
    let telefono = "";
    let email = "";
    let dni = "";
    let direccion = "";
    let aumento = "";
    let monto = "";


    const notifySucces = () => toast.success("Inquilino Editado!", {
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
        const docRef = doc(db, "inquilinos", idInquilino)

        getDoc(docRef).then(snapShot => {
            if (snapShot.exists()) {

                setInquilino({ id: snapShot.id, ...snapShot.data() });
                setCargador(false)


            } else {
                console.error("error")
            }

        })


    }, [])




    registerLocale("es", es);

    const onChangeVigencia = (fecha) => {


        valorVigencia = { fecha: fecha }
        // setVigencia({ fecha: fecha })




    }

    const onChangeVencimiento = (fecha) => {

        valorVencimiento = { fecha: fecha }

        // setVencimineto({ fecha: fecha })

    }




    const control = () => {


        if (nombre == "") {

            nombre = inquilino.nombre
        }

        if (apellido == "") {

            apellido = inquilino.apellido
        }
        if (telefono == "") {
            telefono = inquilino.telefono
        }
        if (email == "") {
            email = inquilino.email
        }
        if (dni == "") {
            dni = inquilino.dni
        }
        if (direccion == "") {
            direccion = inquilino.direccion
        }
        if (aumento == "") {
            aumento = inquilino.aumento
        }
        if (valorVigencia.fecha == "") {

            valorVigencia.fecha = inquilino.vigencia.fecha

        }
        if (valorVencimiento.fecha == "") {
            valorVencimiento.fecha = inquilino.vencimiento.fecha
        }
        if (monto == "") {
            monto = inquilino.monto
        }

        crear()

    }

    const crear = () => {

        const inqui = {
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            email: email,
            dni: dni,
            direccion: direccion,
            aumento: aumento,
            vencimiento: valorVencimiento,
            vigencia: valorVigencia,
            monto: monto
        }



        const db = getFirestore();
        const docRef = doc(db, "inquilinos", idInquilino)
        updateDoc(docRef, inqui).then(
            notifySucces()
        )
        setTimeout(() => {
            navigate("/inquilino/" + inquilino.id)
        }, 1500)

        console.log(inqui)
        // console.log(inquilino.vencimiento.fecha.seconds)

    }





    return (
        <>
            <ToastContainer />
            {cargador ? <Cargando /> : <div className="container">
                <h1 className="text-center my-5">Editar Inquilino</h1>
                <form className="container" >
                    <div className="mb-3">
                        <label className="label-datos">Nombre:</label>
                        <input type="text" className="form-control " placeholder={inquilino.nombre} aria-label="Username" aria-describedby="basic-addon1" onInput={(e) => { nombre = (e.target.value) }} />
                    </div>

                    <div className="mb-3">
                        <label className="label-datos">Apellido:</label>
                        <input type="text" className="form-control " placeholder={inquilino.apellido} aria-label="Recipient's username" aria-describedby="basic-addon2" onInput={(e) => { apellido = (e.target.value) }} />

                    </div>
                    <div className="mb-3">
                        <label className="label-datos">Telefono:</label>
                        <input type="text" className="form-control " placeholder={inquilino.telefono} aria-label="Recipient's username" aria-describedby="basic-addon2" onInput={(e) => { telefono = (e.target.value) }} />

                    </div>
                    <div className=" mb-3">
                        <label className="label-datos">Email:</label>
                        <input type="text" className="form-control " placeholder={inquilino.email} aria-label="Recipient's username" aria-describedby="basic-addon2" onInput={(e) => { email = (e.target.value) }} />

                    </div>
                    <div className=" mb-3">
                        <label className="label-datos">Dni/Cuit/Cuil:</label>
                        <input type="text" className="form-control " placeholder={inquilino.dni} aria-label="Recipient's username" aria-describedby="basic-addon2" onInput={(e) => { dni = (e.target.value) }} />

                    </div>
                    <div className=" mb-3">
                        <label className="label-datos">Dirección:</label>
                        <input type="text" className="form-control " placeholder={inquilino.direccion} aria-label="Recipient's username" aria-describedby="basic-addon2" onInput={(e) => { direccion = (e.target.value) }} />

                    </div>
                    <div className="mb-3">
                        <label className="label-datos">Aumento:</label>
                        <input type="text" className="form-control " placeholder={inquilino.aumento} aria-label="Recipient's username" aria-describedby="basic-addon2" onInput={(e) => { aumento = (e.target.value) }} />

                    </div>
                    <div className="mb-3">
                        <label className="label-datos">Monto:</label>
                        <input type="text" className="form-control " placeholder={inquilino.monto} aria-label="Recipient's username" aria-describedby="basic-addon2" onInput={(e) => { monto = (e.target.value) }} />

                    </div>
                    <div className=" mb-3 contenedor-fecha-label">
                        <label htmlFor="" className="label-datos">Vigencia</label>
                        <DatePicker className="input-fecha" selected={vigencia.fecha} onChange={onChangeVigencia} locale={"es"} dateFormat={"dd-MM-yyyy"} />
                    </div>
                    <div className=" mb-3 contenedor-fecha-label">
                        <label htmlFor="" className="label-datos">Vencimiento</label>
                        <DatePicker className="input-fecha" selected={vencimiento.fecha} onChange={onChangeVencimiento} locale={"es"} dateFormat={"dd-MM-yyyy"} />
                    </div>

                </form>
                <button className="btn btn-primary centro boton-form" onClick={() => control()} >OK</button>
            </div>}
        </>
    )
}

export default EditarInquilino