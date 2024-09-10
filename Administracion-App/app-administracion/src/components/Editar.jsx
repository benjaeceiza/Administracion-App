import { useContext, useState } from "react"
import { Context } from "./contexto/Context"
import { doc, getFirestore, updateDoc } from "firebase/firestore";


const Editar = ({ tipo, idProp }) => {

    const { setEditarTelefono, setEditarEmail, setEditarCuit, setEditarCbu } = useContext(Context);
    const [valor, setValor] = useState("");




    const volver = () => {

        const db = getFirestore();
        const orderCollection = doc(db, "propietarios", idProp);

        if (tipo == "Telefono") {

            if (valor == "") {
                setEditarTelefono(false)
            } else {

                updateDoc(orderCollection, { telefono: valor })
                setEditarTelefono(false)
            }
        } else {
            if (tipo == "Email") {

                if (valor == "") {
                    setEditarEmail(false)
                } else {

                    updateDoc(orderCollection, { email: valor })
                    setEditarEmail(false)
                }
            } else {
                if (tipo == "DNI/CUIT/CUIL") {

                    if (valor == "") {
                        setEditarCuit(false)
                    } else {

                        updateDoc(orderCollection, { cuit: valor })
                        setEditarCuit(false)
                    }
                } else {
                    if (tipo == "Alias/CBU") {
                        if (valor == "") {
                            setEditarCbu(false)
                        } else {

                            updateDoc(orderCollection, { cbu: valor })
                            setEditarCbu(false)
                        }
                    }
                }
            }
        }
    }


    return (
        <>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder={tipo} aria-label="Username" aria-describedby="basic-addon1" onInput={(e) => { setValor(e.target.value) }} />
                <button onClick={() => volver()}>Ok</button>
            </div>
        </>
    )
}

export default Editar