import { Link } from "react-router-dom";
import logoMas from "../assets/mas.png"

 const BotonAgregarCasa = ({idPropietario}) =>{

    return(
        <>
         <div className="contenedor-botones text-start">
     
             <Link to ={"/agregar/propiedad/" +idPropietario}><img height={25} src={logoMas} alt="agregar Propiedad" className="my-3 mouse" /></Link>
          
         </div>
        </>
     
       )

}

export default BotonAgregarCasa;