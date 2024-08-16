const FotoNombreProp = ({ propietario }) => {

   

    return (

        <>
            {propietario.map(elemento => (
               <div key={elemento.id} className="contenedor-foto-nombre">
                <img src={elemento.imagen} alt={elemento.nombre} />
                <h3>{elemento.nombre} {elemento.apellido}</h3>
               </div>
                   
             ))}
        </>

    )

}


export default FotoNombreProp;