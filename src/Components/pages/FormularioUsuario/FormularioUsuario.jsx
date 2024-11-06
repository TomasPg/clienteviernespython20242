import { useState } from "react"

export function FormularioUsuario(){
    
    const[nombreUsuario, setNombreUsuario] = useState('')
    const[edadUsuario, setEdadUsuario] = useState('')
    const[telefonoUsuario, setTelefonoUsuario] = useState('')
    const[correoUsuario, setCorreoUsuario] = useState('')
    const[contraseñaUsuario, setContraseñaUsuario] = useState('')
    const[fechaUsuario, setFechaUsuario] = useState('')
    const[ciudadUsuario, setCiudadUsuario] = useState('')

    function procesarFormulario(e){
        e.preventDefault()
        let datosUsuario = {
            nombre:nombreUsuario,
            edad:edadUsuario,
            telefono:telefonoUsuario,
            correo:correoUsuario,
            contraseña:contraseñaUsuario,
            fechaRegistro:fechaUsuario,
            ciudad:ciudadUsuario
        }
        console.log(datosUsuario)
    }

    return(
        <>
            <br />
            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <h3>Registro de Usuario</h3>
                        <form className="p-5 border rounded shadow" onSubmit={procesarFormulario}>

                            <div className="row">
                                <div className="col-12">
                                    <label className="form-label">Nombre: </label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    value={nombreUsuario}
                                    onChange={function(e){setNombreUsuario(e.target.value)}}
                                    />
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-12 col-md-6">
                                    <label className="form-label">Edad: </label>
                                    <input 
                                    min={0}
                                    type="number" 
                                    className="form-control"
                                    value={edadUsuario}
                                    onChange={function(e){setEdadUsuario(e.target.value)}}
                                    />
                                </div>

                                <div className="col-12 col-md-6">
                                    <label className="form-label">Telefono: </label>
                                    <input 
                                    min={0}
                                    type="number" 
                                    className="form-control" 
                                    value={telefonoUsuario}
                                    onChange={function(e){setTelefonoUsuario(e.target.value)}}
                                    />
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-12 col-md-6">
                                    <label className="form-label">Correo: </label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    value={correoUsuario}
                                    onChange={function(e){setCorreoUsuario(e.target.value)}}
                                    />
                                </div>

                                <div className="col-12 col-md-6">
                                    <label className="form-label">Contraseña: </label>
                                    <input 
                                    type="password" 
                                    className="form-control" 
                                    value={contraseñaUsuario}
                                    onChange={function(e){setContraseñaUsuario(e.target.value)}}
                                    />
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-12 col-md-6">
                                    <label className="form-label">Fecha Registro: </label>
                                    <input 
                                    type="date" 
                                    className="form-control" 
                                    value={fechaUsuario}
                                    onChange={function(e){setFechaUsuario(e.target.value)}}
                                    />
                                </div>

                                <div className="col-12 col-md-6">
                                    <label className="form-label">Ciudad: </label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    value={ciudadUsuario}
                                    onChange={function(e){setCiudadUsuario(e.target.value)}}
                                    />
                                </div>
                            </div>

                            <button type="submit" className="btn btn-outline-success my-3 w-100">Registrar</button>

                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}