import React from 'react';
import InputWithLabel from './InputWithLabel';

function AddTodoList(props) {
    const [todoTitle, setTodoTitle] = React.useState("")

    const handleTitleChange = (event) => {
        event.preventDefault();        
        const newTodoTitle = event.target.value
        setTodoTitle(newTodoTitle)
    }

    const handleAddTodo=(event)=>{
        event.preventDefault();
        props.onAddTodo( {title:todoTitle, id:Date.now()})
        setTodoTitle("")
      
    }
    return (
        <form onSubmit={handleAddTodo}> 
            <InputWithLabel  
                todoTitle={todoTitle} 
                handleTitleChange={handleTitleChange}
            >
                Title:
            </InputWithLabel>
            <button > Add </button>
        </form>
    )
}

export default AddTodoList;