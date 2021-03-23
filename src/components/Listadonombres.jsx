import React, {useState} from 'react'
import uniqid from 'uniqid'

const Listadonombres = () => {


    const [nombre, setNombre] = useState('')
    const [listadonombres, setListadoNombres] = useState([])

    const addNombre = (e) =>{
        e.preventDefault()
        const nuevoNombre ={
            id:uniqid(),
            tituloNombre:nombre
        }
        setListadoNombres([...listadonombres, nuevoNombre])
        setNombre('')
    

    }
    
    return(
    <div>
        <h2>Aplicacion CRUD BASICA</h2>
        <div className="row">
            <div className="col">
                <h2>Listado de nombres</h2>
                <ul className="list-group">
                    {
                        listadonombres.map(item =>
                            <li key="{item.id}" className="list-group-item">
                                <strong>Nombre: </strong>{item.tituloNombre} 
                                  <strong> ID: </strong>{item.id}
                                 <button className="btn btn-danger float-right">BORRAR</button>
                                 </li>
                            )
                    }
                </ul>
                <p></p>

            </div>
            <div className="col">
                <h2>Formulario para añadir nombres</h2>
                <form className="form-group" 
                onSubmit={(e) => (addNombre(e))}
                
                >
                    <input onChange={(e) => {setNombre(e.target.value)}}
                    type="text" placeholder="Introduce el nombre" 
                    className="form-control mb-3"
                    value={nombre}
                    />
                    <input type="submit"  className="btn btn-info btn-block" value="Registrar nombre"/>
                </form>

            </div>
        </div>
    </div>
    
    )
}

export default Listadonombres

