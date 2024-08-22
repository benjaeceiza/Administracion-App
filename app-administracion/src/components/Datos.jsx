

const Datos = ({ datos }) => {



    return (
        <>
            <div key={datos.id + 100} className="container contenedor-datos">
                <div className="row">
                    <div className="col">
                        <label className="label-datos">Telefono:</label>
                        <p>{1}</p>
                        <label className="label-datos">Email:</label>
                        <p>{1}</p>
                        <label className="label-datos">DNI:</label>
                        <p>{1}</p>
                        <label className="label-datos">Alias o CBU:</label>
                        <p>{1}</p>
                    </div>
                </div>
            </div>
        </>

    )

}

export default Datos;