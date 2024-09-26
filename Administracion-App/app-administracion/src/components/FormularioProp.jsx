import { useRef, useState } from "react"
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";



const FormularioProp = () => {
    const navigate = useNavigate();
    const [nombreProp, setNombreProp] = useState("");
    const [apellidoProp, setApellidoProp] = useState("");
    const [telefonoProp, setTelefonoPropo] = useState(0);
    const [emailProp, setEmailProp] = useState("");
    const [cuitProp, setCuitProp] = useState(0);
    const [cbuProp, setCbuProp] = useState("");
    const [error, setError] = useState(false)
    const [error2, setError2] = useState(false)
    const [error3, setError3] = useState(false)
    const [error4, setError4] = useState(false)
    const [error5, setError5] = useState(false)
    const [error6, setError6] = useState(false)
    const formulario = useRef()

    const crearPropietario = () => {

        const propietario = {
            nombre: nombreProp,
            apellido: apellidoProp,
            email: emailProp,
            cuit: cuitProp,
            cbu: cbuProp,
            telefono: telefonoProp
        }


        const db = getFirestore();
        const orderCollection = collection(db, "propietarios");
        addDoc(orderCollection, propietario).then(

            notifySucces()

        )

        formulario.current.reset();

        setApellidoProp("");
        setNombreProp("");
        setEmailProp("");
        setTelefonoPropo("");
        setCbuProp("");
        setCuitProp("");
        setTimeout(() => {

            navigate("/propietarios")
        }, 1500)
    }

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

    const notifySucces = () => toast.success("Propietario Creado", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",

    })





    const control = () => {
        if (nombreProp == "") {
            const texto = "Ingresa un Nombre"
            notify(texto);
            setError(true)

        } else {
            if (apellidoProp == "") {
                const texto = "Ingresa un Apellido"
                notify(texto);
                setError2(true)

            } else {
                if (telefonoProp == "") {
                    const texto = "Ingresa un Telefono"
                    notify(texto);
                    setError3(true)
                } else {
                    if (isNaN(telefonoProp)) {
                        const texto = "Ingresa un valor Numerico"
                        notify(texto);
                        setError3(true)
                    } else {
                        if (emailProp == "") {
                            const texto = "Ingresa un Email"
                            notify(texto);
                            setError4(true)
                        } else {
                            if (cuitProp == "") {
                                const texto = "Ingresa un DNI, CUIL ó CUIT"
                                notify(texto);
                                setError5(true)
                            } else {
                                if (isNaN(cuitProp)) {
                                    const texto = "Ingresa un valor Numerico"
                                    notify(texto);
                                    setError5(true)
                                } else {
                                    if (cbuProp == "") {
                                        const texto = "Ingresa un CBU o Alias"
                                        notify(texto);
                                        setError6(true)
                                    } else {

                                        crearPropietario();


                                    }
                                }
                            }


                        }
                    }

                }
            }

        }




    }

    return (
        <>
            <ToastContainer />
            <div className="container formulario">
                <form className="container" ref={formulario}>
                    <div className="mb-3">
                        <label className="label-datos">Nombre</label>
                        <input type="text" className={"form-control " + (error ? "validacion-error" : " ")} placeholder="Nombre" aria-label="Username" aria-describedby="basic-addon1" onInput={(e) => { setNombreProp(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label className="label-datos">Apellido</label>
                        <input type="text" className={"form-control " + (error2 ? "validacion-error" : " ")} placeholder="Apellido" aria-label="Username" aria-describedby="basic-addon1" onInput={(e) => { setApellidoProp(e.target.value) }} />
                    </div>

                    <div className="mb-3">
                        <label className="label-datos">Telefono</label>
                        <input type="text" className={"form-control " + (error3 ? "validacion-error" : " ")} placeholder="Telefono" aria-label="Recipient's username" aria-describedby="basic-addon2" onInput={(e) => { setTelefonoPropo(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label className="label-datos">Email</label>
                        <input type="text" className={"form-control " + (error4 ? "validacion-error" : " ")} placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon2" onInput={(e) => { setEmailProp(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label className="label-datos">Dni/Cuit/Cuil</label>
                        <input type="text" className={"form-control " + (error5 ? "validacion-error" : " ")} placeholder="DNI/CUIT/CUIL" aria-label="Recipient's username" aria-describedby="basic-addon2" onInput={(e) => { setCuitProp(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label className="label-datos">Alias/Cbu</label>
                        <input type="text" className={"form-control " + (error6 ? "validacion-error" : " ")} placeholder="Alias/CBU" aria-label="Recipient's username" aria-describedby="basic-addon2" onInput={(e) => { setCbuProp(e.target.value) }} />
                    </div>
                </form>
                <div className="text-center">
                    <button className="btn btn-primary" onClick={control} >Agregar</button>
                </div>
            </div>
        </>
    )

}

export default FormularioProp