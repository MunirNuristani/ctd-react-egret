import React from "react";
import TodoListItem from "./TodoListItem";
const todoList = [
    {
      id: 1,
      title: "Fork the Assignment"
    },
    {
      id: 2,
      title: "Complete the Assignment"
    },
    {
      id:3, 
      title: "Submit the Assignment"
    }
  ]
function TodoList(){
    return(
        <ul>
            {todoList.map(function(item){
                return(
                  <TodoListItem key={item.id} todo={item} />
                )
            })}
      </ul>
    )
}

export default TodoList;