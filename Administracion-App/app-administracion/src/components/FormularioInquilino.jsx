import { useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { es } from "date-fns/locale";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const FormularioInquilino = () => {

    const navigate = useNavigate()

    registerLocale("es", es);

    const { idInquilino } = useParams();
    const [nombreInqui, setNombreInqui] = useState("");
    const [apellidoInqui, setApellidoInqui] = useState("");
    const [telefonoInqui, setTelefonoInqui] = useState(0);
    const [emailInqui, setEmailInqui] = useState("");
    const [dniInqui, setDniInqui] = useState(0);
    const [direccionInqui, setDireccionInqui] = useState("");
    const [aumento, setAumento] = useState("");
    const [vigencia, setVigencia] = useState({ fecha: new Date() });
    const [vencimiento, setVencimineto] = useState({ fecha: new Date() });
    const formulario = useRef()
    const [error, setError] = useState(false);
    const [error2, setError2] = useState(false);
    const [error3, setError3] = useState(false);
    const [error4, setError4] = useState(false);
    const [error5, setError5] = useState(false);
    const [error6, setError6] = useState(false);
    const [error7, setError7] = useState(false);
    const [error8, setError8] = useState(false);
    const [error9, setError9] = useState(false);



    const notify = (texto) => toast.error(texto, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",

    });

    const notifySucces = () => toast.success("Inquilino Creado", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });




    const onChangeVigencia = (fecha) => {

        setVigencia({ fecha: fecha })
    }

    const onChangeVencimiento = (fecha) => {

        setVencimineto({ fecha: fecha })
    }






    const control = () => {
        if (nombreInqui == "") {
            const texto = "Ingrese un Nombre"
            notify(texto)
            setError(true)
        } else {
            if (apellidoInqui == "") {
                const texto = "Ingrese un Apellido"
                notify(texto)
                setError2(true)
            } else {
                if (telefonoInqui == "") {
                    const texto = "Ingrese un Telefono"
                    notify(texto)
                    setError3(true)
                } else {
                    if (isNaN(telefonoInqui)) {
                        const texto = "Ingrese un Valor Numerico"
                        notify(texto)
                        setError3(true)

                    } else {
                        if (emailInqui == "") {
                            const texto = "Ingrese un Email"
                            notify(texto)
                            setError4(true)
                        } else {
                            if (dniInqui == "") {
                                const texto = "Ingrese un DNI"
                                notify(texto)
                                setError5(true)
                            } else {
                                if (isNaN(dniInqui)) {
                                    const texto = "Ingrese un valor Numerico"
                                    notify(texto)
                                    setError5(true)
                                } else {
                                    if (direccionInqui == "") {
                                        const texto = "Ingrese una Dirección"
                                        notify(texto)
                                        setError6(true)
                                    } else {
                                        if (aumento == "") {
                                            const texto = "Ingrese el tipo de Aumento"
                                            notify(texto)
                                            setError7(true)
                                        } else {
                                            if (vigencia == "") {
                                                const texto = "Ingrese la Vigencia"
                                                notify(texto)
                                                setError8(true)
                                            } else {
                                                if (vencimiento == "") {
                                                    const texto = "Ingrese el Vencimiento"
                                                    notify(texto)
                                                    setError9(true)
                                                } else {

                                                    crearInquilino();

                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    const crearInquilino = () => {
        const inquilino = {
            nombre: nombreInqui,
            apellido: apellidoInqui,
            email: emailInqui,
            dni: dniInqui,
            direccion: direccionInqui,
            telefono: telefonoInqui,
            aumento: aumento,
            vigencia: vigencia,
            vencimiento: vencimiento,
            idprop: idInquilino

        }


        const db = getFirestore();
        const orderCollection = collection(db, "inquilinos");
        addDoc(orderCollection, inquilino).then(
           
            notifySucces()
            
        )
        formulario.current.reset()

        setApellidoInqui("")
        setAumento("")
        setNombreInqui("")
        setDireccionInqui("")
        setDniInqui("")
        setEmailInqui("")
        setTelefonoInqui("")
        setVencimineto({ fecha: new Date() })
        setVigencia({ fecha: new Date() })
        setTimeout(()=>{
            navigate("/propietario/"+ idInquilino)

        },1500)
    }



    return (

        <>
            <ToastContainer />
            <div className="continer">
                <form className="container" ref={formulario} >
                    <div className="input-group mb-3">

                        <input type="text" className={"form-control " + (error ? "validacion-error" : " ")} placeholder="Nombre" aria-label="Username" aria-describedby="basic-addon1" onInput={(e) => { setNombreInqui(e.target.value) }} />
                    </div>

                    <div className="input-group mb-3">
                        <input type="text"className={"form-control " + (error2 ? "validacion-error" : " ")} placeholder="Apellido" aria-label="Recipient's username" aria-describedby="basic-addon2" onInput={(e) => { setApellidoInqui(e.target.value) }} />

                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className={"form-control " + (error3 ? "validacion-error" : " ")} placeholder="Telefono" aria-label="Recipient's username" aria-describedby="basic-addon2" onInput={(e) => { setTelefonoInqui(e.target.value) }} />

                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className={"form-control " + (error4 ? "validacion-error" : " ")} placeholder="Correo Electronico" aria-label="Recipient's username" aria-describedby="basic-addon2" onInput={(e) => { setEmailInqui(e.target.value) }} />

                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className={"form-control " + (error5 ? "validacion-error" : " ")} placeholder="DNI" aria-label="Recipient's username" aria-describedby="basic-addon2" onInput={(e) => { setDniInqui(e.target.value) }} />

                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className={"form-control " + (error6 ? "validacion-error" : " ")} placeholder="Direccion del Inmbueble" aria-label="Recipient's username" aria-describedby="basic-addon2" onInput={(e) => { setDireccionInqui(e.target.value) }} />

                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className={"form-control " + (error7 ? "validacion-error" : " ")} placeholder="Aumento" aria-label="Recipient's username" aria-describedby="basic-addon2" onInput={(e) => { setAumento(e.target.value) }} />

                    </div>
                    <div className="input-group mb-3 contenedor-fecha-label">
                        <label htmlFor="" className="">Vigencia</label>
                        <DatePicker className="input-fecha" selected={vigencia.fecha} onChange={onChangeVigencia} locale={"es"} dateFormat={"dd-MM-yyyy"} />
                    </div>
                    <div className="input-group mb-3 contenedor-fecha-label">
                        <label htmlFor="">Venciimiento</label>
                        <DatePicker className="input-fecha" selected={vencimiento.fecha} onChange={onChangeVencimiento} locale={"es"} dateFormat={"dd-MM-yyyy"} />
                    </div>

                </form>

                <button className="btn btn-primary centro" onClick={control} >Agregar</button>
            </div>
        </>
    )

}

export default FormularioInquilino