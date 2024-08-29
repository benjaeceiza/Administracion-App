
import foto from "../assets/usuario.png"
const FotoNombreInqui = ({inquilino}) =>{

    return(
      <>
        
          
           <div key={inquilino.id} className="contenedor-foto-nombre">
           <img src={foto} alt="" />
           <p className="my-3"> {inquilino.apellido} {inquilino.nombre}</p>
          </div>

        
      </>
    )
}

export default FotoNombreInqui