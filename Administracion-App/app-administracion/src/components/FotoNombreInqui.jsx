
import foto from "../assets/imagen-inqui.png"
const FotoNombreInqui = ({ inquilino }) => {

  return (
    <>

      <div key={inquilino.id} className="ancho mg tamano">
        <img src={foto} alt="" />
        <div className="nombre fondo-nombre-inqui">
          <p className="my-3 nombre"> {inquilino.apellido} {inquilino.nombre}</p>
        </div>
      </div>


    </>
  )
}

export default FotoNombreInqui