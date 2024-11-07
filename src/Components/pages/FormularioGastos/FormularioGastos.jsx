import { useState } from "react"

export function FormularioGastos(){
    
    const[montoGasto, setMontoGasto] = useState('')
    const[fechaGasto, setFechaGasto] = useState('')
    const[descripcionGasto, setDescripcionGasto] = useState('')
    const[nombreGasto, setNombreGasto] = useState('')

    function procesarFormulario(e){
        e.preventDefault()
        let datosUsuario = {
            nombre:nombreGasto,
            fecha:fechaGasto,
            monto:montoGasto,
            descripción:descripcionGasto,
        }
        console.log(datosUsuario)
    }

    return(
        <>
            <br />
            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <h3>Registro de Gastos</h3>
                        <form className="p-5 border rounded shadow" onSubmit={procesarFormulario}>

                            <div className="row">
                                <div className="col-12">
                                    <label className="form-label">Nombre: </label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    value={nombreGasto}
                                    onChange={function(e){setNombreGasto(e.target.value)}}
                                    />
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-12 col-md-6">
                                    <label className="form-label">Fecha: </label>
                                    <input 
                                    type="date" 
                                    className="form-control"
                                    value={fechaGasto}
                                    onChange={function(e){setFechaGasto(e.target.value)}}
                                    />
                                </div>

                                <div className="col-12 col-md-6">
                                    <label className="form-label">Monto: </label>
                                    <input 
                                    min={0}
                                    type="number" 
                                    className="form-control" 
                                    value={montoGasto}
                                    onChange={function(e){setMontoGasto(e.target.value)}}
                                    />
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-12">
                                    <label className="form-label">Descripción: </label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    value={descripcionGasto}
                                    onChange={function(e){setDescripcionGasto(e.target.value)}}
                                    />
                                </div>
                            </div>

                            <button type="submit" className="btn btn-outline-success my-3 w-100">Registrar Gastos</button>

                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}