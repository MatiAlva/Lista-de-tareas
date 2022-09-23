import React, {useState} from 'react'
import todoLogo from '../assets/todoLogo.svg';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import './styles/Header.css'
import { guardarEnStorage } from '../helpers/GuardarStorage';

const Header = ({setListadoState}) => {
    const [tareasState, setTareasState] = useState({
        titulo: '',
        descripcion: ''
    })


    const handleSubmit = e => {
        e.preventDefault()
        const target = e.target
        let titulo = target.titulo.value
        let descripcion = target.descripcion.value

        let tarea = {
            id: new Date().getTime(),
            titulo,
            descripcion
        }

        setTareasState(tarea)
        setListadoState(elementos => {
            return [tarea, ...elementos]
        })
        guardarEnStorage('tareas', tarea)
        
    }

   


  return (
    <div className='header'>
      <img src={todoLogo} />

      <form onSubmit={handleSubmit} className='newTaskForm'>
        <input placeholder="Titulo" type="text" name='titulo' />
        <input placeholder="Descripcion" type="text" name='descripcion' />
        <button>Create <AiOutlinePlusCircle size={20} /></button>
      </form>
    </div>
  )
}

export default Header