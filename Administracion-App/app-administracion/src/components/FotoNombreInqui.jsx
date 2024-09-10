
import foto from "../assets/usuario.png"
const FotoNombreInqui = ({ inquilino }) => {

  return (
    <>

      <div key={inquilino.id} className="ancho mg">
        <img src={foto} alt="" />
        <div className="nombre fondo-nombre">
          <p className="my-3 nombre"> {inquilino.apellido} {inquilino.nombre}</p>
        </div>
      </div>


    </>
  )
}

export default FotoNombreInqui