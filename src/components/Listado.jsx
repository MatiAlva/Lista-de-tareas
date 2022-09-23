import React, { useEffect } from 'react'
import { useState } from 'react'
import Editar from './Editar'
import './styles/Cards.css'

const Listado = ({setListadoState, listadoState}) => {

   // const [listadoState, setListadoState] = useState([])
   const [editar, setEditar] = useState(0)

    useEffect(() => {
        conseguiDatos()
    }, [])


    const conseguiDatos = () => {
        let tareas = JSON.parse(localStorage.getItem('tareas'))
        setListadoState(tareas)
        return tareas
    }


    const borrarTarea = (id) => {
        let tareas_almacenadas = conseguiDatos()
        let nuevo_array_tareas = tareas_almacenadas.filter(tareas => tareas.id !== parseInt(id))
        setListadoState(nuevo_array_tareas)
        localStorage.setItem('tareas', JSON.stringify(nuevo_array_tareas))
    }


    return (
        <>
            {listadoState !=null ? 
                (listadoState.map(tareas => {
                return (
                    <article key={tareas.id} className='tarea-item'>
                        <h3 className='title'> {tareas.titulo}</h3>
                        <p className='description'> {tareas.descripcion} </p>
                        <button onClick={()=> setEditar(tareas.id)} className='edit button'>Editar</button>
                        <button onClick={() => borrarTarea(tareas.id)} className='delete button'>Eliminar</button>

                        {editar === tareas.id && (
                            <Editar tareas={tareas} conseguiDatos={conseguiDatos} setEditar={setEditar} setListadoState={setListadoState}/>
                        )}

                    </article>
                )
            }))
                : (
                    <article className='tarea-item'>
                        <h3 className='title'> No hay tareas para mostrar</h3>
                        <p className='description'>Introduzca una tarea  </p>
                    </article>
                )
        }

        </>
    )
}

export default Listado