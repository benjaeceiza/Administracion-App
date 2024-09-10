import foto from "../assets/usuario.png"

const FotoNombreProp = ({ propietario,imagen }) => {

    


    return (

        <>
            <div key={propietario.id} className="ancho mg">
                <img className="" src={foto} alt={propietario.nombre} />
                <div className=" nombre fondo-nombre">
                    <p className="my-3 nombre">{propietario.apellido} {propietario.nombre} </p>
                </div>
            </div>

        </>

    )

}


export default FotoNombreProp;