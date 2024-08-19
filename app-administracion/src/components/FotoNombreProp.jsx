const FotoNombreProp = ({ propietario }) => {

   

    return (

        <>
            {propietario.map(elemento => (
               <div key={elemento.id} className="contenedor-foto-nombre">
                <img src={elemento.imagen} alt={elemento.nombre} />
                <p className="my-3">{elemento.nombre} {elemento.apellido}</p>
               </div>
                   
             ))}
        </>

    )

}


export default FotoNombreProp;