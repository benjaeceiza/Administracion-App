import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react"



const Alquileres = () => {

    const[inquilinos,setInquilinos] = useState();

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, "inquilinos")
        getDocs(itemCollection).then(Snapshot => {
    
            if (Snapshot.size > 0) {
    
                setInquilinos(Snapshot.docs.map(documento => ({ id: documento.id, ...documento.data() })));
    
            } else {
                console.error("error")
            }
        })
    
    
    
    
    }, [])

    return (
        <>
         <div className="container">
            <div className="column">
                {inquilinos.map( e => (
                    <div className="col">
                        <div className="alquiler-al-dia my-5">
                            <p>{e.nombre} {e.apellido}</p>
                        </div>
                    </div>
                ))}
            </div>
         </div>

        </>
    )
}

export default Alquileres