import React from 'react';
import AddTodoList from './AddTodoList';
import TodoList from './TodoList';


function App() {
  const [todoList, setTodoList] = React.useState([])
  
  const addTodo = newTodo => {
    setTodoList([...todoList, newTodo] )
  }
  return (
    <div>
      <h1> Todo List</h1>
      <AddTodoList onAddTodo={ addTodo } />
      <TodoList todoList = { todoList }/>
      
    </div>
  );
}
export default App;
