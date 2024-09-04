import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { useParams } from "react-router-dom";


const FormularioCasa = () => {

    const { idPropietario } = useParams();
    const [direccion,setDireccion] = useState();
    const [finca,setFinca] = useState();
    const [niz,setNiz] = useState();
    const [gas,setGas] = useState();

    const control = () =>{
    
        if(direccion == ""){
            alert("ingrese una direccion")
        }

      crearPropiedad();
    }

const crearPropiedad = () =>{
   
    const propiedad = {
       direccion:direccion,
       finca:finca,
       nix:niz,
       gas:gas,
       idprop:idPropietario 
    }

    const db = getFirestore();
    const orderCollection = collection(db, "propiedades");
    addDoc(orderCollection, propiedad).then(
         
    )
}

    return (

        <>
            <div className="container">
                <h1 className="text-center my-5">Agregar Propiedad</h1>
                <form action="" className="container">
                    <div className="input-group mb-3">
                        <input type="text" className={"form-control"} placeholder="Dirección" aria-label="Username" aria-describedby="basic-addon1" onInput={(e) => { setDireccion(e.target.value) }} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className={"form-control"} placeholder="Número Finca" aria-label="Username" aria-describedby="basic-addon1" onInput={(e) => { setFinca(e.target.value) }} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className={"form-control"} placeholder="Número Niz" aria-label="Username" aria-describedby="basic-addon1" onInput={(e) => { setNiz(e.target.value) }} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className={"form-control"} placeholder="Número Cuenta Gas" aria-label="Username" aria-describedby="basic-addon1" onInput={(e) => { setGas(e.target.value) }} />
                    </div>
                </form>
                 <button className="btn btn-primary centro" onClick={control}>Agregar</button>
            </div>
        </>
    )
}

export default FormularioCasa;