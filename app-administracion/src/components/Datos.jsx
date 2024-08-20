

const Datos = ({ datos }) => {



    return (
        <>
            <div key={datos.id + 100} className="container contenedor-datos">
                <div className="row">
                    <div className="col">
                        <label className="label-datos">Nombre:</label>
                        <p>{datos.nombre} {datos.apellido}</p>
                        {/* <label className="label-datos">Email:</label>
                            <p>{elemento.email}</p>
                            <label className="label-datos">DNI:</label>
                            <p>{elemento.dni}</p>
                            <label className="label-datos">Alias o CBU:</label>
                            <p>{elemento.cbu}</p> */}
                    </div>
                </div>
            </div>
        </>

    )

}

export default Datos;