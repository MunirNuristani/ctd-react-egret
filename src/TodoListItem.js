import React from "react";
import style from  './TodoListItem.module.css' 
import { MdDeleteForever } from 'react-icons/md'

const TodoListItem = ({ todo, onRemoveTodo }) => {

    const [complete, setComplete] = React.useState(false)
    const completeTask = () => setComplete(!complete)
    
    return(
        <li className={style.ListItem}>
            <div><input type='checkbox' onChange={completeTask} />
            <p style={complete? {textDecoration:'line-through'}: {}}> {todo.fields.Title}</p></div>
            <button type="button" onClick= {()=>onRemoveTodo(todo.id)}><MdDeleteForever /> </button>
        </li>
    )
}

export default TodoListItem;