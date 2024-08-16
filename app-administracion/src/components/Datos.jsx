

const Datos = ({ datos }) => {



    return (
        <>
            {datos.map(elemento => (
                <div key={elemento.id+100} className="container contenedor-datos">
                    <div className="row">
                        <div className="col">
                            <label className="label-datos">Teléfono:</label>
                            <p>{elemento.telefono}</p>
                            <label className="label-datos">Email:</label>
                            <p>{elemento.email}</p>
                            <label className="label-datos">DNI:</label>
                            <p>{elemento.dni}</p>
                            <label className="label-datos">Alias o CBU:</label>
                            <p>{elemento.cbu}</p>
                        </div>
                    </div>
                </div>
            ))}

        </>

    )

}

export default Datos;