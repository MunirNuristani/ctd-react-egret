import React from "react";
import TodoListItem from "./TodoListItem";
import style from './TodoList.module.css'

function TodoList({ todoList, onRemoveTodo }){
    return(
        <ul className={style.TodoList}>
            {todoList.map(function(item){
                return(
                  <TodoListItem key={item.id} todo={item} onRemoveTodo={onRemoveTodo} />
                )
            })}
      </ul>
    )
}

export default TodoList;