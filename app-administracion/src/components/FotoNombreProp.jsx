import foto from "../assets/usuario.png"

const FotoNombreProp = ({propietario}) => {
  

    return (

        <>
            
               <div key={propietario.id} className="contenedor-foto-nombre">
                <img src={foto} alt="" />
                <p className="my-3">{propietario.nombre} {propietario.apellido}</p>
               </div>
                   
        </>

    )

}


export default FotoNombreProp;