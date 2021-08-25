import React from "react";
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
                <li id ={item.id}>
                {item.title}
                </li>
                )
            })}
      </ul>
    )
}

export default TodoList;