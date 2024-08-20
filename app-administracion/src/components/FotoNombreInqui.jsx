
import foto from "../assets/usuario.png"
const FotoNombreInqui = ({inquilino}) =>{

    return(
      <>
        
          {inquilino.map(e =>(
           <div key={e.id} className="contenedor-foto-nombre">
           <img src={foto} alt="" />
           <p className="my-3">{e.nombre} {e.apellido}</p>
          </div>

          ))}
      </>
    )
}

export default FotoNombreInqui