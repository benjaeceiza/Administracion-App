import { useState } from "react"
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import Propietarios from "./Propietarios";


const FormularioProp = () => {

    const [nombreProp, setNombreProp] = useState("");
    const [apellidoProp, setApellidoProp] = useState("");
    const [emailProp, setEmailProp] = useState("");
    const [dniProp, setDniProp] = useState(0);
    const [cuitProp, setCuitProp] = useState(0);
    const [cbuProp, setCbuProp] = useState("");
    
    
     const control = () =>{
        if(nombreProp == ""){
            alert("Ingrese un nombre")
        }else{
            if(apellidoProp == ""){
                alert("ingrese un apellido")
            }else{
                if(emailProp == ""){
                    alert("Ingrese un email")
                }else{
                    if(dniProp == ""){
                        alert("ingrese un dni")
                    }else{
                        if(isNaN(dniProp)){
                            alert("Ingrese un valor numerico")
                        }else{
                            if(cuitProp == ""){

                                alert("Ingrese un CUIT/CUIL")
                            }else{
                                if(isNaN(cuitProp)){
                                    alert("Ingrese un valor numerico")
                                }else{
                                    if(cbuProp == ""){
                                        alert("Ingrese un cbu o Alias")
                                    }else{
                                        alert("propietario creado!")
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


    const crearPropietario = () =>{
        const propietario = {
           nombre: nombreProp,
           apellido:apellidoProp,
           email:emailProp,
           dni:dniProp,
           cuit:cuitProp,
           cbu:cbuProp
        }

        const db = getFirestore();
        const orderCollection = collection(db, "propietarios");
        addDoc(orderCollection, propietario).then(id => {
            
        })

        

    }





    return (
        <>
            <div className="container">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nombre" aria-label="Username" aria-describedby="basic-addon1" onInput={(e) => { setNombreProp(e.target.value) }} />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Apellido" aria-label="Username" aria-describedby="basic-addon1" onInput={(e) => { setApellidoProp(e.target.value) }} />
                </div>

                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon2" onInput={(e) => { setEmailProp(e.target.value) }} />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="DNI" aria-label="Recipient's username" aria-describedby="basic-addon2" onInput={(e) => { setDniProp(e.target.value) }} />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="CUIT/CUIL" aria-label="Recipient's username" aria-describedby="basic-addon2" onInput={(e) => { setCuitProp(e.target.value) }} />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Alias/CBU" aria-label="Recipient's username" aria-describedby="basic-addon2" onInput={(e) => { setCbuProp(e.target.value) }} />
                </div>
            <button className="btn btn-primary" onClick={control}>enviar</button>
            </div>
        </>
    )

}

export default FormularioProp