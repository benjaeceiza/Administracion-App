import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import DatePicker, { registerLocale } from "react-datepicker";
import { es } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";


const EditarInquilino = () => {

    const { idInquilino } = useParams()
    const [inquilino, setInquilino] = useState([])
    const [vigencia, setVigencia] = useState({ fecha: "" });
    const [vencimiento, setVencimineto] = useState({ fecha: "" });


    useEffect(() => {

        const db = getFirestore();
        const docRef = doc(db, "inquilinos", idInquilino)

        getDoc(docRef).then(snapShot => {
            if (snapShot.exists()) {

                setInquilino({ id: snapShot.id, ...snapShot.data() });


            } else {
                console.error("error")
            }

        })


    }, [])




    registerLocale("es", es);

    const onChangeVigencia = (fecha) => {

        setVigencia({ fecha: fecha })
    }

    const onChangeVencimiento = (fecha) => {

        setVencimineto({ fecha: fecha })
    }





    return (
        <>
            <ToastContainer />
            <div className="container">
                <h1 className="text-center my-5">Editar Inquilino</h1>
                <form className="container" >
                    <div className="input-group mb-3">

                        <input type="text" className="form-control " placeholder={inquilino.nombre} aria-label="Username" aria-describedby="basic-addon1" onInput={(e) => { setNombreInqui(e.target.value) }} />
                    </div>

                    <div className="input-group mb-3">
                        <input type="text" className="form-control " placeholder={inquilino.apellido} aria-label="Recipient's username" aria-describedby="basic-addon2" onInput={(e) => { setApellidoInqui(e.target.value) }} />

                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control " placeholder={inquilino.telefono} aria-label="Recipient's username" aria-describedby="basic-addon2" onInput={(e) => { setTelefonoInqui(e.target.value) }} />

                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control " placeholder={inquilino.email} aria-label="Recipient's username" aria-describedby="basic-addon2" onInput={(e) => { setEmailInqui(e.target.value) }} />

                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control " placeholder={inquilino.dni} aria-label="Recipient's username" aria-describedby="basic-addon2" onInput={(e) => { setDniInqui(e.target.value) }} />

                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control " placeholder={inquilino.direccion} aria-label="Recipient's username" aria-describedby="basic-addon2" onInput={(e) => { setDireccionInqui(e.target.value) }} />

                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control " placeholder={inquilino.aumento} aria-label="Recipient's username" aria-describedby="basic-addon2" onInput={(e) => { setAumento(e.target.value) }} />

                    </div>
                    <div className="input-group mb-3 contenedor-fecha-label">
                        <label htmlFor="" className="">Vigencia</label>
                        <DatePicker className="input-fecha" selected={0} onChange={onChangeVigencia} locale={"es"} dateFormat={"dd-MM-yyyy"} />
                    </div>
                    <div className="input-group mb-3 contenedor-fecha-label">
                        <label htmlFor="">Vencimiento</label>
                        <DatePicker className="input-fecha" selected={0} onChange={onChangeVencimiento} locale={"es"} dateFormat={"dd-MM-yyyy"} />
                    </div>

                </form>
                <button className="btn btn-primary centro boton-form" onClick={() => alert("hola")} >Agregar</button>
            </div>
        </>
    )
}

export default EditarInquilino