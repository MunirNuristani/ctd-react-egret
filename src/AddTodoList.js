import React from 'react';

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
            <label htmlFor="todoTitle"> Title: </label>
            <input 
                type="text" 
                id="todoTitle" 
                name="title"
                value = { todoTitle} 
                onChange = {handleTitleChange}>    
            </input>
            <button > Add </button>
        </form>
    )
}

export default AddTodoList;