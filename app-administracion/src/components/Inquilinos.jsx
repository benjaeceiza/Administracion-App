
import { Link } from "react-router-dom"
import arrayInquilinos from "../json/inquilinos.json"


   const inquilinos = () => {

    return(

         <>
          <h1>inquilinos</h1>
          
          {arrayInquilinos.map(inquilino => (
            <div className="col mt-5">
                <Link to = {"/inquilino/" + inquilino.id}><img src={inquilino.imagen} alt={inquilino.nombre} /></Link>
                <p className="my-4">{inquilino.nombre}</p>
            </div>
          ))}
         </>
    )
   }

   export default inquilinos