import React from 'react'
import './styles/Cards.css'

const Editar = ({tareas, conseguiDatos, setEditar, setListadoState}) => {


    const actualizar = (e, id) => {
        e.preventDefault()
        let target = e.target
        const tareas_almacenadas = conseguiDatos()
        const indice = tareas_almacenadas.findIndex(tareas => tareas.id == id)

        let tarea_actualizada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        }
        tareas_almacenadas[indice] = tarea_actualizada
        localStorage.setItem('tareas', JSON.stringify(tareas_almacenadas))
        setListadoState(tareas_almacenadas)
        setEditar(0)
    }

    
  return (
    <div className='edit_form'>
        <form onSubmit={e =>actualizar(e,tareas.id)}>
            <input type='text'
                    name='titulo'
                    defaultValue={tareas.titulo}
                    className='titulo_editado'
            />
            <textarea name='descripcion'
                        defaultValue={tareas.descripcion}
                        className='descripcion_editada'
            />
            <input type='submit' value='Acticualizar' className='editar'/>
        </form>
    </div>
  )
}

export default Editar