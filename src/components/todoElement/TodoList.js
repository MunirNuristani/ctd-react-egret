import React from "react";
import TodoListItem from "./TodoListItem";
import "./style.css";
import PropTypes from "prop-types";

function TodoList({ todoList, onRemoveTodo, onUpdateTodo , form}) {
  return (
    <ul className="TodoList active">
      {todoList.map(function(item) {
        return (
          <TodoListItem key={item.id} todo={item} onRemoveTodo={onRemoveTodo}  onUpdateTodo={onUpdateTodo} form={form}  />
        );
      })}
    </ul>
  );
}
TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onUpdateTodo: PropTypes.func.isRequired,
  form: PropTypes.string,
};

export default TodoList;
