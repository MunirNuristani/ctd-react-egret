import React from 'react';

function AddTodoList(props) {
    const handleAddTodo=(event)=>{
        event.preventDefault();
        var todoTitle = event.target.title.value
        console.log(todoTitle)
        props.onAddTodo(todoTitle)
        event.target.reset()
      
    }
    return (
        <form onSubmit={handleAddTodo}> 
            <label htmlFor="todoTitle"> Title: </label>
            <input type="text" id="todoTitle" name="title" ></input>
            <button > Add </button>
        </form>
    )
}

export default AddTodoList;