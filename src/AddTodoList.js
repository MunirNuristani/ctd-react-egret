import React from 'react';

function AddTodoList() {
    return (
        <form> 
            <label htmlFor="todoTitle"> Title: </label>
            <input type="text" id="todoTitle"></input>
            <button > Add </button>
        </form>
    )
}

export default AddTodoList;