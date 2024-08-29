import { Link } from "react-router-dom"

const BotonAgregar = () =>{

  return(
   <>
    <div className="contenedor-botones my-5 text-center">

        <Link to ={"/agregar/propietario"} ><button className="btn btn-primary">Agregar</button></Link>
     
    </div>
   </>

  )

}


export default BotonAgregar