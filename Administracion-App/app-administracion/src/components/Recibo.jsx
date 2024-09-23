const Recibo = ({ recibos }) => {
    return (
        <>
            {recibos.map(e => (
                <div className="col my-5">
                    <div className="mostrar-recibo">
                        <div className="div-nombre">
                            <p>{e.apelliodo} {e.nombre}</p>
                        </div>
                        <div className="div-concepto">
                            <p>En concepto de: {e.concepto}</p>
                        </div>
                        <div className="fecha-monto d-flex justify-content-evenly">
                            <p>${e.monto}</p>
                            <p>fecha</p>
                        </div>
                    </div>

                </div>
            ))}
        </>
    )
}

export default Recibo;