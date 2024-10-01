import { useEffect, useState } from "react";

const AvisoVencimiento = ({inquilinos}) => {

    const [avisoVisible,setAvisoVisible] = useState(true);
    let fechaHoy = new Date;
    fechaHoy = new Intl.DateTimeFormat('es-ES', { year: 'numeric', month: '2-digit' , day: '2-digit' }).format(fechaHoy);
    console.log(fechaHoy.getDate)
    // useEffect(() =>{
    //   inquilinos.map(e => )
    // },[]) 
    
    return (
        <>
           {avisoVisible ? <div className="aviso-vencimiento">
                <p className="texto-aviso">AVISO DE VENCIMIENTO</p>
                <button className="boton-cerrar-aviso" onClick={() => setAvisoVisible(false)}>X</button>
            </div>:""}
        </>
    )
}

export default AvisoVencimiento;