import React, {useState} from 'react';
import InputWithLabel from './InputWithLabel';
import style from './AddTodoForm.module.css'
import { MdAddCircle } from 'react-icons/md'

function AddTodoList(props) {
    const [todoTitle, setTodoTitle] = useState("")

    const handleTitleChange = (event) => {
        event.preventDefault();        
        const newTodoTitle = event.target.value
        setTodoTitle(newTodoTitle)
    }

    const handleAddTodo=(event)=>{
        event.preventDefault();
        props.onAddTodo( todoTitle)
        setTodoTitle("")
      
    }
    return (
        <form className={style.addTodo} onSubmit={handleAddTodo}> 
            <InputWithLabel  
                todoTitle={todoTitle} 
                handleTitleChange={handleTitleChange}
            >
                Todo:
            </InputWithLabel>
            <button > <MdAddCircle /> </button>
        </form>
    )
}

export default AddTodoList;